import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Key, CheckCircle2, Clock, Star, RefreshCw, ShieldCheck, ArrowRight } from 'lucide-react';

interface AirbnbPageProps {
  onBookNow: () => void;
}

export default function AirbnbPage({ onBookNow }: AirbnbPageProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [units, setUnits] = useState('');
  const [notes, setNotes] = useState('');

  const inputClass = "w-full bg-surface-container border border-outline-variant/40 rounded-2xl px-5 py-4 outline-none focus:border-primary transition-colors text-sm font-body text-on-surface placeholder:text-on-surface-variant/50";
  const labelClass = "block text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-2";

  return (
    <div className="flex flex-col w-full">

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-on-surface pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/5 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-xl"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center">
                  <Key className="text-primary w-6 h-6" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-primary bg-primary/10 px-4 py-1.5 rounded-full">Short-Term Rental</span>
              </div>
              <h1 className="font-headline font-extrabold text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tighter mb-6">
                Every Stay Feels <span className="text-primary">Like the First.</span>
              </h1>
              <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-10">
                Fast, flawless turnovers for Airbnb and short-term rental hosts across Calgary. Linens changed, surfaces sanitized, essentials restocked — all before your next guest checks in.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#inquiry" className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/30">
                  Get a Turnover Quote
                </a>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden md:block w-full h-[500px] lg:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/20 border border-white/10"
            >
              <img 
                src="/images/airbnb_hero.png" 
                alt="Spotless Airbnb setup" 
                className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-surface px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline font-extrabold text-4xl md:text-5xl text-on-surface tracking-tighter mb-4">Every Turnover Includes</h2>
            <p className="text-on-surface-variant text-lg max-w-xl mx-auto">A complete guest-ready reset, every single time.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: RefreshCw, title: 'Full Linen Turnover', desc: 'Fresh sheets, pillowcases, and towels replaced and staged to hotel standard.' },
              { icon: ShieldCheck, title: 'Guest-Ready Sanitization', desc: 'All bathrooms, kitchens, and high-touch surfaces disinfected between every stay.' },
              { icon: Key, title: 'Restock & Refresh', desc: 'Toiletries, paper goods, and amenities replenished so guests have everything they need.' },
              { icon: Star, title: '5-Star Presentation', desc: 'Beds made, cushions staged, and the space set up exactly how guests expect to find it.' },
              { icon: Clock, title: 'Rapid Turnaround', desc: 'We work fast so same-day checkouts and check-ins are never a problem.' },
              { icon: CheckCircle2, title: 'Damage Reporting', desc: "We flag anything that looks off so you're never caught off guard by a guest complaint." },
            ].map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                whileHover={{ y: -4 }}
                className="bg-surface-container-low p-8 rounded-3xl flex flex-col gap-4"
              >
                <div className="w-12 h-12 bg-primary-container rounded-2xl flex items-center justify-center">
                  <Icon className="text-primary w-6 h-6" />
                </div>
                <h3 className="font-headline font-bold text-lg text-on-surface">{title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing callout */}
      <section className="py-16 bg-primary-container px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-on-primary-container/60 mb-2">Transparent Pricing</p>
            <h3 className="font-headline font-extrabold text-3xl md:text-4xl text-on-primary-container tracking-tighter">Starting from <span className="text-primary">$179</span> per turnover</h3>
            <p className="text-on-primary-container/70 mt-2">Final quote depends on property size, number of units, and scope.</p>
          </div>
          <a href="#inquiry" className="shrink-0 bg-primary text-on-primary px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-primary/30 whitespace-nowrap">
            Get My Custom Quote
          </a>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry" className="py-24 bg-surface-container-low px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline font-extrabold text-4xl md:text-5xl text-on-surface tracking-tighter mb-4">Get a Turnover Quote</h2>
            <p className="text-on-surface-variant text-lg">Tell us about your property and we'll put together a custom cleaning plan.</p>
          </div>

          <div className="bg-surface-container-lowest rounded-[2.5rem] p-10 shadow-sm">
            {!isSubmitted ? (
              <form onSubmit={async (e) => {
                e.preventDefault();
                setIsLoading(true);
                setError(null);
                try {
                  const res = await fetch('/api/send-airbnb-inquiry', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ firstName, lastName, email, address, units, notes }),
                  });
                  if (!res.ok) throw new Error('Failed to send. Please try again.');
                  setIsSubmitted(true);
                } catch (err: any) {
                  setError(err.message || 'Something went wrong.');
                } finally {
                  setIsLoading(false);
                }
              }} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>First Name</label>
                    <input required value={firstName} onChange={e => setFirstName(e.target.value)} className={inputClass} placeholder="Jane" />
                  </div>
                  <div>
                    <label className={labelClass}>Last Name</label>
                    <input required value={lastName} onChange={e => setLastName(e.target.value)} className={inputClass} placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Email</label>
                  <input required type="email" value={email} onChange={e => setEmail(e.target.value)} className={inputClass} placeholder="jane@email.com" />
                </div>
                <div>
                  <label className={labelClass}>Property Address</label>
                  <input required value={address} onChange={e => setAddress(e.target.value)} className={inputClass} placeholder="123 Main St, Calgary, AB" />
                </div>
                <div>
                  <label className={labelClass}>Number of Units</label>
                  <input value={units} onChange={e => setUnits(e.target.value)} className={inputClass} placeholder="e.g. 1 condo, 2 cabins..." />
                </div>
                <div>
                  <label className={labelClass}>Additional Notes (Optional)</label>
                  <textarea value={notes} onChange={e => setNotes(e.target.value)} className={`${inputClass} min-h-[120px] resize-none`} placeholder="Approx. sq ft, turnover frequency, access details, etc." />
                </div>
                {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-5 rounded-2xl bg-primary text-on-primary font-headline font-bold text-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 disabled:opacity-60 flex items-center justify-center gap-3"
                >
                  {isLoading ? 'Sending...' : <><span>Request Quote</span><ArrowRight className="w-5 h-5" /></>}
                </button>
              </form>
            ) : (
              <div className="py-12 text-center">
                <div className="w-20 h-20 bg-primary-container rounded-full flex items-center justify-center mx-auto mb-6">
                  <Key className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-3xl font-extrabold font-headline text-on-surface mb-3">Quote Request Sent</h3>
                <p className="text-on-surface-variant text-lg max-w-md mx-auto">Thanks! We'll review your property details and get back to you within 24 hours with a custom turnover plan.</p>
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
