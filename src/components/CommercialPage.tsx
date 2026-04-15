import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Building2, CheckCircle2, Sparkles, Clock, Shield, Users, ArrowRight } from 'lucide-react';

interface CommercialPageProps {
  onBookNow: () => void;
}

export default function CommercialPage({ onBookNow }: CommercialPageProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');

  const inputClass = "w-full bg-surface-container border border-outline-variant/40 rounded-2xl px-5 py-4 outline-none focus:border-secondary transition-colors text-sm font-body text-on-surface placeholder:text-on-surface-variant/50";
  const labelClass = "block text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-2";

  return (
    <div className="flex flex-col w-full">

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-on-surface pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-transparent to-primary/10 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

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
                <div className="w-12 h-12 bg-secondary/20 rounded-2xl flex items-center justify-center">
                  <Building2 className="text-secondary w-6 h-6" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-secondary bg-secondary/10 px-4 py-1.5 rounded-full">Commercial Cleaning</span>
              </div>
              <h1 className="font-headline font-extrabold text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tighter mb-6">
                Cleaning That Means <span className="text-secondary">Business.</span>
              </h1>
              <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-10">
                Professional, discreet, and reliable commercial cleaning for offices, retail spaces, and facilities across Calgary. We work around your schedule.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#inquiry" className="bg-secondary text-on-secondary px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-secondary/30">
                  Request a Quote
                </a>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden md:block w-full h-[500px] lg:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-secondary/20 border border-white/10"
            >
              <img 
                src="/images/commercial_hero.png" 
                alt="Pristine modern corporate office" 
                className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-surface px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline font-extrabold text-4xl md:text-5xl text-on-surface tracking-tighter mb-4">What We Cover</h2>
            <p className="text-on-surface-variant text-lg max-w-xl mx-auto">Tailored cleaning programs for every type of commercial environment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Building2, title: 'Office Spaces', desc: 'Desks, floors, kitchens, and washrooms — maintained to a standard your team and clients will notice.' },
              { icon: Users, title: 'High-Traffic Areas', desc: 'Lobbies, corridors, and communal spaces cleaned and sanitized for constant use.' },
              { icon: Shield, title: 'Sanitization Protocol', desc: 'Hospital-grade disinfectants on all high-touch surfaces: handles, switches, shared equipment.' },
              { icon: Clock, title: 'Flexible Scheduling', desc: 'Early morning, evenings, or weekends — we clean on your time without disrupting operations.' },
              { icon: Sparkles, title: 'Deep Clean Services', desc: 'Periodic intensive cleans targeting grout, vents, behind equipment, and overlooked areas.' },
              { icon: CheckCircle2, title: 'Custom Contracts', desc: 'Weekly, bi-weekly, or monthly plans with fixed pricing and no surprise fees.' },
            ].map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                whileHover={{ y: -4 }}
                className="bg-surface-container-low p-8 rounded-3xl flex flex-col gap-4"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center">
                  <Icon className="text-secondary w-6 h-6" />
                </div>
                <h3 className="font-headline font-bold text-lg text-on-surface">{title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry" className="py-24 bg-surface-container-low px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline font-extrabold text-4xl md:text-5xl text-on-surface tracking-tighter mb-4">Partner With Us</h2>
            <p className="text-on-surface-variant text-lg">Leave your details and our commercial director will be in touch within 24 hours with a custom proposal.</p>
          </div>

          <div className="bg-surface-container-lowest rounded-[2.5rem] p-10 shadow-sm">
            {!isSubmitted ? (
              <form onSubmit={async (e) => {
                e.preventDefault();
                setIsLoading(true);
                setError(null);
                try {
                  const res = await fetch('/api/send-inquiry', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ firstName, lastName, company, email, details }),
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
                  <label className={labelClass}>Company Name</label>
                  <input required value={company} onChange={e => setCompany(e.target.value)} className={inputClass} placeholder="Acme Corporation" />
                </div>
                <div>
                  <label className={labelClass}>Work Email</label>
                  <input required type="email" value={email} onChange={e => setEmail(e.target.value)} className={inputClass} placeholder="jane@acmecorp.com" />
                </div>
                <div>
                  <label className={labelClass}>Facility Details (Optional)</label>
                  <textarea value={details} onChange={e => setDetails(e.target.value)} className={`${inputClass} min-h-[120px] resize-none`} placeholder="Approximate square footage, frequency, type of space, etc." />
                </div>
                {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-5 rounded-2xl bg-secondary text-on-secondary font-headline font-bold text-lg hover:bg-secondary/90 transition-colors shadow-lg shadow-secondary/20 disabled:opacity-60 flex items-center justify-center gap-3"
                >
                  {isLoading ? 'Sending...' : <><span>Submit Inquiry</span><ArrowRight className="w-5 h-5" /></>}
                </button>
              </form>
            ) : (
              <div className="py-12 text-center">
                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-3xl font-extrabold font-headline text-on-surface mb-3">Request Received</h3>
                <p className="text-on-surface-variant text-lg max-w-md mx-auto">Thank you. Our commercial director will reach out within 24 hours to discuss your custom proposal.</p>
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
