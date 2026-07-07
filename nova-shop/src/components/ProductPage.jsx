import React, { useState } from 'react';

export default function ProductPage({ product, onAddToCart, onBack }) {
  const [selectedSize, setSelectedSize] = useState('M');

  if (!product) return null;

  return (
    <div className="animate-fade-in" style={{ paddingTop: '80px', minHeight: '100vh', display: 'flex' }}>
      {/* Image Gallery Side */}
      <div style={{ flex: 1, background: 'var(--color-accent)', padding: 'var(--spacing-xl)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img 
          src={product.image} 
          alt={product.title} 
          style={{ width: '100%', maxWidth: '500px', height: 'auto', objectFit: 'cover', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
        />
      </div>

      {/* Details Side */}
      <div style={{ flex: 1, padding: 'var(--spacing-xxl) var(--spacing-xl)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ maxWidth: '500px' }}>
          <button 
            onClick={onBack}
            style={{ background: 'none', border: 'none', cursor: 'pointer', marginBottom: '32px', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px', borderBottom: '1px solid var(--color-text)' }}
          >
            &larr; Back to Shop
          </button>
          
          <h1 style={{ fontSize: '3.5rem', marginBottom: '16px' }}>{product.title}</h1>
          <p style={{ fontSize: '1.5rem', color: 'var(--color-text-muted)', marginBottom: '32px' }}>${product.price}</p>
          
          <p style={{ lineHeight: 1.8, marginBottom: '48px', color: 'var(--color-text-muted)' }}>
            Crafted from the finest sustainable materials, this piece is designed to be a timeless addition to your wardrobe. 
            Features a relaxed fit, hidden seams, and meticulous attention to detail.
          </p>

          <div style={{ marginBottom: '48px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem', fontWeight: 500 }}>Select Size</span>
              <a href="#" style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem', borderBottom: '1px solid var(--color-text-muted)', color: 'var(--color-text-muted)' }}>Size Guide</a>
            </div>
            <div style={{ display: 'flex', gap: '16px' }}>
              {['S', 'M', 'L', 'XL'].map(size => (
                <button 
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  style={{ 
                    width: '50px', height: '50px', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: `1px solid ${selectedSize === size ? 'var(--color-text)' : 'var(--color-border)'}`,
                    background: selectedSize === size ? 'var(--color-text)' : 'transparent',
                    color: selectedSize === size ? 'var(--color-bg)' : 'var(--color-text)',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1rem'
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button 
            className="btn btn-primary" 
            style={{ width: '100%', padding: '24px', fontSize: '1rem' }}
            onClick={() => onAddToCart({ ...product, size: selectedSize })}
          >
            Add to Cart
          </button>
          
          <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontWeight: 500 }}>Details</span>
              <span>+</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontWeight: 500 }}>Shipping & Returns</span>
              <span>+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
