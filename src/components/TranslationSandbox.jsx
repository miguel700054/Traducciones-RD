import React, { useState } from 'react';
import { Sparkles, Sliders, CheckCircle, ArrowRightLeft, ShieldCheck, Zap, Copy, Check } from 'lucide-react';

const SAMPLE_TEXTS = [
  {
    id: 'legal',
    title: 'Acuerdo Legal & Contrato',
    sourceLang: 'Inglés',
    original: 'This agreement shall be governed by and construed in accordance with the laws of the Dominican Republic, without regard to its conflict of laws principles.',
    machine: 'Este acuerdo será gobernado por y construido de acuerdo con las leyes de República Dominicana, sin mirar sus principios de conflicto de leyes.',
    human: 'El presente contrato se regirá e interpretará de conformidad con la legislación vigente en la República Dominicana, haciendo abstracción de las normas en materia de conflicto de leyes.',
    explanation: 'Un perito jurado sustituye expresiones calcadas ("construido") por términos con plena validez procesal dominicana ("regirá e interpretará").'
  },
  {
    id: 'brand',
    title: 'Campaña de Marca / Resort',
    sourceLang: 'Inglés',
    original: 'Leave your worries behind. Unwind by the turquoise sea with our signature craft cocktails.',
    machine: 'Deje sus preocupaciones atrás. Desenrollarse por el mar turquesa con nuestros cócteles artesanales de firma.',
    human: 'Desconéctate y renueva tu energía frente a las aguas cristalinas del Caribe. Disfruta de nuestra coctelería de autor diseñada para tu máximo descanso.',
    explanation: 'La transcreación transforma "desenrollarse" (un calco literal grotesco de unwind) en "desconéctate y renueva tu energía".'
  },
  {
    id: 'tech',
    title: 'Manual de Software & SaaS',
    sourceLang: 'Francés',
    original: 'Veuillez vérifier les paramètres de sécurité avant de valider la réinitialisation de votre mot de passe.',
    machine: 'Por favor verificar los parámetros de seguridad antes de validar el reinicio de su palabra de pase.',
    human: 'Por favor, comprueba tus ajustes de seguridad antes de confirmar el restablecimiento de tu contraseña.',
    explanation: 'Garantiza la soltura de interfaz UI usando términos universales del español tech ("restablecimiento" en lugar de "reinicio de palabra de pase").'
  }
];

export default function TranslationSandbox({ openQuoteCalculator }) {
  const [selectedSample, setSelectedSample] = useState(SAMPLE_TEXTS[0]);
  const [transcreativityLevel, setTranscreativityLevel] = useState(50); // 0 to 100
  const [copiedText, setCopiedText] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  return (
    <section id="sandbox" className="py-20 bg-[var(--bg-secondary)] border-y border-[var(--border-color)]">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="badge badge-sand">Demostrador Interactivo</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)]">
            Compara el Toque Humano vs. Traducción Automática
          </h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base">
            Observa cómo nuestros traductores expertos transforman textos rígidos en mensajes fluidos, serenos y legalmente incontestables.
          </p>
        </div>

        {/* Interactive Workspace */}
        <div className="max-w-5xl mx-auto glass-card p-6 sm:p-10 space-y-8">
          
          {/* Sample Selectors */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {SAMPLE_TEXTS.map((sample) => (
              <button
                key={sample.id}
                onClick={() => setSelectedSample(sample)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                  selectedSample.id === sample.id
                    ? 'bg-[var(--brand-sage)] text-white shadow-md'
                    : 'bg-[var(--bg-card)] text-[var(--text-secondary)] border border-[var(--border-color)] hover:bg-[var(--bg-primary)]'
                }`}
              >
                <span>{sample.title}</span>
              </button>
            ))}
          </div>

          {/* Source Text Display */}
          <div className="p-5 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">
              <span>Texto Original ({selectedSample.sourceLang})</span>
              <span>Input</span>
            </div>
            <p className="font-serif italic text-base sm:text-lg text-[var(--text-primary)]">
              "{selectedSample.original}"
            </p>
          </div>

          {/* Comparison Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Machine Translation Card */}
            <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-red-200/50 dark:border-red-900/30 space-y-3 relative">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" /> Traducción Automática Generada
                </span>
                <span className="text-[11px] text-red-500 bg-red-50 dark:bg-red-950/40 px-2 py-0.5 rounded-full font-medium">
                  Rígida / Calcos Literales
                </span>
              </div>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-sans">
                {selectedSample.machine}
              </p>
              <div className="pt-2 text-xs text-red-600/80 dark:text-red-400/80 italic">
                ⚠️ Presenta falta de naturalidad y errores de término contextuados.
              </div>
            </div>

            {/* Traducciones RD Human Output */}
            <div className="p-6 rounded-2xl bg-[var(--brand-sage-light)] border border-[var(--brand-sage)]/30 space-y-3 relative shadow-md">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--brand-sage)] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" /> Resultado Traducciones RD
                </span>
                <button
                  onClick={() => handleCopy(selectedSample.human)}
                  className="text-xs text-[var(--brand-sage)] font-semibold flex items-center gap-1 hover:underline"
                >
                  {copiedText ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedText ? 'Copiado' : 'Copiar'}</span>
                </button>
              </div>

              <p className="text-sm sm:text-base font-medium text-[var(--text-primary)] leading-relaxed">
                {selectedSample.human}
              </p>

              <div className="pt-2 text-xs text-[var(--brand-sage)] font-medium flex items-start gap-2 bg-white/60 dark:bg-black/20 p-2.5 rounded-lg border border-[var(--brand-sage)]/20">
                <Sparkles className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{selectedSample.explanation}</span>
              </div>
            </div>

          </div>

          {/* Interactive CTA bar */}
          <div className="pt-4 border-t border-[var(--border-color)] flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-[var(--text-muted)]">
              ✨ Cada proyecto es revisado por 2 traductores nativos certificados.
            </div>

            <button
              onClick={openQuoteCalculator}
              className="btn-primary text-xs py-2.5 px-6"
            >
              <span>Solicitar Traducción Profesional</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
