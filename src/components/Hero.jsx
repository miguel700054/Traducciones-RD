import React from 'react';
import { Award, Globe, PhoneCall, MapPin, Scale, ShieldCheck } from 'lucide-react';
import { AGENCY_INFO } from '../data/blogData';

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-12 lg:py-16 bg-gradient-to-b from-[var(--bg-primary)] via-[var(--bg-secondary)] to-[var(--bg-primary)]">
      
      <div className="container max-w-5xl mx-auto relative z-10">
        
        {/* Perfectly Centered & Balanced Header */}
        <div className="text-center space-y-5 max-w-3xl mx-auto">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--brand-sage-light)] text-[var(--brand-sage)] text-xs font-semibold tracking-wide">
            <Award className="w-3.5 h-3.5" />
            <span>{AGENCY_INFO.founder} · {AGENCY_INFO.experience}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[var(--text-primary)] leading-tight">
            El Blog de <span className="italic text-[var(--brand-sage)]">Traducciones RD</span>
          </h1>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] font-normal leading-relaxed max-w-xl mx-auto">
            Traducciones en <strong>todos los idiomas</strong>. Artículos sobre traducción jurada certificada, documentos oficiales y comunicación global.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-[var(--text-secondary)] pt-1">
            <span className="px-3.5 py-1 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center gap-1.5 shadow-sm">
              <Globe className="w-3.5 h-3.5 text-[var(--brand-sage)]" /> Todos los Idiomas
            </span>
            <span className="px-3.5 py-1 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center gap-1.5 shadow-sm">
              <Scale className="w-3.5 h-3.5 text-[var(--brand-sage)]" /> Traducción Legal Certificada
            </span>
            <span className="px-3.5 py-1 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center gap-1.5 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-[var(--brand-sage)]" /> Documentos Oficiales
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a 
              href={AGENCY_INFO.instagramUrl} 
              target="_blank" 
              rel="noreferrer"
              className="btn-primary py-3 px-6 text-xs bg-gradient-to-r from-purple-600 to-pink-600 border-none shadow-md hover:opacity-95"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Instagram @{AGENCY_INFO.instagram}</span>
            </a>

            <a 
              href={`https://wa.me/1${AGENCY_INFO.phoneClean}`} 
              target="_blank" 
              rel="noreferrer"
              className="btn-secondary py-3 px-6 text-xs"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[var(--brand-sage)]" />
              <span>WhatsApp {AGENCY_INFO.phone}</span>
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
                  {AGENCY_INFO.founder} · {AGENCY_INFO.founderTitle}
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
