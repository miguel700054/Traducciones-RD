import React, { useState } from 'react';
import { 
  X, 
  Bookmark, 
  Heart, 
  Share2, 
  Volume2, 
  Play, 
  Pause, 
  CloudRain,
  Waves,
  ArrowLeft,
  PhoneCall
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
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [ambientSound, setAmbientSound] = useState('none');
  const [likesCount, setLikesCount] = useState(post.likes || 12);
  const [hasLiked, setHasLiked] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

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

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('🔗 Enlace copiado al portapapeles');
    } else {
      showToast('Compartido con éxito');
    }
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
              <button onClick={() => setReaderTheme('sand')} className={`w-6 h-6 rounded-full bg-[#FAF6F0] border border-[#D9CEBF] ${readerTheme === 'sand' ? 'scale-125' : ''}`} />
              <button onClick={() => setReaderTheme('light')} className={`w-6 h-6 rounded-full bg-[#FFFFFF] border border-[#CBD5E1] ${readerTheme === 'light' ? 'scale-125' : ''}`} />
              <button onClick={() => setReaderTheme('dark')} className={`w-6 h-6 rounded-full bg-[#141D19] border border-[#334840] ${readerTheme === 'dark' ? 'scale-125' : ''}`} />
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

          <div className="max-w-3xl mx-auto p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-inherit flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button onClick={() => setIsPlayingAudio(!isPlayingAudio)} className="w-10 h-10 rounded-full bg-[var(--brand-sage)] text-white flex items-center justify-center">
                {isPlayingAudio ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
              </button>
              <div>
                <p className="text-xs font-bold">Escuchar en voz alta</p>
                <p className="text-[11px] opacity-75">{isPlayingAudio ? 'Reproduciendo audio...' : `Duración: ${post.audioDuration || '5 min'}`}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <button onClick={() => setAmbientSound(ambientSound === 'rain' ? 'none' : 'rain')} className={`p-2 rounded-lg flex items-center gap-1 ${ambientSound === 'rain' ? 'bg-[var(--brand-sage)] text-white' : 'bg-black/5 dark:bg-white/10'}`}>
                <CloudRain className="w-3.5 h-3.5" /> Lluvia
              </button>
              <button onClick={() => setAmbientSound(ambientSound === 'ocean' ? 'none' : 'ocean')} className={`p-2 rounded-lg flex items-center gap-1 ${ambientSound === 'ocean' ? 'bg-[var(--brand-sage)] text-white' : 'bg-black/5 dark:bg-white/10'}`}>
                <Waves className="w-3.5 h-3.5" /> Océano
              </button>
            </div>
          </div>

          {post.featuredImage && (
            <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-lg border border-inherit">
              <img src={post.featuredImage} alt={post.title} className="w-full max-h-96 object-cover" />
            </div>
          )}

          <div className={`max-w-3xl mx-auto space-y-6 leading-relaxed font-sans ${fontSize}`} dangerouslySetInnerHTML={{ __html: post.content }} />

          <div className="max-w-3xl mx-auto pt-8 border-t border-inherit flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button onClick={handleLike} className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm ${hasLiked ? 'bg-[var(--brand-terracotta)] text-white' : 'bg-black/5 dark:bg-white/10'}`}>
                <Heart className={`w-4 h-4 ${hasLiked ? 'fill-current' : ''}`} />
                <span>{likesCount} Me Gusta</span>
              </button>

              <button onClick={handleShare} className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 dark:bg-white/10 text-sm font-semibold">
                <Share2 className="w-4 h-4" />
                <span>Compartir</span>
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
