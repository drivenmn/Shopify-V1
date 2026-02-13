import { Trash2, Plus, Minus, ShoppingCart, ArrowRight } from 'lucide-react';
import { useCart } from '../utils/cartContext';
import { motion } from 'motion/react';
import { useTheme } from '../utils/themeContext';
import { PageBreadcrumb } from './PageBreadcrumb';

interface CartPageProps {
  onNavigate?: (page: string) => void;
}

export function CartPage({ onNavigate }: CartPageProps) {
  const { items, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();
  const { theme } = useTheme();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <PageBreadcrumb
          segments={[
            { label: 'Shopping Cart' }
          ]}
          onNavigate={onNavigate || (() => {})}
        />
        <div className="pt-12 pb-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center py-20">
              <ShoppingCart className="w-24 h-24 mx-auto mb-6 text-muted-foreground/20" />
              <h1 className="text-foreground mb-4" style={{ fontSize: '42px', fontWeight: 700 }}>
                Your Cart is Empty
              </h1>
              <p className="text-muted-foreground mb-8" style={{ fontSize: '18px' }}>
                Add some services to your cart to get started
              </p>
              <button
                onClick={() => onNavigate?.('home')}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-4 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-primary/50"
                style={{ fontSize: '16px', fontWeight: 700 }}
              >
                Browse Services
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <PageBreadcrumb
        segments={[
          { label: 'Shopping Cart' }
        ]}
        onNavigate={onNavigate || (() => {})}
      />
      
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-20">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-foreground mb-2" style={{ fontSize: '48px', fontWeight: 700 }}>
            Shopping Cart
          </h1>
          <p className="text-muted-foreground" style={{ fontSize: '18px' }}>
            {totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -100 }}
                className="bg-card border border-border rounded-2xl p-6 shadow-xl"
              >
                <div className="flex items-start gap-6">
                  {/* Item Info */}
                  <div className="flex-1">
                    <h3 className="text-card-foreground mb-2" style={{ fontSize: '20px', fontWeight: 700 }}>
                      {item.name}
                    </h3>
                    <p className="text-muted-foreground mb-4" style={{ fontSize: '14px' }}>
                      {item.description}
                    </p>

                    {/* Vehicle Details */}
                    {item.details?.vehicle && (
                      <div className="bg-muted border border-border rounded-lg p-3 mb-4">
                        <div className="text-muted-foreground text-xs uppercase tracking-wider mb-1">Vehicle</div>
                        <div className="text-foreground" style={{ fontSize: '14px', fontWeight: 600 }}>
                          {item.details.vehicle.year} {item.details.vehicle.make} {item.details.vehicle.model}
                        </div>
                      </div>
                    )}

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 bg-muted border border-border hover:border-primary rounded-lg flex items-center justify-center transition-colors"
                      >
                        <Minus className="w-4 h-4 text-muted-foreground" />
                      </button>
                      <span className="text-foreground w-12 text-center" style={{ fontSize: '16px', fontWeight: 600 }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 bg-muted border border-border hover:border-primary rounded-lg flex items-center justify-center transition-colors"
                      >
                        <Plus className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </div>
                  </div>

                  {/* Price & Remove */}
                  <div className="text-right flex flex-col items-end gap-4">
                    <div className="text-warning" style={{ fontSize: '24px', fontWeight: 700 }}>
                      ${(item.price * item.quantity).toLocaleString()}
                    </div>
                    {item.quantity > 1 && (
                      <div className="text-muted-foreground text-xs">
                        ${item.price.toLocaleString()} each
                      </div>
                    )}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-muted-foreground hover:text-destructive transition-colors p-2 hover:bg-destructive/10 rounded-lg"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:sticky lg:top-32 h-fit">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
              <h2 className="text-card-foreground mb-6" style={{ fontSize: '24px', fontWeight: 700 }}>
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-foreground" style={{ fontSize: '18px', fontWeight: 600 }}>
                    ${totalPrice.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Tax (estimated)</span>
                  <span className="text-foreground" style={{ fontSize: '18px', fontWeight: 600 }}>
                    ${(totalPrice * 0.0875).toFixed(2)}
                  </span>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-warning/50 to-transparent" />
                <div className="flex items-center justify-between pt-2">
                  <span className="text-muted-foreground">Total</span>
                  <span className="font-['Agdasima'] text-warning" style={{ fontSize: '36px', fontWeight: 700, lineHeight: '1' }}>
                    ${(totalPrice * 1.0875).toLocaleString()}
                  </span>
                </div>
              </div>

              <button
                className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-4 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-primary/50 mb-4"
                style={{ fontSize: '16px', fontWeight: 700 }}
              >
                Proceed to Checkout
              </button>

              <button
                onClick={() => onNavigate?.('home')}
                className="w-full border-2 border-border hover:border-primary text-foreground px-8 py-4 rounded-xl transition-all duration-300"
                style={{ fontSize: '16px', fontWeight: 600 }}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}