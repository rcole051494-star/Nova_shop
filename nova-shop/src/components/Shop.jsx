import React from 'react';
import ProductGrid from './ProductGrid';

const allProducts = [
  { id: 1, title: 'Structured Wool Coat', price: 450, image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=1000&auto=format&fit=crop' },
  { id: 2, title: 'Silk Slip Dress', price: 280, image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1000&auto=format&fit=crop' },
  { id: 3, title: 'Cashmere Turtleneck', price: 320, image: 'https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?q=80&w=1000&auto=format&fit=crop' },
  { id: 4, title: 'Pleated Wide Trousers', price: 210, image: 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=1000&auto=format&fit=crop' },
  { id: 5, title: 'Oversized Blazer', price: 380, image: 'https://images.unsplash.com/photo-1591369822096-11440026e6de?q=80&w=1000&auto=format&fit=crop' },
  { id: 6, title: 'Leather Tote Bag', price: 550, image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=1000&auto=format&fit=crop' },
  { id: 7, title: 'Merino Wool Scarf', price: 120, image: 'https://images.unsplash.com/photo-1606115915156-324391e6b82c?q=80&w=1000&auto=format&fit=crop' },
  { id: 8, title: 'Cotton Poplin Shirt', price: 180, image: 'https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?q=80&w=1000&auto=format&fit=crop' },
];

export default function Shop({ onProductClick }) {
  return (
    <div className="animate-fade-in stagger-1" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="container">
        <h1 style={{ fontSize: '4rem', marginBottom: '24px', textAlign: 'center' }}>All Products</h1>
        <p className="text-muted text-center" style={{ marginBottom: '64px' }}>Explore our full collection of timeless pieces.</p>
        
        <div style={{ display: 'flex', gap: '24px', marginBottom: '48px', borderBottom: '1px solid var(--color-border)', paddingBottom: '16px' }}>
          <button style={{ background: 'none', border: 'none', fontWeight: 600, cursor: 'pointer' }}>All</button>
          <button className="text-muted" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>Outerwear</button>
          <button className="text-muted" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>Dresses</button>
          <button className="text-muted" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>Accessories</button>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
          gap: '40px',
          marginBottom: '64px'
        }}>
          {allProducts.map((product, index) => (
            <div key={product.id} className={`product-card animate-fade-in stagger-${(index % 4) + 1}`}>
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
      </div>
    </div>
  );
}
