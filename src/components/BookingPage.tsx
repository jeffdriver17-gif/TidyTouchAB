import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Minus, Plus, ShieldCheck, Home, Sparkles, Truck, Microwave, Shirt, Refrigerator, Calendar as CalendarIcon, Clock, MapPin, User, Mail, Phone, Dog, LayoutDashboard, FileText } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import Calendar from './Calendar';

const iconMap = {
  Home: Home,
  Sparkles: Sparkles,
  Truck: Truck,
};

export default function BookingPage() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [selectedTier, setSelectedTier] = React.useState('residential');
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = React.useState('Anytime (8am - 4pm)');
  const [bedrooms, setBedrooms] = React.useState(2);
  const [bathrooms, setBathrooms] = React.useState(1);
  const [windows, setWindows] = React.useState(0);
  const [condition, setCondition] = React.useState('average');
  const [frequency, setFrequency] = React.useState('weekly');
  const [selectedAddons, setSelectedAddons] = React.useState<string[]>([]);
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [city, setCity] = React.useState('');
  const [postalCode, setPostalCode] = React.useState('');
  const [notes, setNotes] = React.useState('');

  const ADDON_OPTIONS = [
    { id: 'oven', label: 'Inside Oven', icon: Microwave },
    { id: 'fridge', label: 'Inside Fridge', icon: Refrigerator },
    { id: 'laundry', label: 'Laundry', icon: Shirt },
    { id: 'pets', label: 'Pet Hair Fee', icon: Dog },
    { id: 'basement', label: 'Finished Basement', icon: LayoutDashboard },
  ];

  const services = [
    { id: 'residential', title: 'Residential', icon: 'Home', desc: 'Perfect for maintaining a sparkling, healthy home environment every week.' },
    { id: 'deep-clean', title: 'Deep Clean', icon: 'Sparkles', desc: 'A heavy-duty reset for homes that need extra attention to every corner.' },
    { id: 'move-in-out', title: 'Move In/Out', icon: 'Truck', desc: 'Comprehensive sanitation for empty spaces during your transition.' },
  ];

  if (isSubmitted) {
    return (
      <div className="pt-32 pb-20 px-6 max-w-3xl mx-auto text-center min-h-[60vh] flex flex-col items-center justify-center">
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.5)] mb-8"
        >
          <CheckCircle className="w-12 h-12" />
        </motion.div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-on-surface tracking-tight mb-6 font-headline">Request Received!</h1>
        <p className="text-xl text-on-surface-variant font-medium mb-12">
          Your pristine space awaits. We'll be in touch shortly with a customized quote and next steps.
        </p>
        <button 
          onClick={() => window.location.href = '/'}
          className="px-10 py-4 bg-surface-container-high text-on-surface rounded-full font-bold hover:bg-surface-variant ring-1 ring-outline-variant/20 transition-colors"
        >
          Return to Home
        </button>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Main Content Area */}
        <div className="lg:col-span-8 space-y-12">

          <header className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface font-headline leading-tight">
              Request Your <span className="text-primary">Free Quote</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-2xl font-body">Tell us about your home and your specific needs, and our team will curate a personalized service package.</p>
          </header>

          {/* Service Grid */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = iconMap[s.icon as keyof typeof iconMap];
              const isActive = selectedTier === s.id;
              return (
                <button 
                  key={s.id}
                  onClick={() => setSelectedTier(s.id)}
                  className={cn(
                    "text-left group relative p-8 rounded-xl transition-all duration-300",
                    isActive 
                      ? "bg-surface-container-lowest ring-2 ring-primary shadow-lg" 
                      : "bg-surface-container-low hover:bg-surface-container-lowest"
                  )}
                >
                  <div className={cn(
                    "mb-6 inline-flex p-3 rounded-xl transition-colors",
                    isActive ? "bg-primary-container text-primary" : "bg-surface-variant text-on-surface-variant group-hover:bg-primary-container group-hover:text-primary"
                  )}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold font-headline mb-2">{s.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{s.desc}</p>
                  <div className={cn(
                    "mt-6 flex items-center gap-2 transition-all",
                    isActive ? "text-primary font-bold opacity-100" : "text-on-surface-variant opacity-0 group-hover:opacity-100"
                  )}>
                    {isActive ? (
                      <>
                        <CheckCircle className="w-4 h-4 fill-primary text-white" />
                        <span className="text-xs uppercase tracking-widest font-headline">Active</span>
                      </>
                    ) : (
                      <span className="text-xs uppercase tracking-widest font-headline">Select Tier</span>
                    )}
                  </div>
                </button>
              );
            })}
          </section>

          {/* Detailed Controls */}
          <section className="bg-surface-container-low rounded-xl p-10 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Bedrooms */}
              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant font-headline">Number of Bedrooms</label>
                <div className="flex items-center justify-between bg-surface-container-lowest p-4 rounded-full">
                  <button 
                    onClick={() => setBedrooms(Math.max(1, bedrooms - 1))}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-high text-on-surface hover:bg-primary hover:text-white transition-colors"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="text-2xl font-bold font-headline">{bedrooms.toString().padStart(2, '0')}</span>
                  <button 
                    onClick={() => setBedrooms(bedrooms + 1)}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-white hover:opacity-90 transition-opacity"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>
              {/* Bathrooms */}
              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant font-headline">Number of Bathrooms</label>
                <div className="flex items-center justify-between bg-surface-container-lowest p-4 rounded-full">
                  <button 
                    onClick={() => setBathrooms(Math.max(1, bathrooms - 1))}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-high text-on-surface hover:bg-primary hover:text-white transition-colors"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="text-2xl font-bold font-headline">{bathrooms.toString().padStart(2, '0')}</span>
                  <button 
                    onClick={() => setBathrooms(bathrooms + 1)}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-white hover:opacity-90 transition-opacity"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>
              {/* Windows */}
              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant font-headline">Number of Windows</label>
                <div className="flex items-center justify-between bg-surface-container-lowest p-4 rounded-full">
                  <button 
                    onClick={() => setWindows(Math.max(0, windows - 1))}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-high text-on-surface hover:bg-primary hover:text-white transition-colors"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="text-2xl font-bold font-headline text-primary">{windows.toString().padStart(2, '0')}</span>
                  <button 
                    onClick={() => setWindows(windows + 1)}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-white hover:opacity-90 transition-opacity"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Condition Selector */}
            <div className="space-y-4">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant font-headline">Current Home Condition</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { id: 'light', label: 'Lightly Soiled', desc: 'Just needs a touch-up' },
                  { id: 'average', label: 'Average', desc: 'Standard maintenance' },
                  { id: 'heavy', label: 'Heavy Duty', desc: 'Needs serious TLC' }
                ].map((c) => (
                  <button 
                    key={c.id}
                    onClick={() => setCondition(c.id)}
                    className={cn(
                      "p-4 rounded-2xl text-left transition-all ring-1",
                      condition === c.id 
                        ? "bg-primary-container text-primary ring-primary shadow-md" 
                        : "bg-surface-container-highest text-on-surface hover:bg-surface-variant ring-transparent"
                    )}
                  >
                    <div className="font-bold text-sm mb-1">{c.label}</div>
                    <div className={cn("text-xs leading-tight", condition === c.id ? "text-primary/80" : "text-on-surface-variant")}>{c.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Frequency Selector */}
            <div className="space-y-4">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant font-headline">Cleaning Frequency</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { id: 'one-time', label: 'One-Time', discount: null },
                  { id: 'weekly', label: 'Weekly', discount: 'Save 15%' },
                  { id: 'bi-weekly', label: 'Bi-Weekly', discount: 'Save 10%' },
                  { id: 'monthly', label: 'Monthly', discount: 'Save 5%' },
                ].map((f) => (
                  <button 
                    key={f.id}
                    onClick={() => setFrequency(f.id)}
                    className={cn(
                      "flex flex-col items-center justify-center p-4 rounded-2xl transition-all ring-1 text-center",
                      frequency === f.id 
                        ? "bg-primary-container text-primary ring-primary shadow-md" 
                        : "bg-surface-container-highest text-on-surface hover:bg-surface-variant ring-transparent"
                    )}
                  >
                    <span className="font-bold font-headline mb-1">{f.label}</span>
                    <span className={cn(
                      "text-[10px] font-extrabold uppercase tracking-widest",
                      frequency === f.id ? "text-primary/80" : "text-primary opacity-60",
                      !f.discount && "opacity-0"
                    )}>
                      {f.discount || 'No Discount'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Add-ons */}
            <div className="space-y-4 border-t border-outline-variant/10 pt-10">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant font-headline">Service Add-ons</label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {ADDON_OPTIONS.map((addon) => {
                  const isSelected = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => setSelectedAddons(prev => 
                        isSelected ? prev.filter(id => id !== addon.id) : [...prev, addon.id]
                      )}
                      className={cn(
                        "p-4 rounded-2xl flex flex-col items-center justify-center text-center gap-3 transition-all ring-1",
                        isSelected 
                          ? "bg-primary-container text-primary ring-primary" 
                          : "bg-surface-container-highest text-on-surface hover:bg-surface-variant ring-transparent"
                      )}
                    >
                      <addon.icon className="w-6 h-6" />
                      <div className="font-bold text-xs leading-tight">{addon.label}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="bg-surface-container-low rounded-xl p-10 space-y-10">
            <h2 className="text-2xl font-bold font-headline mb-2 border-b border-outline-variant/10 pb-4">Schedule Preferences</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Date */}
              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant font-headline flex items-center gap-2"><CalendarIcon className="w-4 h-4"/> Requested Date</label>
                <Calendar selectedDate={selectedDate} onSelect={setSelectedDate} />
              </div>
              
              {/* Time */}
              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant font-headline flex items-center gap-2"><Clock className="w-4 h-4"/> Arrival Window</label>
                <select value={selectedTime} onChange={e => setSelectedTime(e.target.value)} className="w-full bg-surface-container-highest border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-primary text-on-surface font-medium outline-none appearance-none shadow-[0_4px_10px_rgba(0,0,0,0.03)] cursor-pointer">
                  <option>Anytime (8am - 4pm)</option>
                  <option>Morning (8am - 12pm)</option>
                  <option>Afternoon (12pm - 4pm)</option>
                </select>
              </div>
            </div>
          </section>

          {/* Personal Information */}
          <section className="bg-surface-container-low rounded-xl p-10 space-y-10">
            <h2 className="text-2xl font-bold font-headline mb-2 border-b border-outline-variant/10 pb-4">Contact & Location</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant font-headline flex items-center gap-2"><User className="w-4 h-4"/> First Name</label>
                <input value={firstName} onChange={e => setFirstName(e.target.value)} type="text" placeholder="Jane" className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary text-on-surface font-medium outline-none" />
              </div>
              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant font-headline flex items-center gap-2"><User className="w-4 h-4 opacity-0"/> Last Name</label>
                <input value={lastName} onChange={e => setLastName(e.target.value)} type="text" placeholder="Doe" className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary text-on-surface font-medium outline-none" />
              </div>
              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant font-headline flex items-center gap-2"><Mail className="w-4 h-4"/> Email Address</label>
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="jane@example.com" className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary text-on-surface font-medium outline-none" />
              </div>
              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant font-headline flex items-center gap-2"><Phone className="w-4 h-4"/> Phone Number</label>
                <input value={phone} onChange={e => setPhone(e.target.value)} type="tel" placeholder="(555) 000-0000" className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary text-on-surface font-medium outline-none" />
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-outline-variant/10">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant font-headline flex items-center gap-2"><MapPin className="w-4 h-4"/> Service Address</label>
              <input value={address} onChange={e => setAddress(e.target.value)} type="text" placeholder="Street Address" className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary text-on-surface font-medium outline-none mb-4" />
              <div className="grid grid-cols-2 gap-4">
                <input value={city} onChange={e => setCity(e.target.value)} type="text" placeholder="City" className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary text-on-surface font-medium outline-none" />
                <input value={postalCode} onChange={e => setPostalCode(e.target.value)} type="text" placeholder="Postal Code" className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary text-on-surface font-medium outline-none" />
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-outline-variant/10">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant font-headline flex items-center gap-2"><FileText className="w-4 h-4"/> Specialized Notes</label>
              <textarea value={notes} onChange={e => setNotes(e.target.value)} placeholder="e.g. Please use eco-friendly products in the kitchen, and focus heavily on the master bathroom grout." className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary text-on-surface font-medium min-h-[120px] outline-none resize-none"></textarea>
            </div>
          </section>

        </div>

        {/* Sidebar: Order Summary */}
        <aside className="lg:col-span-4 sticky top-28 space-y-6">
          <div className="bg-surface-container-lowest rounded-xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] ring-1 ring-outline-variant/10">
            <h2 className="text-2xl font-bold font-headline mb-8 border-b border-outline-variant/20 pb-4">Service Request Summary</h2>
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-on-surface font-bold capitalize">{selectedTier.replace('-', ' ')} Clean</p>
                  <p className="text-sm text-on-surface-variant mt-1">{bedrooms} Bedrooms, {bathrooms} Bathroom</p>
                  {windows > 0 && <p className="text-sm text-on-surface-variant mt-0.5">{windows} Custom Windows</p>}
                  <p className="text-sm text-primary font-medium mt-1 capitalize">Condition: {condition === 'heavy' ? 'Heavy Duty' : condition}</p>
                </div>
              </div>

              {selectedAddons.length > 0 && (
                <div className="space-y-3 pt-4 border-t border-outline-variant/20">
                  <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant font-headline mb-2">Requested Extras</p>
                  {selectedAddons.map(id => {
                    const addon = ADDON_OPTIONS.find(a => a.id === id)!;
                    return (
                      <div key={id} className="flex items-center gap-2 text-on-surface-variant text-sm">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>{addon.label}</span>
                      </div>
                    );
                  })}
                </div>
              )}
              
              <div className="pt-6 border-t border-outline-variant/20">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <p className="text-sm font-bold uppercase tracking-widest text-primary">{frequency} Schedule</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-4 space-y-3">
              {error && <p className="text-red-500 text-sm text-center font-medium">{error}</p>}
              <button
                onClick={async () => {
                  setIsLoading(true);
                  setError(null);
                  try {
                    const res = await fetch('/api/send-booking', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        firstName, lastName, email, phone,
                        address, city, postalCode, notes,
                        service: selectedTier,
                        bedrooms, bathrooms, windows,
                        condition, frequency,
                        addons: selectedAddons.map(id => {
                          const found = [
                            { id: 'oven', label: 'Inside Oven' },
                            { id: 'fridge', label: 'Inside Fridge' },
                            { id: 'laundry', label: 'Laundry' },
                            { id: 'pets', label: 'Pet Hair Fee' },
                            { id: 'basement', label: 'Finished Basement' },
                          ].find(a => a.id === id);
                          return found?.label ?? id;
                        }),
                        date: selectedDate ? selectedDate.toLocaleDateString('en-CA', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : null,
                        time: selectedTime,
                      }),
                    });
                    if (!res.ok) throw new Error('Failed to send. Please try again.');
                    setIsSubmitted(true);
                  } catch (e: any) {
                    setError(e.message || 'Something went wrong.');
                  } finally {
                    setIsLoading(false);
                  }
                }}
                disabled={isLoading}
                className="w-full py-5 rounded-full bg-primary text-white font-headline font-extrabold text-xl shadow-[0_10px_30px_rgba(16,185,129,0.3)] hover:scale-[1.02] transition-transform active:scale-95 disabled:opacity-60 disabled:scale-100"
              >
                {isLoading ? 'Sending...' : 'Submit Booking Form'}
              </button>
            </div>

            <div className="mt-6 p-4 bg-primary-container/20 rounded-xl flex gap-4">
              <ShieldCheck className="text-primary w-6 h-6 shrink-0" />
              <div className="text-xs text-on-secondary-container font-body leading-relaxed">
                <strong className="block mb-1">No Commitment</strong>
                Submitting this form does not lock you into a service. We will review your specs and reach out to curate your clean!
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
