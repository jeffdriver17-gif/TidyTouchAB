import React, { useState, useRef } from 'react';
import { ArrowLeftRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const SLIDES = [
  { id: 'kitchen', title: 'Surface Care', dirty: '/before_after_dirty.png', clean: '/before_after_clean.png' },
  { id: 'baseboard', title: 'Deep Detailing', dirty: '/baseboard_dirty.png', clean: '/baseboard_clean.png' }
];

export default function BeforeAfterSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const slide = SLIDES[activeSlide];

  const handleDrag = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    let clientX = 0;
    if ('touches' in e) {
      if (e.touches.length > 0) clientX = e.touches[0].clientX;
      else return;
    } else {
      clientX = (e as React.MouseEvent).clientX;
    }

    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  return (
    <div className="py-24 px-6 bg-surface-container-low/50">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tighter mb-4 font-headline">The Luminous Difference</h2>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto mb-8">Experience the transformative power of our detail-obsessed curators. Slide to see our deep cleaning action on real-world spaces.</p>
        
        {/* Carousel Navigation */}
        <div className="flex justify-center gap-4 flex-wrap">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => { setActiveSlide(i); setSliderPosition(50); }}
              className={cn(
                "px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ring-1",
                activeSlide === i 
                  ? "bg-primary text-white ring-primary shadow-[0_4px_14px_0_rgba(16,185,129,0.4)] scale-105"
                  : "bg-surface-container-highest text-on-surface-variant hover:bg-surface-variant ring-outline-variant/30"
              )}
            >
              {s.title}
            </button>
          ))}
        </div>
      </div>

      <div 
        className="relative w-full max-w-6xl mx-auto h-[400px] md:h-[600px] rounded-[2.5rem] overflow-hidden cursor-ew-resize group shadow-2xl bg-surface-container-lowest"
        ref={containerRef}
        onMouseMove={(e) => {
          if (e.buttons === 1) handleDrag(e);
        }}
        onTouchMove={handleDrag}
        onMouseDown={handleDrag}
        onTouchStart={handleDrag}
      >
        {/* Dirty Image (Background) */}
        <div className="absolute inset-0 w-full h-full bg-surface-container-highest">
          <img
            key={`dirty-${slide.id}`}
            src={slide.dirty}
            alt="Before Cleaning"
            className="w-full h-full object-cover pointer-events-none grayscale-[0.5] brightness-75 transition-opacity duration-500 animate-in fade-in"
            draggable={false}
          />
        </div>
        <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest pointer-events-none border border-white/10 z-10 transition-opacity">
          Before Care
        </div>
        
        {/* Clean Image (Foreground with Clip-Path) */}
        <img
          key={`clean-${slide.id}`}
          src={slide.clean}
          alt="After Cleaning"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none brightness-110 contrast-105 transition-opacity duration-500 animate-in fade-in"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          draggable={false}
        />
        <div 
          className="absolute top-6 left-6 bg-primary text-white backdrop-blur-md px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest pointer-events-none shadow-xl border border-white/20 z-10"
          style={{ opacity: sliderPosition > 10 ? 1 : 0, transition: 'opacity 0.2s' }}
        >
          After Tidy Touch
        </div>

        {/* Slider Line & Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1.5 bg-white cursor-ew-resize pointer-events-none drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-[0_0_30px_rgba(0,0,0,0.5)] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform">
            <ArrowLeftRight className="w-7 h-7 text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
}
