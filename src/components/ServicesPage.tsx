import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Building2, Wand2, CheckCircle2, Plus, Microwave, Maximize, Shirt, Refrigerator, Key, X } from 'lucide-react';

interface ServicesPageProps {
  onBookNow: () => void;
  onNavigate: (view: string) => void;
}

export default function ServicesPage({ onBookNow, onNavigate }: ServicesPageProps) {
  // Corporate inquiry state
  const [isCorporateModalOpen, setIsCorporateModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inquiryError, setInquiryError] = useState<string | null>(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');

  // Airbnb inquiry state
  const [isAirbnbModalOpen, setIsAirbnbModalOpen] = useState(false);
  const [isAirbnbSubmitted, setIsAirbnbSubmitted] = useState(false);
  const [isAirbnbLoading, setIsAirbnbLoading] = useState(false);
  const [airbnbError, setAirbnbError] = useState<string | null>(null);
  const [bnbFirstName, setBnbFirstName] = useState('');
  const [bnbLastName, setBnbLastName] = useState('');
  const [bnbEmail, setBnbEmail] = useState('');
  const [bnbAddress, setBnbAddress] = useState('');
  const [bnbUnits, setBnbUnits] = useState('');
  const [bnbNotes, setBnbNotes] = useState('');

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[819px] flex items-center overflow-hidden bg-surface-container-low">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent z-10"></div>
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiT6CvSLGzRiJIS73XDai3YT_MLChVeRM1b8LLxFC-mSTfxd1HjDJcGW9pDEMZ9r6yT_zaFreROLHLZu9Kg6pPx8SWxxld90hksw8dwxR7KerYzV5IJC2VkdpyHOnBCpEj8Uk45l9sAyZ0szsl-qUwwALuQ5r-wlxHr2YrY88_uW7f0kWsY-Mb8jhY7pFH8URTZ-Xn5j4bcgiwt7gHnvpYltSaAUuo0YOaqmmZ2TeJL3anO_OxymSIjUIhBDsRZxejZY4NET3dA_M"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-8 relative z-20 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed font-bold text-xs uppercase tracking-widest mb-6">Luminous Order</span>
            <h1 className="text-6xl md:text-7xl font-extrabold text-on-surface leading-[1.1] tracking-tighter mb-8">
              Elevate Your Space with Our Expert Services
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-10 font-medium">
              Professional cleaning redefined through editorial precision and meticulous care for your most cherished environments.
            </p>
            <div className="flex gap-4">
              <button onClick={onBookNow} className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-transform">Explore Plans</button>
              <button onClick={() => onNavigate('about')} className="bg-surface-container-lowest text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors">Our Process</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Curated Solutions */}
      <section className="py-24 bg-surface px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tighter mb-4">Curated Solutions</h2>
              <p className="text-on-surface-variant text-lg max-w-xl">Every room tells a story. We ensure yours is told through the lens of immaculate order and professional radiance.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Residential */}
            <div className="md:col-span-7 group bg-surface-container-lowest p-10 rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col justify-between transition-all hover:shadow-2xl hover:shadow-primary/5">
              <div>
                <div className="flex justify-between items-start mb-12">
                  <div className="bg-primary-container p-4 rounded-2xl">
                    <Sparkles className="text-4xl text-primary" />
                  </div>
                  <span className="text-xs font-bold text-primary-dim uppercase tracking-widest bg-primary-fixed px-3 py-1 rounded-full">Daily Luxe</span>
                </div>
                <h3 className="text-3xl font-bold mb-6">Residential Care</h3>
                <p className="text-on-surface-variant mb-8 text-lg">Maintaining the heartbeat of your home with consistent, high-standard detailing for every living area.</p>
                <div className="space-y-3 mb-8">
                  {['Dusting & Surface Polishing', 'Vacuuming & Floor Sanitization', 'Kitchen & Bathroom Detailing'].map((f) => (
                    <div key={f} className="flex items-center gap-3 text-on-surface font-medium">
                      <CheckCircle2 className="text-primary w-5 h-5" /> {f}
                    </div>
                  ))}
                </div>
              </div>
              <button onClick={onBookNow} className="w-full py-4 rounded-2xl bg-surface-container-low text-primary font-bold hover:bg-primary hover:text-on-primary transition-all">Select Residential</button>
            </div>

            {/* Commercial */}
            <div className="md:col-span-5 bg-secondary text-on-secondary p-10 rounded-[2.5rem] shadow-xl flex flex-col justify-between">
              <div>
                <div className="mb-12">
                  <Building2 className="text-4xl text-on-secondary" />
                </div>
                <h3 className="text-3xl font-bold mb-6">Commercial Order</h3>
                <p className="text-on-secondary/80 mb-8 text-lg">Professional environments that inspire productivity and reflect corporate excellence.</p>
                <ul className="space-y-3 mb-8">
                  {['Office Workspace Sanity', 'High-Traffic Floor Care', 'Communal Area Hygiene'].map((f) => (
                    <li key={f} className="flex items-center gap-3 font-medium">
                      <CheckCircle2 className="w-5 h-5" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <button onClick={() => { setIsCorporateModalOpen(true); setIsSubmitted(false); }} className="w-full py-4 rounded-2xl bg-on-secondary text-secondary font-bold hover:bg-white transition-all">Corporate Inquiry</button>
            </div>

            {/* Airbnb — inline dark card */}
            <div className="md:col-span-12 relative rounded-[2.5rem] overflow-hidden bg-on-surface">
              <div className="absolute inset-0 bg-gradient-to-br from-on-surface via-on-surface to-primary/30 pointer-events-none" />
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none translate-x-1/4 -translate-y-1/4" />
              <div className="relative z-10 p-10 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-10">
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                      <Key className="text-primary w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary bg-primary/10 px-3 py-1.5 rounded-full">Short-Term Rental</span>
                  </div>
                  <h3 className="text-3xl font-extrabold text-white tracking-tighter mb-3">Airbnb & Short-Term Rentals</h3>
                  <p className="text-white/60 max-w-xl leading-relaxed">Running a rental? We handle the full turnaround between guests — linens changed, surfaces sanitized, essentials restocked — so every stay feels brand new.</p>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
                  {['Full Linen Turnover', 'Guest-Ready Sanitization', 'Restock & Refresh'].map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm font-semibold text-white/80">
                      <CheckCircle2 className="text-primary w-4 h-4 shrink-0" /> {f}
                    </div>
                  ))}
                </div>
                <div className="shrink-0 flex flex-col items-center gap-4">
                  <div className="text-center">
                    <span className="font-headline font-extrabold text-2xl text-primary block leading-none">From</span>
                    <span className="font-headline font-extrabold text-5xl text-white block">$179</span>
                  </div>
                  <button
                    onClick={() => { setIsAirbnbModalOpen(true); setIsAirbnbSubmitted(false); }}
                    className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/30 whitespace-nowrap"
                  >
                    Get a Quote
                  </button>
                </div>
              </div>
            </div>

            {/* Deep Clean */}
            <div className="md:col-span-5 bg-surface-container-low p-10 rounded-[2.5rem] flex flex-col justify-between">
              <div>
                <div className="mb-12">
                  <Wand2 className="text-4xl text-tertiary" />
                </div>
                <h3 className="text-3xl font-bold mb-6 text-on-surface">Deep Clean</h3>
                <p className="text-on-surface-variant mb-8 text-lg">A transformative experience targeting the unseen and the overlooked. Total restoration.</p>
                <ul className="space-y-3 mb-8 text-on-surface font-medium">
                  {['Baseboards & Moulding', 'Behind Appliance Detailing', 'Grout & Tile Revival'].map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <Sparkles className="text-primary w-5 h-5" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <button onClick={onBookNow} className="w-full py-4 rounded-2xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-on-primary transition-all">Book Deep Clean</button>
            </div>

            {/* Move-in/out */}
            <div className="md:col-span-7 relative overflow-hidden rounded-[2.5rem] min-h-[400px] flex items-end p-10">
              <img 
                className="absolute inset-0 w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCN3gzojcO9O2uO-BGxg2nYSXcM8eMeiD8sGhYejvLR7tV__9blravpkjjOMGJf1khSrV_36I5ZceoxmO4yoMEAFilkyVZvvOd4z35yJ5ekgeKJeOvh48hGO4N_DTEYmPKFJam3Phx9--f-BfFSFHOLckO9b49e0ahD1ZAk1LseEblPYHkUyps3_tRVEq_ODJ1hwRQ_DHebsYKLUcvO6O6ZFcRlezm892jGnpiRZ7B9Te30R221MsZRl5jsXQQ3_L0jq3otwmu-CMU"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">Transition Care</h3>
                  <p className="text-white/80 max-w-sm">Move in or out with confidence. We leave every corner ready for its next chapter.</p>
                </div>
                <button onClick={onBookNow} className="bg-white text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">Move-In Prep</button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tighter mb-4">Investment in Clarity</h2>
            <p className="text-on-surface-variant text-lg">Tailored pricing models for every scale of luminous order.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Residential */}
            <div className="bg-surface-container-lowest p-8 rounded-3xl flex flex-col">
              <h4 className="text-xl font-bold mb-2">Residential</h4>
              <div className="text-4xl font-extrabold mb-6 text-on-surface"><span className="text-xl font-medium text-on-surface-variant mr-1">From</span>$120</div>
              <p className="text-on-surface-variant mb-8 text-sm">Perfectly balanced luxury upkeep for busy lifestyles.</p>
              <div className="space-y-4 mb-10 flex-grow">
                {['Dusting & Surface Polishing', 'Vacuuming & Floor Sanitization', 'Kitchen & Bathroom Detailing'].map((f) => (
                  <div key={f} className="flex items-center gap-3 text-sm font-semibold">
                    <CheckCircle2 className="text-primary w-5 h-5" /> {f}
                  </div>
                ))}
              </div>
              <button onClick={onBookNow} className="w-full py-4 rounded-xl bg-surface-container-low font-bold hover:bg-surface-container-high transition-colors">Choose Residential</button>
            </div>
            {/* Deep Clean */}
            <div className="bg-primary text-on-primary p-10 rounded-3xl flex flex-col scale-105 shadow-2xl shadow-primary/20 relative z-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-fixed text-on-primary-fixed text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">Most Requested</div>
              <h4 className="text-xl font-bold mb-2">Deep Clean</h4>
              <div className="text-5xl font-extrabold mb-6"><span className="text-2xl font-medium opacity-70 mr-1">From</span>$240</div>
              <p className="opacity-80 mb-8 text-sm">A thorough restoration for homes needing a fresh start.</p>
              <div className="space-y-4 mb-10 flex-grow">
                {['Baseboards & Moulding', 'Behind Appliance Detailing', 'Grout & Tile Revival'].map((f) => (
                  <div key={f} className="flex items-center gap-3 text-sm font-semibold">
                    <Sparkles className="w-5 h-5 fill-on-primary" /> {f}
                  </div>
                ))}
              </div>
              <button onClick={onBookNow} className="w-full py-4 rounded-xl bg-on-primary text-primary font-bold hover:bg-white transition-colors">Start Restoration</button>
            </div>
            {/* Move-In/Out */}
            <div className="bg-surface-container-lowest p-8 rounded-3xl flex flex-col">
              <h4 className="text-xl font-bold mb-2">Move-In/Out</h4>
              <div className="text-4xl font-extrabold mb-6 text-on-surface"><span className="text-xl font-medium text-on-surface-variant mr-1">From</span>$380</div>
              <p className="text-on-surface-variant mb-8 text-sm">Seamless transitions. Ensure your new chapter begins in a pristine environment.</p>
              <div className="space-y-4 mb-10 flex-grow">
                {['Full Sanitization', 'Inside Cabinets & Drawers', 'Wall Washing'].map((f) => (
                  <div key={f} className="flex items-center gap-3 text-sm font-semibold">
                    <CheckCircle2 className="text-primary w-5 h-5" /> {f}
                  </div>
                ))}
              </div>
              <button onClick={onBookNow} className="w-full py-4 rounded-xl bg-surface-container-low font-bold hover:bg-surface-container-high transition-colors">Book Move-In/Out</button>
            </div>
            {/* Commercial */}
            <div className="bg-surface-container-lowest p-8 rounded-3xl flex flex-col">
              <h4 className="text-xl font-bold mb-2">Commercial</h4>
              <div className="text-4xl font-extrabold mb-6 text-on-surface"><span className="text-xl font-medium text-on-surface-variant mr-1">Custom</span>Quote</div>
              <p className="text-on-surface-variant mb-8 text-sm">Professional environments tailored to your facility's scale and schedule.</p>
              <div className="space-y-4 mb-10 flex-grow">
                {['Office Workspace Sanity', 'High-Traffic Floor Care', 'Communal Area Hygiene'].map((f) => (
                  <div key={f} className="flex items-center gap-3 text-sm font-semibold">
                    <CheckCircle2 className="text-primary w-5 h-5" /> {f}
                  </div>
                ))}
              </div>
              <button onClick={() => { setIsCorporateModalOpen(true); setIsSubmitted(false); }} className="w-full py-4 rounded-xl bg-surface-container-low font-bold hover:bg-secondary hover:text-on-secondary transition-all">Corporate Inquiry</button>
            </div>
            {/* Airbnb */}
            <div className="bg-surface-container-lowest p-8 rounded-3xl flex flex-col">
              <h4 className="text-xl font-bold mb-2">Airbnb Turnover</h4>
              <div className="text-4xl font-extrabold mb-6 text-on-surface"><span className="text-xl font-medium text-on-surface-variant mr-1">From</span>$179</div>
              <p className="text-on-surface-variant mb-8 text-sm">Fast, flawless guest-ready turnovers for short-term rentals.</p>
              <div className="space-y-4 mb-10 flex-grow">
                {['Full Linen Turnover', 'Guest-Ready Sanitization', 'Restock & Refresh'].map((f) => (
                  <div key={f} className="flex items-center gap-3 text-sm font-semibold">
                    <CheckCircle2 className="text-primary w-5 h-5" /> {f}
                  </div>
                ))}
              </div>
              <button onClick={() => { setIsAirbnbModalOpen(true); setIsAirbnbSubmitted(false); }} className="w-full py-4 rounded-xl bg-surface-container-low font-bold hover:bg-primary hover:text-on-primary transition-all">Get a Quote</button>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-24 bg-surface px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-extrabold text-on-surface tracking-tighter mb-4">Pristine Finishing Touches</h2>
            <p className="text-on-surface-variant text-lg">Elevate your experience with specialized attention to specific areas.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Inside Oven', icon: Microwave, desc: 'Carbon removal & shine' },
              { name: 'Window Detail', icon: Maximize, desc: 'Streak-free brilliance' },
              { name: 'Laundry', icon: Shirt, desc: 'Wash, dry & fold' },
              { name: 'Inside Fridge', icon: Refrigerator, desc: 'Organized & sanitized' },
            ].map((addon) => (
              <div key={addon.name} className="group cursor-pointer bg-surface-container-low p-8 rounded-3xl text-center hover:bg-primary transition-all duration-300">
                <addon.icon className="w-10 h-10 text-primary mx-auto mb-4 group-hover:text-on-primary" />
                <h5 className="font-bold text-on-surface group-hover:text-on-primary">{addon.name}</h5>
                <p className="text-xs text-on-surface-variant mt-2 group-hover:text-on-primary/70">{addon.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-surface-container-low px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold text-on-surface tracking-tighter mb-12 text-center">Service Wisdom</h2>
          <div className="space-y-6">
            {[
              { q: 'How do I prepare for my service?', a: 'Simply secure your pets and ensure our team has access. We bring all premium cleaning supplies and equipment required for your specific service tier.' },
              { q: 'Are your cleaning professionals vetted?', a: 'Yes, all Tidy Touch curators are thoroughly background-checked and rigorously trained to provide absolute peace of mind during our visit.' },
              { q: 'What is your satisfaction guarantee?', a: 'If any area does not meet our high standards of "Luminous Order," notify us within 24 hours and we will return to refine it at no additional cost.' },
            ].map((faq) => (
              <div key={faq.q} className="bg-surface-container-lowest p-6 rounded-2xl">
                <h4 className="text-lg font-bold text-on-surface mb-2 flex justify-between items-center">
                  {faq.q}
                  <Plus className="text-primary w-5 h-5" />
                </h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Airbnb Inquiry Modal */}
      <AnimatePresence>
        {isAirbnbModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-surface-container-lowest w-full max-w-lg rounded-3xl p-8 relative shadow-2xl"
            >
              <button
                onClick={() => setIsAirbnbModalOpen(false)}
                className="absolute top-6 right-6 text-on-surface-variant hover:text-primary transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              {!isAirbnbSubmitted ? (
                <>
                  <div className="mb-8 pr-12">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary-container rounded-xl flex items-center justify-center">
                        <Key className="text-primary w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-primary">Airbnb & Short-Term Rental</span>
                    </div>
                    <h3 className="text-3xl font-extrabold font-headline text-on-surface mb-2">Get a Turnover Quote</h3>
                    <p className="text-on-surface-variant">Tell us about your property and we'll put together a custom cleaning plan for your rental.</p>
                  </div>

                  <form onSubmit={async (e) => {
                    e.preventDefault();
                    setIsAirbnbLoading(true);
                    setAirbnbError(null);
                    try {
                      const res = await fetch('/api/send-airbnb-inquiry', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ firstName: bnbFirstName, lastName: bnbLastName, email: bnbEmail, address: bnbAddress, units: bnbUnits, notes: bnbNotes }),
                      });
                      if (!res.ok) throw new Error('Failed to send. Please try again.');
                      setIsAirbnbSubmitted(true);
                    } catch (err: any) {
                      setAirbnbError(err.message || 'Something went wrong.');
                    } finally {
                      setIsAirbnbLoading(false);
                    }
                  }} className="space-y-4 font-body">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">First Name</label>
                        <input required value={bnbFirstName} onChange={e => setBnbFirstName(e.target.value)} className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors text-sm" placeholder="Jane" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Last Name</label>
                        <input required value={bnbLastName} onChange={e => setBnbLastName(e.target.value)} className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors text-sm" placeholder="Doe" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Email</label>
                      <input required type="email" value={bnbEmail} onChange={e => setBnbEmail(e.target.value)} className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors text-sm" placeholder="jane@email.com" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Property Address</label>
                      <input required value={bnbAddress} onChange={e => setBnbAddress(e.target.value)} className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors text-sm" placeholder="123 Main St, Calgary, AB" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Number of Units</label>
                      <input value={bnbUnits} onChange={e => setBnbUnits(e.target.value)} className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors text-sm" placeholder="e.g. 1 condo, 2 cabins..." />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Additional Notes (Optional)</label>
                      <textarea value={bnbNotes} onChange={e => setBnbNotes(e.target.value)} className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors min-h-[90px] text-sm resize-none" placeholder="Approx. sq ft, turnover frequency, access details, etc." />
                    </div>

                    {airbnbError && <p className="text-red-500 text-sm font-medium">{airbnbError}</p>}

                    <button type="submit" disabled={isAirbnbLoading} className="w-full py-4 rounded-xl bg-primary text-on-primary font-bold hover:bg-primary/90 transition-colors mt-2 font-headline text-lg shadow-lg shadow-primary/20 disabled:opacity-60">
                      {isAirbnbLoading ? 'Sending...' : 'Request Quote'}
                    </button>
                  </form>
                </>
              ) : (
                <div className="py-12 text-center">
                  <div className="w-20 h-20 bg-primary-container rounded-full flex items-center justify-center mx-auto mb-6">
                    <Key className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-3xl font-extrabold font-headline text-on-surface mb-2">Quote Request Sent</h3>
                  <p className="text-on-surface-variant mb-8 text-lg">Thanks! We'll review your property details and get back to you within 24 hours with a custom turnover plan.</p>
                  <button onClick={() => setIsAirbnbModalOpen(false)} className="w-full py-4 rounded-xl bg-surface-container-high font-bold hover:bg-surface-variant transition-colors font-headline">
                    Close Window
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Corporate Inquiry Modal */}
      <AnimatePresence>
        {isCorporateModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-6"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-surface-container-lowest w-full max-w-lg rounded-3xl p-8 relative shadow-2xl"
            >
              <button 
                onClick={() => setIsCorporateModalOpen(false)}
                className="absolute top-6 right-6 text-on-surface-variant hover:text-primary transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
              
              {!isSubmitted ? (
                <>
                  <div className="mb-8 pr-12">
                    <h3 className="text-3xl font-extrabold font-headline text-on-surface mb-2">Partner With Us</h3>
                    <p className="text-on-surface-variant">Elevate your corporate environment. Leave your details below and our commercial director will reach out within 24 hours.</p>
                  </div>
                  
                  <form onSubmit={async (e) => {
                    e.preventDefault();
                    setIsLoading(true);
                    setInquiryError(null);
                    try {
                      const res = await fetch('/api/send-inquiry', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ firstName, lastName, company, email, details }),
                      });
                      if (!res.ok) throw new Error('Failed to send. Please try again.');
                      setIsSubmitted(true);
                    } catch (err: any) {
                      setInquiryError(err.message || 'Something went wrong.');
                    } finally {
                      setIsLoading(false);
                    }
                  }} className="space-y-4 font-body">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">First Name</label>
                        <input required value={firstName} onChange={e => setFirstName(e.target.value)} className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors text-sm" placeholder="Jane" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Last Name</label>
                        <input required value={lastName} onChange={e => setLastName(e.target.value)} className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors text-sm" placeholder="Doe" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Company Name</label>
                      <input required value={company} onChange={e => setCompany(e.target.value)} className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors text-sm" placeholder="Acme Corporation" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Work Email</label>
                      <input required type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors text-sm" placeholder="jane@acmecorp.com" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Facility Details (Optional)</label>
                      <textarea value={details} onChange={e => setDetails(e.target.value)} className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors min-h-[100px] text-sm resize-none" placeholder="Approximate square footage, frequency needs, etc." />
                    </div>

                    {inquiryError && <p className="text-red-500 text-sm font-medium">{inquiryError}</p>}

                    <button type="submit" disabled={isLoading} className="w-full py-4 rounded-xl bg-primary text-on-primary font-bold hover:bg-primary/90 transition-colors mt-6 font-headline text-lg shadow-lg disabled:opacity-60">
                      {isLoading ? 'Sending...' : 'Submit Inquiry'}
                    </button>
                  </form>
                </>
              ) : (
                <div className="py-12 text-center">
                  <div className="w-20 h-20 bg-primary-container rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-3xl font-extrabold font-headline text-on-surface mb-2">Request Received</h3>
                  <p className="text-on-surface-variant mb-8 text-lg">Thank you for your interest. Our commercial director will be in touch shortly to discuss your custom proposal.</p>
                  <button onClick={() => setIsCorporateModalOpen(false)} className="w-full py-4 rounded-xl bg-surface-container-high font-bold hover:bg-surface-variant transition-colors font-headline">
                    Close Window
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
