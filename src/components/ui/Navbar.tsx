'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { MagnifyingGlassIcon, BookOpenIcon } from '@heroicons/react/24/solid';
import { useSearchContext } from 'fumadocs-ui/provider';

const Logo = () => (
  <svg class="flex h-6 w-6 shrink-0" width="100" height="92" viewBox="0 0 100 92" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_136_35)"><path d="M35.1293 92L39.2242 59.3897L44.8276 60.4695L14.2241 81.2019L0 57.0141L32.7586 45.3521V47.7277L0 33.4742L14.2241 8.85446L45.6896 33.2582L39.2242 34.1221L34.4828 0H65.5172L61.4225 33.9061L56.681 32.8263L85.7759 8.85446L100 33.4742L66.1638 47.7277V45.5681L99.569 57.0141L85.3448 81.2019L57.5431 59.3897H61.638L66.1638 92H35.1293Z" fill="#52A9FF"></path></g><defs><clipPath id="clip0_136_35"><rect width="100" height="92" fill="white"></rect></clipPath></defs></svg>

);

const GitHubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

export function Navbar() {
  const pathname = usePathname();
  const { setOpenSearch } = useSearchContext();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className={`container mx-auto px-4 transition-all duration-200 ease-out ${scrolled ? 'py-2' : 'py-2'}`}>
        <nav className={`flex items-center justify-between gap-4 rounded-xl transition-all duration-200 ease-out ${scrolled
          ? 'px-4 py-2.5 bg-[#18181b]/70 backdrop-blur-2xl backdrop-saturate-150 border border-white/10 shadow-xl shadow-black/40'
          : 'px-3 py-1.5 bg-transparent border border-transparent'
          }`}>
          <Link href="/" className="flex items-center gap-2.5 text-white hover:text-brand transition-colors">
            <Logo />
            <span className="font-semibold text-sm hidden sm:block">Hydrodactyl</span>
          </Link>

          <div className="flex items-center gap-1">
            <Link
              href="/docs/hydrodactyl"
              className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg transition-all ${pathname?.startsWith('/docs')
                ? 'text-brand bg-brand/10'
                : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
            >
              <BookOpenIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Docs</span>
            </Link>

            <Link
              href="https://github.com/blueprintframework/hydrodactyl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-all"
            >
              <GitHubIcon />
              <span className="hidden sm:inline">GitHub</span>
            </Link>
          </div>

          <button
            onClick={() => setOpenSearch(true)}
            className="flex items-center gap-2 pl-3 pr-2 py-1.5 text-white/40 hover:text-white/60 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-white/10 rounded-lg transition-all text-sm"
            aria-label="Search"
          >
            <MagnifyingGlassIcon className="w-4 h-4" />
            <span className="hidden md:inline text-white/40">Search...</span>
            <kbd className="hidden md:inline px-1.5 py-0.5 text-[10px] font-mono text-white/30 bg-white/[0.06] rounded border border-white/[0.06]">
              Ctrl K
            </kbd>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
