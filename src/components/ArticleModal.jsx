import React, { useState } from 'react';
import { 
  X, 
  Bookmark, 
  Heart, 
  Share2, 
  Check, 
  ArrowLeft,
  PhoneCall,
  MessageCircle
} from 'lucide-react';
import { AGENCY_INFO } from '../data/blogData';

export default function ArticleModal({ 
  post, 
  onClose, 
  isSaved, 
  toggleSavePost, 
  showToast 
}) {
  if (!post) return null;

  const [fontSize, setFontSize] = useState('text-base');
  const [readerTheme, setReaderTheme] = useState('sand');
  const [likesCount, setLikesCount] = useState(post.likes || 42);
  const [hasLiked, setHasLiked] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleScroll = (e) => {
    const target = e.target;
    const totalHeight = target.scrollHeight - target.clientHeight;
    if (totalHeight > 0) {
      const progress = (target.scrollTop / totalHeight) * 100;
      setScrollProgress(progress);
    }
  };

  const handleLike = () => {
    if (!hasLiked) {
      setLikesCount(prev => prev + 1);
      setHasLiked(true);
      showToast('❤️ ¡Gracias por tu valoración!');
    } else {
      setLikesCount(prev => prev - 1);
      setHasLiked(false);
    }
  };

  const getShareUrl = () => {
    const origin = window.location.origin;
    const pathname = window.location.pathname;
    return `${origin}${pathname}?post=${post.id}`;
  };

  const handleShare = async () => {
    const shareUrl = getShareUrl();
    const shareData = {
      title: post.title,
      text: `${post.title} - ${AGENCY_INFO.name}`,
      url: shareUrl
    };

    // Try Web Share API first (Native Mobile / Mac Share Sheet)
    if (navigator.share) {
      try {
        await navigator.share(shareData);
        showToast('✨ Artículo compartido con éxito');
        return;
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.log('Fallback to clipboard copy', err);
        } else {
          return; // User cancelled native share sheet
        }
      }
    }

    // Fallback: Copy to clipboard
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(shareUrl);
      } else {
        const input = document.createElement('input');
        input.value = shareUrl;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
      }
      setCopied(true);
      showToast('🔗 ¡Enlace del artículo copiado al portapapeles!');
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      showToast('📋 Copiar enlace: ' + shareUrl);
    }
  };

  const handleWhatsAppShare = () => {
    const shareUrl = getShareUrl();
    const text = encodeURIComponent(`*${post.title}*\n${post.subtitle}\n\nLee el artículo aquí: ${shareUrl}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const themeStyles = {
    sand: 'bg-[#FAF6F0] text-[#2C3833] border-[#E8E0D5]',
    light: 'bg-[#FFFFFF] text-[#1E2925] border-[#E5E7EB]',
    dark: 'bg-[#141D19] text-[#E3ECE8] border-[#25352F]'
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in p-2 sm:p-4">
      <div className={`relative w-full max-w-4xl max-h-[92vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden border transition-colors duration-300 ${themeStyles[readerTheme]}`}>
        
        {/* Top Reading Progress Bar */}
        <div className="w-full h-1.5 bg-black/10 dark:bg-white/10">
          <div className="h-full bg-[var(--brand-sage)] transition-all duration-150" style={{ width: `${scrollProgress}%` }} />
        </div>

        {/* Top Control Bar */}
        <div className="px-6 py-4 border-b flex items-center justify-between gap-4 border-inherit backdrop-blur-md sticky top-0 z-20 bg-inherit">
          <button onClick={onClose} className="flex items-center gap-1.5 text-xs font-semibold hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Volver al Blog</span>
          </button>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-1 bg-black/5 dark:bg-white/10 p-1 rounded-full">
              <button onClick={() => setFontSize('text-sm')} className={`w-7 h-7 rounded-full text-xs font-bold ${fontSize === 'text-sm' ? 'bg-[var(--brand-sage)] text-white' : ''}`}>A-</button>
              <button onClick={() => setFontSize('text-base')} className={`w-7 h-7 rounded-full text-xs font-bold ${fontSize === 'text-base' ? 'bg-[var(--brand-sage)] text-white' : ''}`}>A</button>
              <button onClick={() => setFontSize('text-xl')} className={`w-7 h-7 rounded-full text-xs font-bold ${fontSize === 'text-xl' ? 'bg-[var(--brand-sage)] text-white' : ''}`}>A+</button>
            </div>

            <div className="flex items-center gap-1 bg-black/5 dark:bg-white/10 p-1 rounded-full">
              <button onClick={() => setReaderTheme('sand')} className={`w-6 h-6 rounded-full bg-[#FAF6F0] border border-[#D9CEBF] ${readerTheme === 'sand' ? 'scale-125' : ''}`} title="Tema Arena" />
              <button onClick={() => setReaderTheme('light')} className={`w-6 h-6 rounded-full bg-[#FFFFFF] border border-[#CBD5E1] ${readerTheme === 'light' ? 'scale-125' : ''}`} title="Tema Claro" />
              <button onClick={() => setReaderTheme('dark')} className={`w-6 h-6 rounded-full bg-[#141D19] border border-[#334840] ${readerTheme === 'dark' ? 'scale-125' : ''}`} title="Tema Noche" />
            </div>

            <button onClick={() => toggleSavePost(post.id)} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10">
              <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-[var(--brand-terracotta)] text-[var(--brand-terracotta)]' : ''}`} />
            </button>

            <button onClick={onClose} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Article Body */}
        <div onScroll={handleScroll} className="flex-1 overflow-y-auto px-6 sm:px-12 py-8 space-y-8">
          <div className="space-y-4 max-w-3xl mx-auto">
            <span className="badge badge-sand">{post.categoryName || 'Blog Oficial'}</span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">{post.title}</h1>
            <p className="text-lg opacity-85 font-light leading-relaxed">{post.subtitle}</p>

            <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-inherit text-xs opacity-75">
              <span>Por <strong>{post.author?.name || AGENCY_INFO.founder}</strong></span>
              <span>📅 {post.date} · ⏱️ {post.readTime}</span>
            </div>
          </div>

          {post.featuredImage && (
            <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-lg border border-inherit">
              <img src={post.featuredImage} alt={post.title} className="w-full max-h-96 object-cover" />
            </div>
          )}

          <div className={`max-w-3xl mx-auto space-y-6 leading-relaxed font-sans ${fontSize}`} dangerouslySetInnerHTML={{ __html: post.content }} />

          {/* Action Row */}
          <div className="max-w-3xl mx-auto pt-8 border-t border-inherit flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <button 
                onClick={handleLike} 
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm transition-transform active:scale-95 ${hasLiked ? 'bg-[var(--brand-terracotta)] text-white' : 'bg-black/5 dark:bg-white/10 hover:bg-black/10'}`}
              >
                <Heart className={`w-4 h-4 ${hasLiked ? 'fill-current' : ''}`} />
                <span>{likesCount} Me Gusta</span>
              </button>

              {/* Main Share Button */}
              <button 
                onClick={handleShare} 
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  copied 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-black/5 dark:bg-white/10 hover:bg-black/10'
                }`}
                title="Compartir este artículo"
              >
                {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
                <span>{copied ? '¡Copiado!' : 'Compartir'}</span>
              </button>

              {/* Direct WhatsApp Share Button */}
              <button 
                onClick={handleWhatsAppShare} 
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 text-xs font-bold hover:bg-emerald-500/25 transition-colors"
                title="Compartir en WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Enviar por WhatsApp</span>
              </button>
            </div>

            <a href={`https://wa.me/1${AGENCY_INFO.phoneClean}`} target="_blank" rel="noreferrer" className="btn-primary text-xs py-2.5 px-5">
              <PhoneCall className="w-4 h-4" />
              <span>Contactar en WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
