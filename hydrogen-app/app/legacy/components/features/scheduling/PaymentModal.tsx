import { motion, AnimatePresence } from 'motion/react';
import { X, CreditCard, Lock, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../../ui/button';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PaymentModal({ isOpen, onClose }: PaymentModalProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate API call to Global Payments
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      
      // Close modal after success
      setTimeout(() => {
        onClose();
        setIsSuccess(false); // Reset for next time
      }, 3000);
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-auto-carbon border border-auto-plum-neon/30 rounded-2xl shadow-[0_0_50px_rgba(157,78,221,0.2)] overflow-hidden"
          >
            {/* Header */}
            <div className="relative p-6 border-b border-white/10 bg-gradient-to-r from-auto-plum-deep/20 to-transparent">
              <button 
                onClick={onClose}
                className="absolute right-4 top-4 text-auto-silver hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 rounded-xl bg-auto-plum-neon/20 flex items-center justify-center border border-auto-plum-neon/30">
                  <Lock className="w-5 h-5 text-auto-plum-neon" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-['Exo_2'] uppercase">Secure Deposit</h3>
                  <div className="flex items-center gap-1 text-xs text-auto-plum-mist font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-3 h-3" />
                    Global Payments Protected
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {isSuccess ? (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/50">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2 font-['Exo_2']">Payment Successful!</h4>
                  <p className="text-auto-silver">Your appointment has been confirmed.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Amount Display */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 flex justify-between items-center">
                    <span className="text-auto-silver font-light">Deposit Amount</span>
                    <span className="text-2xl font-bold text-white font-['Exo_2']">$50.00</span>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-auto-silver uppercase tracking-wider">Cardholder Name</label>
                      <input 
                        type="text" 
                        placeholder="JOHN DOE"
                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:border-auto-plum-neon focus:ring-1 focus:ring-auto-plum-neon transition-all outline-none font-['Inter']"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-auto-silver uppercase tracking-wider">Card Number</label>
                      <div className="relative">
                        <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-auto-silver" />
                        <input 
                          type="text" 
                          placeholder="0000 0000 0000 0000"
                          className="w-full bg-black/40 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white placeholder:text-white/20 focus:border-auto-plum-neon focus:ring-1 focus:ring-auto-plum-neon transition-all outline-none font-['Inter']"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-auto-silver uppercase tracking-wider">Expiry</label>
                        <input 
                          type="text" 
                          placeholder="MM/YY"
                          className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:border-auto-plum-neon focus:ring-1 focus:ring-auto-plum-neon transition-all outline-none font-['Inter']"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-auto-silver uppercase tracking-wider">CVC</label>
                        <input 
                          type="text" 
                          placeholder="123"
                          className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:border-auto-plum-neon focus:ring-1 focus:ring-auto-plum-neon transition-all outline-none font-['Inter']"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full bg-auto-plum-neon text-black hover:bg-white font-bold uppercase tracking-wider h-12 text-sm rounded-xl transition-all shadow-[0_0_20px_rgba(157,78,221,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                  >
                    {isProcessing ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        Processing...
                      </span>
                    ) : (
                      'Pay Secure Deposit'
                    )}
                  </Button>
                  
                  <div className="flex justify-center gap-4 opacity-50 grayscale">
                    {/* Placeholder Card Icons */}
                    <div className="h-6 w-10 bg-white/20 rounded" />
                    <div className="h-6 w-10 bg-white/20 rounded" />
                    <div className="h-6 w-10 bg-white/20 rounded" />
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
