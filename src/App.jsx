import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BlogGrid from './components/BlogGrid';
import ArticleModal from './components/ArticleModal';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';

import { BLOG_POSTS } from './data/blogData';
import { Bookmark, X } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [activeCategory, setActiveCategory] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Modals & Drawers State
  const [selectedPost, setSelectedPost] = useState(null);
  const [bookmarksDrawerOpen, setBookmarksDrawerOpen] = useState(false);

  // Bookmarks saved in localStorage
  const [savedPosts, setSavedPosts] = useState(() => {
    try {
      const saved = localStorage.getItem('traducciones_rd_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Toast System
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Deep-link check on URL params for shared articles
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const postId = params.get('post');
      if (postId) {
        const found = BLOG_POSTS.find(p => p.id === postId);
        if (found) {
          setSelectedPost(found);
        }
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  // Sync Theme to HTML data-theme attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Sync Bookmarks to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('traducciones_rd_bookmarks', JSON.stringify(savedPosts));
    } catch (e) {
      console.error(e);
    }
  }, [savedPosts]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
    showToast(theme === 'light' ? '🌙 Modo Noche Serena activado' : '☀️ Modo Claro activado');
  };

  const toggleSavePost = (postId) => {
    if (savedPosts.includes(postId)) {
      setSavedPosts(savedPosts.filter(id => id !== postId));
      showToast('Artículo eliminado de guardados');
    } else {
      setSavedPosts([...savedPosts, postId]);
      showToast('🔖 Artículo guardado en tus favoritos');
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      
      {/* Toast Floating Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-full bg-[var(--brand-sage)] text-white shadow-2xl text-xs sm:text-sm font-semibold flex items-center gap-2 animate-fade-in border border-white/20">
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Header */}
      <Header 
        theme={theme}
        toggleTheme={toggleTheme}
        savedPostsCount={savedPosts.length}
        openBookmarks={() => setBookmarksDrawerOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* Main Page Layout */}
      <main>
        <Hero />

        <BlogGrid 
          posts={BLOG_POSTS}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          searchQuery={searchQuery}
          savedPosts={savedPosts}
          toggleSavePost={toggleSavePost}
          onSelectPost={(post) => setSelectedPost(post)}
        />

        <ServicesSection />
      </main>

      {/* Footer */}
      <Footer showToast={showToast} />

      {/* Article Modal Reader */}
      {selectedPost && (
        <ArticleModal 
          post={selectedPost}
          onClose={() => {
            setSelectedPost(null);
            // Clean URL query param when closing modal
            if (window.history.pushState) {
              const cleanUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
              window.history.pushState({ path: cleanUrl }, '', cleanUrl);
            }
          }}
          isSaved={savedPosts.includes(selectedPost.id)}
          toggleSavePost={toggleSavePost}
          showToast={showToast}
        />
      )}

      {/* Bookmarks Drawer Modal */}
      {bookmarksDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-end animate-fade-in">
          <div className="w-full max-w-md bg-[var(--bg-card)] h-full p-6 space-y-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-4">
                <div className="flex items-center gap-2">
                  <Bookmark className="w-5 h-5 text-[var(--brand-sage)]" />
                  <h3 className="font-serif text-lg font-bold">Artículos Guardados</h3>
                </div>
                <button 
                  onClick={() => setBookmarksDrawerOpen(false)}
                  className="p-1 rounded-full hover:bg-[var(--bg-secondary)]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {savedPosts.length > 0 && BLOG_POSTS.length > 0 ? (
                <div className="space-y-4">
                  {BLOG_POSTS.filter(p => savedPosts.includes(p.id)).map(post => (
                    <div 
                      key={post.id} 
                      className="p-4 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-2 group"
                    >
                      <span className="badge badge-sand text-[10px]">{post.categoryName}</span>
                      <h4 
                        onClick={() => { setSelectedPost(post); setBookmarksDrawerOpen(false); }}
                        className="font-serif font-bold text-sm text-[var(--text-primary)] cursor-pointer group-hover:text-[var(--brand-sage)] transition-colors line-clamp-2"
                      >
                        {post.title}
                      </h4>
                      <div className="flex items-center justify-between text-xs pt-1">
                        <span className="text-[var(--text-muted)]">{post.readTime}</span>
                        <button 
                          onClick={() => toggleSavePost(post.id)}
                          className="text-red-500 text-[11px] font-semibold hover:underline"
                        >
                          Quitar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-[var(--text-muted)] space-y-3">
                  <Bookmark className="w-10 h-10 mx-auto opacity-40" />
                  <p className="text-sm">No tienes artículos guardados aún.</p>
                </div>
              )}
            </div>

            <button 
              onClick={() => setBookmarksDrawerOpen(false)} 
              className="btn-secondary w-full justify-center text-xs"
            >
              Cerrar Marcadores
            </button>

          </div>
        </div>
      )}

    </div>
  );
}
