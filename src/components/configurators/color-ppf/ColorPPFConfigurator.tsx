import { useState } from 'react';
import { PageBreadcrumb } from '../../PageBreadcrumb';
import { features, colors } from './data';
import { ColorOption } from './types';
import { useCart } from '../../../utils/cartContext';
import { toast } from 'sonner@2.0.3';
import { TeslaVisualizer } from '../shared/TeslaVisualizer';

export function ColorPPFConfigurator({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const [selectedColor, setSelectedColor] = useState<ColorOption>(colors[0]);
  const [loading, setLoading] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    setLoading(true);
    
    // Simulate network request
    setTimeout(() => {
      addToCart({
        id: `color-ppf-${selectedColor.id}`,
        name: `Color PPF - ${selectedColor.name}`,
        price: selectedColor.price,
        quantity: 1,
        type: 'ppf',
        description: `${selectedColor.name} (${selectedColor.finish}) Full Vehicle Protection`,
        metadata: {
          color: selectedColor.name,
          finish: selectedColor.finish,
          vehicle: 'Tesla Model Y'
        }
      });
      
      toast.success(`${selectedColor.name} Package Added`, {
        description: 'Your configuration has been saved to cart.'
      });
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-background">
      <PageBreadcrumb
        segments={[
          { label: 'Services' },
          { label: 'Color PPF' },
          { label: 'Studio' }
        ]}
        onNavigate={onNavigate}
      />

      <TeslaVisualizer
        colors={colors}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        loading={loading}
        handleAddToCart={handleAddToCart}
        features={features}
      />
    </div>
  );
}
