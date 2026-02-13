import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Calendar } from './ui/calendar';
import { Button } from './ui/button';
import { Loader2, Calendar as CalendarIcon, Clock, CheckCircle } from 'lucide-react';
import { fetchAvailableSlots, createBooking, TimeSlot } from '../utils/appointo';
import { toast } from 'sonner@2.0.3';
import { format } from 'date-fns';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
  vehicleDetails: string;
}

export function BookingModal({ isOpen, onClose, serviceName, vehicleDetails }: BookingModalProps) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [slots, setSlots] = useState<TimeSlot[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [booking, setBooking] = useState(false);
  const [booked, setBooked] = useState(false);

  useEffect(() => {
    if (date && isOpen) {
      setLoadingSlots(true);
      fetchAvailableSlots(date)
        .then(setSlots)
        .catch(err => console.error(err))
        .finally(() => setLoadingSlots(false));
      setSelectedSlot(null);
    }
  }, [date, isOpen]);

  const handleBook = async () => {
    if (!selectedSlot || !date) return;
    
    setBooking(true);
    try {
      const result = await createBooking({
        slotId: selectedSlot,
        customerName: 'Guest User', // In real app, collect this or get from auth
        customerEmail: 'guest@example.com',
        customerPhone: '555-0123',
        serviceId: serviceName,
        vehicleDetails
      });

      if (result.success) {
        setBooked(true);
        toast.success('Appointment Scheduled!', {
          description: `Confirmed for ${format(date, 'MMMM do')} at ${format(new Date(slots.find(s => s.id === selectedSlot)?.startTime || ''), 'h:mm a')}`
        });
      } else {
        toast.error('Booking Failed', { description: result.error });
      }
    } catch (error) {
      toast.error('Something went wrong');
    } finally {
      setBooking(false);
    }
  };

  const handleClose = () => {
    setBooked(false);
    setSelectedSlot(null);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="sm:max-w-[600px] bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <CalendarIcon className="w-6 h-6 text-primary" />
            Schedule Installation
          </DialogTitle>
          <DialogDescription>
            Choose a date and time for your {serviceName}
          </DialogDescription>
        </DialogHeader>

        {!booked ? (
          <div className="grid md:grid-cols-2 gap-6 py-4">
            <div>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={(date) => date < new Date(new Date().setHours(0,0,0,0))}
                className="rounded-md border border-border"
              />
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-sm flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Available Times
              </h4>
              
              <div className="grid grid-cols-2 gap-2 max-h-[300px] overflow-y-auto pr-2">
                {loadingSlots ? (
                  <div className="col-span-2 flex justify-center py-8">
                    <Loader2 className="w-6 h-6 animate-spin text-primary" />
                  </div>
                ) : slots.length > 0 ? (
                  slots.map((slot) => (
                    <button
                      key={slot.id}
                      onClick={() => setSelectedSlot(slot.id)}
                      disabled={!slot.available}
                      className={`p-2 text-sm rounded-md border transition-all ${
                        selectedSlot === slot.id
                          ? 'bg-primary text-primary-foreground border-primary'
                          : slot.available
                          ? 'hover:border-primary/50 hover:bg-muted'
                          : 'opacity-50 cursor-not-allowed bg-muted'
                      }`}
                    >
                      {format(new Date(slot.startTime), 'h:mm a')}
                    </button>
                  ))
                ) : (
                  <p className="col-span-2 text-sm text-muted-foreground text-center py-4">
                    No slots available for this date.
                  </p>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-bold">Booking Confirmed!</h3>
            <p className="text-muted-foreground max-w-xs">
              We've sent a confirmation email with all the details. We look forward to seeing you.
            </p>
          </div>
        )}

        <div className="flex justify-end gap-3 pt-4 border-t border-border mt-2">
          {!booked ? (
            <>
              <Button variant="outline" onClick={handleClose}>Cancel</Button>
              <Button 
                onClick={handleBook} 
                disabled={!selectedSlot || booking}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {booking ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                Confirm Booking
              </Button>
            </>
          ) : (
            <Button onClick={handleClose}>Close</Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
