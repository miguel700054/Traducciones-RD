import React from 'react';
import { 
  Sparkles, 
  Scale, 
  Globe, 
  Clock, 
  Bookmark, 
  ArrowUpRight
} from 'lucide-react';
import { CATEGORIES, AGENCY_INFO } from '../data/blogData';

const iconMap = {
  Sparkles,
  Scale,
  Globe
};

export default function BlogGrid({ 
  posts, 
  activeCategory, 
  setActiveCategory, 
  searchQuery, 
  savedPosts, 
  toggleSavePost,
  onSelectPost
}) {
  
  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === 'todos' || post.category === activeCategory;
    const matchesSearch = !searchQuery || (
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="blog" className="py-10 bg-[var(--bg-primary)]">
      <div className="container max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <span className="badge badge-sand">Publicaciones & Artículos</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)]">
            Artículos Oficiales de Traducciones RD
          </h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base max-w-lg mx-auto">
            Espacio de lectura dedicado a la divulgación sobre traducción legal e idiomas.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
          {CATEGORIES.map((cat) => {
            const IconComp = iconMap[cat.icon] || Sparkles;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  isActive 
                    ? 'bg-[var(--brand-sage)] text-white shadow-md scale-105' 
                    : 'bg-[var(--bg-card)] text-[var(--text-secondary)] border border-[var(--border-color)] hover:bg-[var(--bg-secondary)]'
                }`}
              >
                <IconComp className="w-4 h-4" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Articles Grid (Only rendered when posts are present) */}
        {filteredPosts.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => {
              const isSaved = savedPosts.includes(post.id);

              return (
                <article 
                  key={post.id}
                  className="glass-card overflow-hidden flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative h-52 overflow-hidden bg-[var(--bg-secondary)]">
                      <img 
                        src={post.featuredImage || '/hero-bg.png'} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="badge badge-sage backdrop-blur-md">
                          {post.categoryName}
                        </span>
                      </div>
                      <button
                        onClick={(e) => { e.stopPropagation(); toggleSavePost(post.id); }}
                        className="absolute top-3 right-3 p-2 rounded-full bg-white/80 dark:bg-black/60 backdrop-blur-md text-[var(--text-primary)] hover:bg-white transition-colors"
                      >
                        <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-[var(--brand-terracotta)] text-[var(--brand-terracotta)]' : ''}`} />
                      </button>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" /> {post.readTime || '5 min'}
                        </span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>

                      <h3 
                        onClick={() => onSelectPost(post)}
                        className="font-serif text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--brand-sage)] transition-colors cursor-pointer leading-snug"
                      >
                        {post.title}
                      </h3>

                      <p className="text-sm text-[var(--text-secondary)] line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-[var(--border-color)]/50 mt-4 flex items-center justify-between">
                    <span className="text-xs font-semibold text-[var(--text-primary)]">
                      {post.author?.name || AGENCY_INFO.founder}
                    </span>
                    <button
                      onClick={() => onSelectPost(post)}
                      className="flex items-center gap-1 text-xs font-bold text-[var(--brand-sage)] hover:underline"
                    >
                      <span>Leer artículo</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
