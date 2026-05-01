import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ArrowRight, Home, Sparkles, Truck, Key, X, Send, Bot, MapPin } from 'lucide-react';
import { SERVICES, TESTIMONIALS } from '@/src/constants';
import BeforeAfterSlider from './BeforeAfterSlider';
import { cn } from '@/src/lib/utils';

const iconMap = {
  Home: Home,
  Sparkles: Sparkles,
  Truck: Truck,
  Key: Key,
};

interface LandingPageProps {
  onBookNow: () => void;
  onViewServices: () => void;
}

export default function LandingPage({ onBookNow, onViewServices }: LandingPageProps) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatStep, setChatStep] = useState(0);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 z-10"
          >
            <div className="inline-flex items-center gap-2 bg-primary-fixed px-4 py-1.5 rounded-full mb-6">
              <Star className="w-3 h-3 fill-on-primary-fixed text-on-primary-fixed" />
              <span className="font-headline text-[10px] font-bold text-on-primary-fixed uppercase tracking-widest">Calgary's #1 Rated Clean</span>
            </div>
            <h1 className="font-headline font-extrabold text-6xl md:text-8xl text-on-surface leading-[1.05] tracking-tight mb-8 text-balance">
              Your Home, <br /><span className="text-primary italic">Sorted.</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-lg mb-10 leading-relaxed">
              Boutique cleaning standards for Calgary homes. Meticulous, reliable, and obsessively thorough — we cleaned that.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={onBookNow}
                className="bg-primary text-on-primary px-10 py-5 rounded-full font-headline font-bold text-lg signature-gradient shadow-xl hover:shadow-primary/20 transition-all active:scale-95"
              >
                Book Your Clean
              </button>
              <button 
                onClick={onViewServices}
                className="bg-surface-container-highest text-on-surface px-10 py-5 rounded-full font-headline font-bold text-lg hover:bg-surface-container-high transition-all active:scale-95"
              >
                See Our Standards
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary-container rounded-full blur-3xl opacity-30"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl hover:rotate-0 transition-transform duration-700">
              <img 
                alt="Modern Living Room" 
                className="w-full h-[600px] object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ0zg-fmvKho0GgVkvXeUKS1yE2C8LelEdbqzwgEEJsOue8nBZjapLI5J6TyOP4NceGoRjwyK0-xfE5tQqnlT_Dd_T-Cp4JagjT0nQUWLhBCbDgfXxePac-C58cpy3Sxn36xkqnPo5RczGWmk2Du1yqVHQdVYnDlqaxtIVq7MyAYb8qByompFWEHemCgS0tn70D9Gwd_C80CnTmDttzBTB3_0Q1KIWm4UyAVbCYqkyyE1QSM5RQ5JK16i_winSseKEkX-vDMbu77s"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50 max-w-[240px]">
                <div className="flex gap-1 text-primary mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-primary" />)}
                </div>
                <p className="font-bold text-sm text-on-surface">"The attention to detail is truly unparalleled in Calgary."</p>
                <p className="text-xs text-on-surface-variant mt-2">— Sarah J., Beltline</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meticulous Services */}
      <section className="bg-surface-container-low py-32 rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h2 className="font-headline font-bold text-4xl md:text-5xl text-on-surface tracking-tight mb-4">Meticulous Services</h2>
              <p className="text-on-surface-variant text-lg max-w-md">Tailored cleaning programs designed for the discerning homeowner.</p>
            </div>
            <button 
              onClick={onViewServices}
              className="group flex items-center gap-2 font-headline font-bold text-primary"
            >
              View Detailed Checklist 
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              return (
                <motion.div 
                  key={service.id}
                  whileHover={{ y: -10 }}
                  className="group relative bg-surface-container-lowest p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary-container/20 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-primary-container rounded-2xl flex items-center justify-center mb-8">
                      <Icon className="text-primary w-8 h-8" />
                    </div>
                    <h3 className="font-headline font-bold text-2xl text-on-surface mb-4">{service.title}</h3>
                    <p className="text-on-surface-variant leading-relaxed mb-8">{service.description}</p>
                    <img 
                      alt={service.title} 
                      className="w-full h-48 object-cover rounded-xl mb-6 opacity-80 group-hover:opacity-100 transition-opacity" 
                      src={service.image}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Tidy Touch? (Bento Grid) */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <h2 className="font-headline font-bold text-4xl md:text-5xl text-on-surface mb-6">Why Tidy Touch?</h2>
            <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">More than just a cleaning service. We are your partners in maintaining a healthy, high-performance home.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-full md:h-[600px]">
            <div className="md:col-span-2 md:row-span-2 relative p-12 rounded-[2.5rem] flex flex-col justify-end overflow-hidden group shadow-xl bg-black">
              <img src="/golden_standard.png" alt="Premium Service" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none"></div>
              
              <div className="absolute -top-4 -left-2 opacity-10 pointer-events-none transition-transform duration-700 group-hover:scale-110 z-0">
                <img src="/ttclear.png" alt="" className="w-64 object-contain select-none" />
              </div>

              <div className="relative z-10 drop-shadow-md">
                <h3 className="font-headline font-bold text-3xl mb-4 text-white">The Golden Standard</h3>
                <p className="text-white/95 text-lg leading-relaxed font-medium">Our 50-point inspection ensures that nothing is overlooked. We don't just clean; we curate your living environment for maximum comfort.</p>
              </div>
            </div>

            <div className="md:col-span-2 bg-primary-container text-on-primary-container p-10 rounded-[2.5rem] flex items-center gap-6">
              <div className="bg-white/50 px-3 py-2 rounded-2xl flex items-center justify-center shrink-0">
                <img src="/ttclear.png" alt="Tidy Touch" className="h-6 w-auto object-contain" />
              </div>
              <div>
                <h4 className="font-headline font-bold text-xl mb-1">Eco-Conscious</h4>
                <p className="text-sm font-medium opacity-80">Safe for your family, pets, and the Calgary environment.</p>
              </div>
            </div>

            <div className="bg-surface-container-high p-10 rounded-[2.5rem] flex flex-col justify-center text-center">
              <span className="font-headline font-extrabold text-4xl text-primary mb-2">100%</span>
              <p className="font-headline text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Satisfaction Guarantee</p>
            </div>

            <div className="bg-surface-container-high p-10 rounded-[2.5rem] flex flex-col justify-center text-center">
              <span className="font-headline font-extrabold text-4xl text-primary mb-2">4.9/5</span>
              <p className="font-headline text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Client Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Before / After Slider */}
      <BeforeAfterSlider />

      {/* Service Area */}
      <section className="py-32 px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="font-headline font-extrabold text-4xl md:text-5xl text-on-surface leading-tight tracking-tight">Proudly Serving the <span className="text-primary">Calgary Metro</span></h2>
            <p className="text-lg text-on-surface-variant font-medium leading-relaxed max-w-lg">
              We provide our golden standard cleaning services to homes across Calgary, Airdrie, Chestermere, and Okotoks. Because local spaces deserve local care.
            </p>
            <div className="flex items-center gap-3 text-primary font-bold font-headline uppercase tracking-widest text-sm bg-primary-container inline-flex px-6 py-3 rounded-full">
              <MapPin className="w-4 h-4" /> <span>Based in Alberta</span>
            </div>
          </div>
          <div className="flex-1 relative w-full flex justify-center">
             <div className="absolute inset-0 bg-primary/20 rounded-[3rem] blur-3xl transform scale-75 block"></div>
             <img src="/images/calgary-map.png" alt="3D Map of Calgary Alberta" className="relative z-10 w-[90%] max-w-lg h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-[1.02] transition-transform duration-500 rounded-[2.5rem] object-cover ring-8 ring-surface-container-lowest/50" />
          </div>
        </div>
      </section>

      {/* Client Stories */}
      <section className="bg-surface-container-low py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-16">
            <h2 className="font-headline font-bold text-4xl text-on-surface">Client Stories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="relative p-12 bg-surface-container-lowest rounded-[2.5rem] shadow-sm">
                <p className="text-xl text-on-surface leading-relaxed italic mb-8 relative z-10">
                  "{t.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-surface-container-highest rounded-full flex items-center justify-center font-bold text-primary">{t.initials}</div>
                  <div>
                    <p className="font-bold text-on-surface">{t.name}</p>
                    <p className="text-sm text-on-surface-variant">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto bg-primary rounded-[4rem] relative overflow-hidden py-24 px-8 md:px-20 text-center">
          <div className="absolute inset-0 signature-gradient opacity-90"></div>
          <div className="relative z-10">
            <h2 className="font-headline font-extrabold text-4xl md:text-6xl text-on-primary mb-8 tracking-tight">Ready for a Tidy Touch?</h2>
            <p className="text-on-primary/80 text-lg md:text-xl max-w-2xl mx-auto mb-12">
              Join the growing community of Calgary homeowners who refuse to settle for anything less than spotless.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button 
                onClick={onBookNow}
                className="bg-surface-container-lowest text-primary px-12 py-6 rounded-full font-headline font-extrabold text-xl shadow-2xl hover:scale-105 transition-transform active:scale-95"
              >
                Book Your Clean Today
              </button>
              <button onClick={() => setIsChatOpen(true)} className="bg-transparent border-2 border-on-primary/30 text-on-primary px-12 py-6 rounded-full font-headline font-extrabold text-xl hover:bg-on-primary/10 transition-colors active:scale-95">
                Chat With Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Chat Widget */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-[100] w-[380px] shadow-2xl rounded-3xl overflow-hidden bg-surface-container-lowest border border-outline-variant/20 flex flex-col"
          >
            {/* Header */}
            <div className="bg-primary text-on-primary p-6 relative">
              <button 
                onClick={() => setIsChatOpen(false)}
                className="absolute top-6 right-6 text-on-primary/70 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold font-headline">Tidy Touch Concierge</h3>
                  <p className="text-xs text-on-primary/80">Typically replies immediately</p>
                </div>
              </div>
            </div>

            {/* Chat Area */}
            <div className="p-6 bg-surface-container-low/50 h-[320px] overflow-y-auto flex flex-col gap-4">
              <div className="flex gap-3 max-w-[85%]">
                <div className="w-8 h-8 rounded-full bg-primary-container shrink-0 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-primary" />
                </div>
                <div className="bg-surface-container-lowest p-4 rounded-2xl rounded-tl-sm shadow-sm text-sm text-on-surface">
                  Hi there! We'd love to help curate a cleaning plan for you. What's your name and best contact email?
                </div>
              </div>
              
              {chatStep > 0 && (
                <div className="flex gap-3 max-w-[85%] self-end flex-row-reverse fade-in">
                  <div className="bg-primary text-on-primary p-4 rounded-2xl rounded-tr-sm shadow-sm text-sm">
                    Info provided
                  </div>
                </div>
              )}
              
              {chatStep > 0 && (
                <div className="flex gap-3 max-w-[85%] fade-in">
                  <div className="w-8 h-8 rounded-full bg-primary-container shrink-0 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-primary" />
                  </div>
                  <div className="bg-surface-container-lowest p-4 rounded-2xl rounded-tl-sm shadow-sm text-sm text-on-surface">
                    Thanks! Briefly, what are you looking for help with? (e.g. Move out clean, recurring standard clean)
                  </div>
                </div>
              )}

              {chatStep > 1 && (
                <div className="flex gap-3 max-w-[85%] self-end flex-row-reverse fade-in">
                  <div className="bg-primary text-on-primary p-4 rounded-2xl rounded-tr-sm shadow-sm text-sm">
                    Details sent
                  </div>
                </div>
              )}

              {chatStep > 1 && (
                <div className="flex gap-3 max-w-[85%] fade-in">
                  <div className="w-8 h-8 rounded-full bg-primary-container shrink-0 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-primary" />
                  </div>
                  <div className="bg-surface-container-lowest p-4 rounded-2xl rounded-tl-sm shadow-sm text-sm text-on-surface">
                    Perfect. Our team has received your information and we will reach out shortly to finalize a quote!
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            {chatStep < 2 && (
              <div className="p-4 bg-surface-container-lowest border-t border-outline-variant/10">
                <form 
                  onSubmit={(e) => { 
                    e.preventDefault(); 
                    setChatStep(s => s + 1);
                    (e.target as HTMLFormElement).reset();
                  }} 
                  className="flex gap-2"
                >
                  <input 
                    required 
                    type={chatStep === 0 ? "text" : "text"} 
                    placeholder={chatStep === 0 ? "Name & Email..." : "How can we help?"}
                    className="flex-grow bg-surface-container-low border border-outline-variant/30 rounded-full px-4 py-3 outline-none focus:border-primary transition-colors text-sm"
                  />
                  <button type="submit" className="w-12 h-12 shrink-0 bg-primary text-on-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors shadow-sm">
                    <Send className="w-5 h-5 ml-0.5" />
                  </button>
                </form>
              </div>
            )}
            
            {chatStep >= 2 && (
              <div className="p-4 text-center bg-surface-container-lowest border-t border-outline-variant/10">
                <button onClick={() => setIsChatOpen(false)} className="text-sm font-bold text-on-surface-variant hover:text-primary transition-colors">
                  Close Chat
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
