import React, { useState } from 'react';
import { 
  X, 
  Calculator, 
  FileText, 
  Globe2, 
  Zap, 
  CheckCircle2, 
  Send, 
  ShieldCheck, 
  Clock,
  Sparkles,
  MessageSquare
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function QuoteCalculator({ isOpen, onClose, showToast }) {
  if (!isOpen) return null;

  const [wordCount, setWordCount] = useState(750);
  const [sourceLang, setSourceLang] = useState('Inglés');
  const [targetLang, setTargetLang] = useState('Español');
  const [docType, setDocType] = useState('juridica'); // juridica, tecnica, general, transcreacion
  const [urgency, setUrgency] = useState('estandar'); // estandar, urgente
  const [needApostille, setNeedApostille] = useState(false);

  // Form submission state
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientNotes, setClientNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Price Calculation Logic
  const ratePerWord = {
    juridica: 0.12,
    tecnica: 0.11,
    general: 0.08,
    transcreacion: 0.14
  };

  const urgencyMultiplier = urgency === 'urgente' ? 1.35 : 1.0;
  const basePriceUSD = wordCount * (ratePerWord[docType] || 0.10) * urgencyMultiplier;
  const apostilleFeeUSD = needApostille ? 35 : 0;
  const totalPriceUSD = Math.round(basePriceUSD + apostilleFeeUSD);
  const totalPriceDOP = Math.round(totalPriceUSD * 60.5); // Approx exchange rate

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    showToast('🎉 ¡Cotización generada con éxito! Nos pondremos en contacto pronto.');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
      <div className="relative w-full max-w-3xl bg-[var(--bg-card)] border border-[var(--border-color)] rounded-3xl shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="p-6 bg-[var(--brand-sage-light)] border-b border-[var(--border-color)] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[var(--brand-sage)] text-white flex items-center justify-center">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[var(--text-primary)]">
                Cotizador de Presupuesto en Tiempo Real
              </h3>
              <p className="text-xs text-[var(--text-secondary)]">
                Obtén un estimado transparente al instante para tus documentos.
              </p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-[var(--text-secondary)]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Left Form Column */}
              <div className="space-y-5">
                
                {/* Word Count Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-semibold">
                    <label className="text-[var(--text-primary)]">Volumen de Palabras:</label>
                    <span className="px-3 py-1 bg-[var(--brand-sage-light)] text-[var(--brand-sage)] font-bold rounded-full text-xs">
                      {wordCount.toLocaleString()} palabras
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min="100" 
                    max="10000" 
                    step="50"
                    value={wordCount}
                    onChange={(e) => setWordCount(Number(e.target.value))}
                    className="w-full accent-[var(--brand-sage)] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-[var(--text-muted)]">
                    <span>100 (Documento corto)</span>
                    <span>10,000+ (Manuscrito / Manual)</span>
                  </div>
                </div>

                {/* Language Pair */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1">
                      Idioma Origen
                    </label>
                    <select 
                      value={sourceLang}
                      onChange={(e) => setSourceLang(e.target.value)}
                      className="w-full p-2.5 text-xs rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] focus:outline-none"
                    >
                      <option value="Inglés">Inglés</option>
                      <option value="Español">Español</option>
                      <option value="Francés">Francés</option>
                      <option value="Alemán">Alemán</option>
                      <option value="Italiano">Italiano</option>
                      <option value="Portugués">Portugués</option>
                      <option value="Mandarín">Mandarín</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1">
                      Idioma Destino
                    </label>
                    <select 
                      value={targetLang}
                      onChange={(e) => setTargetLang(e.target.value)}
                      className="w-full p-2.5 text-xs rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] focus:outline-none"
                    >
                      <option value="Español">Español</option>
                      <option value="Inglés">Inglés</option>
                      <option value="Francés">Francés</option>
                      <option value="Alemán">Alemán</option>
                      <option value="Italiano">Italiano</option>
                      <option value="Portugués">Portugués</option>
                    </select>
                  </div>
                </div>

                {/* Document Specialty */}
                <div>
                  <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1.5">
                    Tipo de Documento & Especialidad
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'juridica', label: 'Jurídica / Certificada' },
                      { id: 'transcreacion', label: 'Transcreación Creativa' },
                      { id: 'tecnica', label: 'Técnica / Médica' },
                      { id: 'general', label: 'General / Blog / Mail' }
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setDocType(item.id)}
                        className={`p-2.5 text-xs rounded-xl font-medium border text-left transition-all ${
                          docType === item.id 
                            ? 'bg-[var(--brand-sage)] text-white border-[var(--brand-sage)] shadow-sm' 
                            : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] border-[var(--border-color)]'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Speed & Apostille Checkbox */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[var(--brand-sage)]" />
                      <span className="text-xs font-semibold">Entrega Express (24h)</span>
                    </div>
                    <input 
                      type="checkbox"
                      checked={urgency === 'urgente'}
                      onChange={(e) => setUrgency(e.target.checked ? 'urgente' : 'estandar')}
                      className="accent-[var(--brand-sage)] w-4 h-4"
                    />
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[var(--brand-terracotta)]" />
                      <span className="text-xs font-semibold">Incluir Firma Jurada y Apostilla</span>
                    </div>
                    <input 
                      type="checkbox"
                      checked={needApostille}
                      onChange={(e) => setNeedApostille(e.target.checked)}
                      className="accent-[var(--brand-sage)] w-4 h-4"
                    />
                  </div>
                </div>

              </div>

              {/* Right Live Estimate Breakdown Column */}
              <div className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] flex flex-col justify-between space-y-6">
                
                <div className="space-y-4">
                  <h4 className="font-serif text-lg font-bold border-b border-[var(--border-color)] pb-2">
                    Resumen del Presupuesto
                  </h4>

                  <div className="space-y-2 text-xs text-[var(--text-secondary)]">
                    <div className="flex justify-between">
                      <span>Tarifa base ({wordCount} palabras):</span>
                      <span className="font-bold text-[var(--text-primary)]">${Math.round(basePriceUSD)} USD</span>
                    </div>
                    
                    {needApostille && (
                      <div className="flex justify-between text-[var(--brand-terracotta)]">
                        <span>Gestión de Apostilla y Sello:</span>
                        <span className="font-bold">+$35 USD</span>
                      </div>
                    )}

                    {urgency === 'urgente' && (
                      <div className="flex justify-between text-amber-600 font-medium">
                        <span>Recargo por Urgencia 24h:</span>
                        <span>+35%</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-[var(--border-color)]">
                    <div className="text-xs text-[var(--text-muted)]">Estimado Total Estimativo:</div>
                    <div className="text-3xl font-serif font-bold text-[var(--brand-sage)] mt-1">
                      ${totalPriceUSD} <span className="text-sm font-sans font-normal text-[var(--text-muted)]">USD</span>
                    </div>
                    <div className="text-xs font-medium text-[var(--text-muted)]">
                      Aprox. RD$ {totalPriceDOP.toLocaleString()} DOP
                    </div>
                  </div>
                </div>

                {/* Client Contact Inputs */}
                <div className="space-y-3">
                  <input 
                    type="text"
                    required
                    placeholder="Tu nombre completo"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full p-2.5 text-xs rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)]"
                  />
                  <input 
                    type="email"
                    required
                    placeholder="Tu correo electrónico"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full p-2.5 text-xs rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)]"
                  />
                  
                  <button
                    type="submit"
                    className="btn-primary w-full justify-center py-3 text-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Enviar Solicitud de Presupuesto</span>
                  </button>
                </div>

              </div>

            </div>

          </form>
        ) : (
          /* Confirmation Screen */
          <div className="p-10 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[var(--brand-sage-light)] text-[var(--brand-sage)] flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)]">
              ¡Solicitud Recibida, {clientName}!
            </h3>

            <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto leading-relaxed">
              Hemos enviado una copia del presupuesto estimado de <strong>${totalPriceUSD} USD</strong> a <em>{clientEmail}</em>. Un coordinador de Traducciones RD revisará tus requisitos y te contactará en menos de 2 horas.
            </p>

            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <button
                onClick={onClose}
                className="btn-secondary text-xs"
              >
                Volver al Sitio Web
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
