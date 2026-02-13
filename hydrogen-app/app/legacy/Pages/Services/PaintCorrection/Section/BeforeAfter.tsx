import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { MoveHorizontal, Zap } from 'lucide-react';

export function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in event ? event.touches[0].clientX : event.clientX;
    const position = ((x - rect.left) / rect.width) * 100;

    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('touchend', handleGlobalMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('touchend', handleGlobalMouseUp);
    };
  }, []);

  return (
    <section className="py-24 bg-auto-carbon relative overflow-hidden" data-section="PaintCorrectionComparison">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <Zap className="w-4 h-4 text-auto-plum-neon" />
            <span className="text-xs font-bold text-white uppercase tracking-widest font-['Exo_2']">Instant Results</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-['Exo_2'] font-bold text-white uppercase italic mb-4">
            SEE THE <span className="text-auto-plum-neon">DIFFERENCE</span>
          </h2>
          <p className="text-xl text-auto-silver max-w-2xl mx-auto font-['Inter'] font-light">
            Drag the slider to reveal the true potential of your paintwork.
          </p>
        </div>

        <div 
          ref={containerRef}
          className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden cursor-ew-resize select-none border-4 border-white/5 shadow-2xl group"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          {/* After Image (Base) */}
          <img 
            src="https://images.unsplash.com/photo-1675462378427-8eaefe5d696b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920" 
            alt="After Paint Correction" 
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
          <div className="absolute top-6 right-6 bg-auto-plum-neon/90 backdrop-blur text-black px-4 py-1.5 rounded-full text-xs font-bold z-10 font-['Exo_2'] tracking-widest uppercase shadow-lg">
            After Correction
          </div>

          {/* Before Image (Overlay) */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden border-r-2 border-white/50"
            style={{ width: `${sliderPosition}%` }}
          >
            <img 
              src="https://images.unsplash.com/photo-1693514138341-7315edfe5715?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920" 
              alt="Before Paint Correction" 
              className="absolute top-0 left-0 h-full w-full max-w-none object-cover grayscale-[0.5] brightness-90 contrast-125" 
              style={{ width: containerRef.current?.offsetWidth || '100%' }}
              draggable={false}
            />
            <div className="absolute top-6 left-6 bg-black/80 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-bold z-10 font-['Exo_2'] tracking-widest uppercase border border-white/20">
              Before
            </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-auto-plum-neon cursor-ew-resize z-20 shadow-[0_0_20px_rgba(157,78,221,0.8)]"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] text-auto-plum-deep ring-4 ring-auto-plum-neon/50 transition-transform group-hover:scale-110">
              <MoveHorizontal className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
