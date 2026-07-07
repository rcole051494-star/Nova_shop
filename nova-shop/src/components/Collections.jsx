import React from 'react';

export default function Collections() {
  return (
    <div className="animate-fade-in stagger-1" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="container">
        <h1 style={{ fontSize: '4rem', marginBottom: '64px', textAlign: 'center' }}>Collections</h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px', marginBottom: '64px' }}>
          
          <div style={{ position: 'relative', height: '600px', overflow: 'hidden', cursor: 'pointer' }} className="product-card">
            <img 
              src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop" 
              alt="Autumn Winter 2026" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              className="product-image"
            />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.2)' }} />
            <div style={{ position: 'absolute', bottom: '48px', left: '48px', color: '#fff' }}>
              <h2 style={{ fontSize: '3rem', marginBottom: '16px' }}>Autumn / Winter '26</h2>
              <button style={{ background: 'none', border: 'none', color: '#fff', textTransform: 'uppercase', letterSpacing: '2px', borderBottom: '1px solid #fff', cursor: 'pointer' }}>Explore</button>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            <div style={{ position: 'relative', height: '500px', overflow: 'hidden', cursor: 'pointer' }} className="product-card">
              <img 
                src="https://images.unsplash.com/photo-1495385794356-15371f348c31?q=80&w=1000&auto=format&fit=crop" 
                alt="Essentials" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                className="product-image"
              />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.2)' }} />
              <div style={{ position: 'absolute', bottom: '32px', left: '32px', color: '#fff' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>The Essentials</h2>
              </div>
            </div>
            
            <div style={{ position: 'relative', height: '500px', overflow: 'hidden', cursor: 'pointer' }} className="product-card">
              <img 
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop" 
                alt="Evening Wear" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                className="product-image"
              />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.2)' }} />
              <div style={{ position: 'absolute', bottom: '32px', left: '32px', color: '#fff' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>Evening Wear</h2>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
