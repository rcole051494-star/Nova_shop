import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart, setCurrentPage, onOpenSearch, onOpenMenu }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <button onClick={onOpenMenu} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><Menu size={20} /></button>
        <button onClick={() => setCurrentPage('shop')} style={{ background: 'none', border: 'none', cursor: 'pointer' }} className="desktop-link">Shop</button>
        <button onClick={() => setCurrentPage('collections')} style={{ background: 'none', border: 'none', cursor: 'pointer' }} className="desktop-link">Collections</button>
        <button onClick={() => setCurrentPage('journal')} style={{ background: 'none', border: 'none', cursor: 'pointer' }} className="desktop-link">Journal</button>
      </div>

      <div className="logo" onClick={() => setCurrentPage('home')} style={{ 
        cursor: 'pointer',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)'
      }}>
        NOVA
      </div>

      <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <button onClick={onOpenSearch} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><Search size={20} /></button>
        <button 
          onClick={onOpenCart}
          style={{ background: 'none', border: 'none', cursor: 'pointer', position: 'relative' }}
        >
          <ShoppingBag size={20} />
          {cartCount > 0 && (
            <span style={{
              position: 'absolute',
              top: '-8px',
              right: '-8px',
              background: 'var(--color-text)',
              color: 'var(--color-bg)',
              fontSize: '10px',
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold'
            }}>
              {cartCount}
            </span>
          )}
        </button>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .desktop-link { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
