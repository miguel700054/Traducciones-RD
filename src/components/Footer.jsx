import React from 'react';
import { Compass, Phone, MapPin, Heart, Globe } from 'lucide-react';
import { AGENCY_INFO } from '../data/blogData';

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-color)] py-12">
      <div className="container max-w-6xl mx-auto px-4 space-y-8">
        
        {/* Footer 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-xs">
          
          {/* Column 1: Brand & Founder */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[var(--brand-sage)] text-white flex items-center justify-center">
                <Compass className="w-3.5 h-3.5" />
              </div>
              <span className="font-serif text-base font-bold text-[var(--text-primary)]">
                Traducciones <span className="text-[var(--brand-sage)]">RD</span>
              </span>
            </div>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              <strong>Lcda. {AGENCY_INFO.founder}</strong><br />
              {AGENCY_INFO.founderTitle}<br />
              ({AGENCY_INFO.experience})
            </p>
          </div>

          {/* Column 2: Web & Social */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs text-[var(--text-primary)] uppercase tracking-wider">
              Redes & Web
            </h4>
            <ul className="space-y-2 text-[var(--text-secondary)]">
              <li>
                <a href={AGENCY_INFO.instagramUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-[#E4405F] transition-colors">
                  <InstagramIcon className="w-4 h-4 text-[#E4405F]" />
                  <span>Instagram @{AGENCY_INFO.instagram}</span>
                </a>
              </li>
              <li>
                <a href={AGENCY_INFO.websiteUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-[var(--brand-sage)] transition-colors">
                  <Globe className="w-4 h-4 text-[var(--brand-sage)]" />
                  <span>{AGENCY_INFO.website}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Languages */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs text-[var(--text-primary)] uppercase tracking-wider">
              Idiomas
            </h4>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Traducciones en <strong>todos los idiomas del mundo</strong> con rigor profesional.
            </p>
          </div>

          {/* Column 4: Contact & Exact Address */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs text-[var(--text-primary)] uppercase tracking-wider">
              Contacto & Sede
            </h4>
            <ul className="space-y-2 text-[var(--text-secondary)]">
              <li className="flex items-start gap-1.5">
                <MapPin className="w-4 h-4 text-[var(--brand-sage)] shrink-0 mt-0.5" />
                <span className="leading-normal">{AGENCY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-[var(--brand-sage)] shrink-0" />
                <a href={`https://wa.me/1${AGENCY_INFO.phoneClean}`} target="_blank" rel="noreferrer" className="hover:underline font-semibold">
                  {AGENCY_INFO.phone}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--text-muted)] gap-3 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Traducciones RD · Lcda. {AGENCY_INFO.founder}. Todos los derechos reservados.</p>
          <p className="flex items-center justify-center gap-1">
            Blog Oficial diseñado con estilo <Heart className="w-3.5 h-3.5 text-[var(--brand-terracotta)] fill-current" /> relajado.
          </p>
        </div>

      </div>
    </footer>
  );
}
