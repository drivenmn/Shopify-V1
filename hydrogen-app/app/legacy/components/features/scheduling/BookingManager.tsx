import { PopupModal } from 'react-calendly';
import { useBooking } from './BookingContext';
import { PaymentModal } from './PaymentModal';

interface BookingManagerProps {
  calendlyUrl?: string;
}

export function BookingManager({ calendlyUrl = "https://calendly.com/drivenmn/consultation" }: BookingManagerProps) {
  const { isBookingOpen, closeBooking, isPaymentOpen, closePayment, openPayment } = useBooking();

  // Handle successful booking
  const handleEventScheduled = (e: any) => {
    // In a real implementation, we'd capture the event details here
    // For now, we'll close Calendly and open the Payment Modal
    closeBooking();
    
    // Small delay to ensure smooth transition
    setTimeout(() => {
      openPayment();
    }, 500);
  };

  return (
    <>
      <PopupModal
        url={calendlyUrl}
        onModalClose={closeBooking}
        open={isBookingOpen}
        rootElement={document.getElementById('root') || document.body}
        // Custom styling to match theme implicitly via CSS or just default
      />
      
      <PaymentModal 
        isOpen={isPaymentOpen}
        onClose={closePayment}
      />
    </>
  );
}
