import React from 'react';
import { Scale, ShieldCheck, Globe2, FileText, PhoneCall } from 'lucide-react';
import { AGENCY_INFO } from '../data/blogData';

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function ServicesSection() {
  const REAL_SERVICES = [
    {
      id: 'jurada',
      title: 'Traducción Jurada Certificada',
      description: 'Documentos legales oficiales firmados por la Lcda. Gilda Amelia Julián con validez jurada ante instituciones y consulados.',
      icon: Scale,
      badge: 'Legal & Notarial'
    },
    {
      id: 'revision',
      title: 'Revisión & Certificación',
      description: 'Verificación minuciosamente fiel y revisión técnica de textos legales por traductores certificados.',
      icon: ShieldCheck,
      badge: 'Control de Calidad'
    },
    {
      id: 'idiomas',
      title: 'Todos los Idiomas del Mundo',
      description: 'Traducciones profesionales desde y hacia cualquier idioma: Inglés, Francés, Italiano, Alemán, Portugués y más.',
      icon: Globe2,
      badge: 'Cobertura Global'
    },
    {
      id: 'documentos',
      title: 'Documentos Personales & Mercantiles',
      description: 'Actas de nacimiento, certificados, récord de notas, títulos universitarios, poderes y contratos corporativos.',
      icon: FileText,
      badge: 'Todo Tipo de Texto'
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-[var(--bg-primary)]">
      <div className="container max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="badge badge-sage">Agencia de Traductores Certificados</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)]">
            Especialidades & Cobertura
          </h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base">
            Servicios liderados por Lcda. {AGENCY_INFO.founder} ({AGENCY_INFO.experience}).
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REAL_SERVICES.map((serv) => {
            const IconComp = serv.icon;
            return (
              <div 
                key={serv.id}
                className="glass-card p-6 flex flex-col justify-between space-y-6 group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--brand-sage-light)] text-[var(--brand-sage)] flex items-center justify-center shadow-sm group-hover:bg-[var(--brand-sage)] group-hover:text-white transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <span className="badge badge-sand text-[10px]">
                    {serv.badge}
                  </span>

                  <h3 className="font-serif text-xl font-bold text-[var(--text-primary)]">
                    {serv.title}
                  </h3>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {serv.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Bar */}
        <div className="mt-14 p-8 rounded-3xl bg-[var(--brand-teal)] text-white shadow-xl flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 
              className="font-serif text-xl sm:text-2xl font-bold"
              style={{ color: '#F5EFE6' }}
            >
              {AGENCY_INFO.name} · Lcda. {AGENCY_INFO.founder}
            </h4>
            <p className="text-xs text-[#E1EDE7] max-w-xl leading-relaxed">
              {AGENCY_INFO.address}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`https://wa.me/1${AGENCY_INFO.phoneClean}`}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-[#FAF6F0] text-[var(--brand-teal)] font-bold text-xs hover:bg-white transition-colors shadow-md flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[var(--brand-sage)]" />
              <span>WhatsApp {AGENCY_INFO.phone}</span>
            </a>

            <a
              href={AGENCY_INFO.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-pink-600 text-white font-bold text-xs hover:bg-pink-700 transition-colors shadow-md flex items-center gap-2"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>@{AGENCY_INFO.instagram}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
