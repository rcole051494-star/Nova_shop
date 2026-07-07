import React from 'react';

const products = [
  { id: 1, title: 'Structured Wool Coat', price: 450, image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=1000&auto=format&fit=crop' },
  { id: 2, title: 'Silk Slip Dress', price: 280, image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1000&auto=format&fit=crop' },
  { id: 3, title: 'Cashmere Turtleneck', price: 320, image: 'https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?q=80&w=1000&auto=format&fit=crop' },
  { id: 4, title: 'Pleated Wide Trousers', price: 210, image: 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=1000&auto=format&fit=crop' },
];

export default function ProductGrid({ onProductClick }) {
  return (
    <section className="container" style={{ padding: 'var(--spacing-xxl) var(--spacing-lg)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--spacing-xl)' }}>
        <h2 style={{ fontSize: '3rem' }}>New Arrivals</h2>
        <a href="#" style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', fontWeight: 500, borderBottom: '1px solid var(--color-text)' }}>
          View All
        </a>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '40px' 
      }}>
        {products.map((product, index) => (
          <div key={product.id} className={`product-card animate-fade-in stagger-${index + 1}`}>
            <div className="product-image-container" onClick={() => onProductClick(product)} style={{ cursor: 'pointer' }}>
              <img src={product.image} alt={product.title} className="product-image" />
            </div>
            <div className="product-info">
              <div onClick={() => onProductClick(product)} style={{ cursor: 'pointer' }}>
                <h3 className="product-title">{product.title}</h3>
                <p className="product-price">${product.price}</p>
              </div>
              <button 
                onClick={() => onProductClick(product)}
                style={{ 
                  background: 'none', border: 'none', cursor: 'pointer', 
                  textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px',
                  borderBottom: '1px solid var(--color-text)'
                }}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
