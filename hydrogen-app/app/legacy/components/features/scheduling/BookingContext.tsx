import React, { createContext, useContext, useState, ReactNode } from 'react';

interface BookingContextType {
  isBookingOpen: boolean;
  isPaymentOpen: boolean;
  openBooking: () => void;
  closeBooking: () => void;
  openPayment: () => void;
  closePayment: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);
  
  const openPayment = () => {
    setIsBookingOpen(false); // Ensure booking is closed
    setIsPaymentOpen(true);
  };
  
  const closePayment = () => setIsPaymentOpen(false);

  return (
    <BookingContext.Provider 
      value={{ 
        isBookingOpen, 
        isPaymentOpen, 
        openBooking, 
        closeBooking, 
        openPayment, 
        closePayment 
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}
