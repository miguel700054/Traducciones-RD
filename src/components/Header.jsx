import React, { useState } from 'react';
import { 
  Search, 
  Moon, 
  Sun, 
  Bookmark, 
  Menu, 
  X,
  Compass,
  PhoneCall
} from 'lucide-react';
import { AGENCY_INFO } from '../data/blogData';

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Header({ 
  theme, 
  toggleTheme, 
  savedPostsCount, 
  openBookmarks, 
  searchQuery, 
  setSearchQuery
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 glass-nav">
      <div className="container">
        <div className="flex items-center justify-between h-20 px-2">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[var(--brand-sage)] text-white flex items-center justify-center shadow-md transition-transform group-hover:scale-105">
              <Compass className="w-5 h-5 text-[var(--brand-sand-light)]" />
            </div>
            <div>
              <span className="font-serif text-xl font-bold tracking-tight block text-[var(--text-primary)]">
                Traducciones <span className="text-[var(--brand-sage)]">RD</span>
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-[var(--text-muted)] block -mt-1">
                Blog Oficial · Gilda Amelia Julián
              </span>
            </div>
          </a>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:flex items-center relative max-w-sm w-full mx-6">
            <Search className="w-4 h-4 absolute left-3.5 text-[var(--text-muted)]" />
            <input
              type="text"
              placeholder="Buscar en el blog..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm rounded-full bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--brand-sage)] transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              >
                Limpiar
              </button>
            )}
          </div>

          {/* Actions Bar */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* Instagram Link */}
            <a
              href={AGENCY_INFO.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full hover:bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[#E4405F] transition-colors flex items-center gap-1.5 text-xs font-semibold"
              title="Instagram @traducciones_rd"
            >
              <InstagramIcon className="w-4 h-4 text-[#E4405F]" />
              <span className="hidden lg:inline">@{AGENCY_INFO.instagram}</span>
            </a>

            {/* Bookmarks */}
            <button
              onClick={openBookmarks}
              className="relative p-2.5 rounded-full hover:bg-[var(--bg-secondary)] text-[var(--text-secondary)] transition-colors"
              title="Artículos Guardados"
            >
              <Bookmark className="w-5 h-5" />
              {savedPostsCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[var(--brand-terracotta)] text-white text-[11px] font-bold rounded-full flex items-center justify-center shadow-sm">
                  {savedPostsCount}
                </span>
              )}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full hover:bg-[var(--bg-secondary)] text-[var(--text-secondary)] transition-colors"
              title={theme === 'dark' ? 'Cambiar a Modo Claro' : 'Cambiar a Noche Serena'}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Contact Direct Link */}
            <a
              href={`https://wa.me/1${AGENCY_INFO.phoneClean}`}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{AGENCY_INFO.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-[var(--text-secondary)]"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[var(--text-primary)]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[var(--border-color)] animate-fade-in flex flex-col gap-3">
            <div className="relative w-full">
              <Search className="w-4 h-4 absolute left-3.5 top-3 text-[var(--text-muted)]" />
              <input
                type="text"
                placeholder="Buscar artículos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm rounded-full bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)]"
              />
            </div>
            
            <a
              href={AGENCY_INFO.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 p-3 rounded-lg bg-[var(--bg-secondary)] text-sm font-medium"
            >
              <InstagramIcon className="w-4 h-4 text-[#E4405F]" />
              <span>Instagram @{AGENCY_INFO.instagram}</span>
            </a>

            <button
              onClick={() => { openBookmarks(); setMobileMenuOpen(false); }}
              className="flex items-center justify-between p-3 rounded-lg bg-[var(--bg-secondary)] text-sm font-medium"
            >
              <span className="flex items-center gap-2">
                <Bookmark className="w-4 h-4 text-[var(--brand-sage)]" /> Artículos Guardados
              </span>
              <span className="px-2 py-0.5 bg-[var(--brand-sage)] text-white text-xs rounded-full">
                {savedPostsCount}
              </span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
