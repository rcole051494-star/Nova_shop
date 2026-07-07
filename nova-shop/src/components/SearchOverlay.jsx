import React, { useState, useEffect, useRef } from 'react';
import { X, Search } from 'lucide-react';

const allProducts = [
  { id: 1, title: 'Structured Wool Coat', price: 450, image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=1000&auto=format&fit=crop' },
  { id: 2, title: 'Silk Slip Dress', price: 280, image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1000&auto=format&fit=crop' },
  { id: 3, title: 'Cashmere Turtleneck', price: 320, image: 'https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?q=80&w=1000&auto=format&fit=crop' },
  { id: 4, title: 'Pleated Wide Trousers', price: 210, image: 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=1000&auto=format&fit=crop' },
  { id: 5, title: 'Oversized Blazer', price: 380, image: 'https://images.unsplash.com/photo-1591369822096-11440026e6de?q=80&w=1000&auto=format&fit=crop' },
  { id: 6, title: 'Leather Tote Bag', price: 550, image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=1000&auto=format&fit=crop' },
];

export default function SearchOverlay({ isOpen, onClose, onProductClick }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const results = query.trim() === '' 
    ? [] 
    : allProducts.filter(p => p.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)',
      zIndex: 2000, display: 'flex', flexDirection: 'column',
      animation: 'fadeIn 0.3s ease-out'
    }}>
      <div className="container" style={{ paddingTop: '80px', position: 'relative' }}>
        <button 
          onClick={onClose}
          style={{ position: 'absolute', top: '40px', right: 'var(--spacing-lg)', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <X size={32} strokeWidth={1} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', borderBottom: '2px solid var(--color-text)', paddingBottom: '16px', marginTop: '48px' }}>
          <Search size={32} strokeWidth={1} style={{ marginRight: '16px' }} />
          <input 
            ref={inputRef}
            type="text" 
            placeholder="Search for products..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ 
              flex: 1, border: 'none', background: 'transparent', 
              fontSize: '2.5rem', fontFamily: 'var(--font-serif)', outline: 'none',
              color: 'var(--color-text)'
            }}
          />
        </div>

        <div style={{ marginTop: '48px' }}>
          {query && results.length === 0 && (
            <p className="text-muted" style={{ fontSize: '1.2rem' }}>No products found for "{query}".</p>
          )}

          {results.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '32px' }}>
              {results.map(product => (
                <div 
                  key={product.id} 
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    onClose();
                    onProductClick(product);
                  }}
                >
                  <img src={product.image} alt={product.title} style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', marginBottom: '16px' }} />
                  <h4 style={{ fontWeight: 500, fontSize: '0.9rem' }}>{product.title}</h4>
                  <p className="text-muted" style={{ fontSize: '0.9rem' }}>${product.price}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
