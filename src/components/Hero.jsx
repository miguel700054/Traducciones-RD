import React from 'react';
import { Award, Globe, MapPin, Scale, Zap, Clock, MessageCircle } from 'lucide-react';
import { AGENCY_INFO } from '../data/blogData';

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Hero() {
  const whatsappQuoteUrl = `https://wa.me/1${AGENCY_INFO.phoneClean}?text=${encodeURIComponent('Hola, Quisiera cotizar una traducción con Traducciones RD')}`;

  return (
    <section className="relative overflow-hidden py-10 lg:py-14 bg-gradient-to-b from-[var(--bg-primary)] via-[var(--bg-secondary)] to-[var(--bg-primary)]">
      
      <div className="container max-w-5xl mx-auto relative z-10">
        
        {/* Perfectly Centered & Balanced Header */}
        <div className="text-center space-y-5 max-w-3xl mx-auto">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--brand-sage-light)] text-[var(--brand-sage)] text-xs font-semibold tracking-wide">
            <Award className="w-3.5 h-3.5" />
            <span>Lcda. {AGENCY_INFO.founder} · {AGENCY_INFO.experience}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[var(--text-primary)] leading-tight">
            El Blog de <span className="italic text-[var(--brand-sage)]">Traducciones RD</span>
          </h1>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] font-normal leading-relaxed max-w-2xl mx-auto">
            Traducciones en <strong>todos los idiomas</strong>. Traducciones certificadas para <strong>República Dominicana y el mundo</strong>. Entregamos en <strong>menos de 24 horas</strong> y realizamos <strong>traducciones urgentes</strong>.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-[var(--text-secondary)] pt-1">
            <span className="px-3.5 py-1 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center gap-1.5 shadow-sm">
              <Zap className="w-3.5 h-3.5 text-amber-500" /> Entrega en menos de 24h
            </span>
            <span className="px-3.5 py-1 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center gap-1.5 shadow-sm">
              <Clock className="w-3.5 h-3.5 text-[var(--brand-terracotta)]" /> Traducciones Urgentes
            </span>
            <span className="px-3.5 py-1 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center gap-1.5 shadow-sm">
              <Globe className="w-3.5 h-3.5 text-[var(--brand-sage)]" /> Todos los Idiomas
            </span>
            <span className="px-3.5 py-1 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center gap-1.5 shadow-sm">
              <Scale className="w-3.5 h-3.5 text-[var(--brand-sage)]" /> Traducción Legal Certificada
            </span>
          </div>

          {/* Prominent High-Visibility WhatsApp CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
            <a 
              href={whatsappQuoteUrl} 
              target="_blank" 
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 py-4 px-8 rounded-full bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white font-extrabold text-sm sm:text-base shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border border-emerald-400/40 ring-4 ring-emerald-500/20"
            >
              <MessageCircle className="w-6 h-6 text-white animate-bounce" />
              <span className="tracking-wide">COTIZA TU TRADUCCIÓN POR WHATSAPP</span>
            </a>

            <a 
              href={AGENCY_INFO.instagramUrl} 
              target="_blank" 
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)] font-bold text-xs hover:bg-[var(--bg-secondary)] transition-colors shadow-sm"
            >
              <InstagramIcon className="w-4 h-4 text-pink-600" />
              <span>Instagram @{AGENCY_INFO.instagram}</span>
            </a>
          </div>

        </div>

        {/* Clean Showcase Banner */}
        <div className="mt-10 max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl border-4 border-[var(--bg-card)] relative">
          <img 
            src="/hero-bg.png" 
            alt="Traducciones RD - Agencia de Traductores Certificados" 
            className="w-full h-[300px] sm:h-[360px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="badge badge-sand mb-2">Santo Domingo, República Dominicana</span>
                <p className="font-serif text-lg sm:text-xl font-medium">
                  Lcda. {AGENCY_INFO.founder} · {AGENCY_INFO.founderTitle}
                </p>
                <p className="text-xs text-white/80 flex items-center gap-1 mt-1">
                  <MapPin className="w-3.5 h-3.5" /> {AGENCY_INFO.address}
                </p>
              </div>

              <div className="text-right hidden sm:block">
                <span className="text-xs px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white font-semibold">
                  17,5 mil seguidores en Instagram
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
