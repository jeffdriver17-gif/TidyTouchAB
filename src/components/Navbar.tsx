import React from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface NavbarProps {
  onBookNow: () => void;
  onNavigate: (view: 'home' | 'services' | 'booking') => void;
  currentView: string;
}

export default function Navbar({ onBookNow, onNavigate, currentView }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { label: 'Services', id: 'services' },
    { label: 'Commercial', id: 'commercial' },
    { label: 'Airbnb', id: 'airbnb' },
    { label: 'About Us', id: 'about' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'FAQ', id: 'faq' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
      <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => onNavigate('home')}
        >
          <span className="text-2xl font-extrabold tracking-tight font-headline">
            <span className="text-on-surface">tidy </span><span className="text-primary">touch</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-headline text-sm font-medium tracking-tight">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id as any)}
              className={cn(
                "transition-colors duration-300 hover:text-primary",
                currentView === item.id ? "text-primary border-b-2 border-primary pb-1" : "text-on-surface-variant"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={onBookNow}
            className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-headline font-bold text-sm signature-gradient transition-transform active:scale-95 duration-200 shadow-sm"
          >
            Book Now
          </button>
          
          <button 
            className="md:hidden p-2 text-on-surface"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-surface-container-high p-6 flex flex-col gap-4"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id as any);
                setIsMenuOpen(false);
              }}
              className="text-left font-headline font-medium text-on-surface py-2"
            >
              {item.label}
            </button>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
