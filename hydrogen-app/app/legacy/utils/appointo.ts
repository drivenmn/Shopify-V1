import { toast } from 'sonner@2.0.3';

// Appointo API Integration Mock
// Documentation: https://api-docs.appointo.me/

export interface TimeSlot {
  id: string;
  startTime: string; // ISO string
  endTime: string; // ISO string
  available: boolean;
}

export interface BookingDetails {
  slotId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  serviceId: string;
  vehicleDetails: string;
}

// Mock availability
export const fetchAvailableSlots = async (date: Date): Promise<TimeSlot[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));

  const slots: TimeSlot[] = [];
  const startHour = 9;
  const endHour = 17;

  for (let i = startHour; i < endHour; i++) {
    const startTime = new Date(date);
    startTime.setHours(i, 0, 0, 0);
    const endTime = new Date(date);
    endTime.setHours(i + 1, 0, 0, 0);

    // Random availability
    const available = Math.random() > 0.3;

    slots.push({
      id: `slot-${startTime.getTime()}`,
      startTime: startTime.toISOString(),
      endTime: endTime.toISOString(),
      available
    });
  }

  return slots;
};

// Mock booking creation
export const createBooking = async (details: BookingDetails): Promise<{ success: boolean; bookingId?: string; error?: string }> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  // In a real implementation, you would POST to https://api.appointo.me/booking
  console.log('Creating booking with Appointo:', details);

  if (Math.random() > 0.1) {
    return {
      success: true,
      bookingId: `bk_${Math.random().toString(36).substr(2, 9)}`
    };
  } else {
    return {
      success: false,
      error: 'Slot no longer available'
    };
  }
};
