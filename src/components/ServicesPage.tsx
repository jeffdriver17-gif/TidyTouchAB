import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Building2, Wand2, CheckCircle2, Plus, Microwave, Maximize, Shirt, Refrigerator, X } from 'lucide-react';

interface ServicesPageProps {
  onBookNow: () => void;
  onNavigate: (view: string) => void;
}

export default function ServicesPage({ onBookNow, onNavigate }: ServicesPageProps) {
  const [isCorporateModalOpen, setIsCorporateModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inquiryError, setInquiryError] = useState<string | null>(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
