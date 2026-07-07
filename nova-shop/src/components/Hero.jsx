import React from 'react';

export default function Hero({ onExplore }) {
  return (
    <section style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '80px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Image */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        zIndex: -1
      }}>
        <img 
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop" 
          alt="Fashion Model" 
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
        />
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.9) 100%)'
        }} />
      </div>

      <div className="container text-center animate-fade-in stagger-1" style={{ maxWidth: '800px' }}>
        <p style={{ 
          textTransform: 'uppercase', 
          letterSpacing: '4px', 
          marginBottom: '24px',
          fontWeight: 500,
          fontSize: '0.9rem'
        }}>
          Autumn / Winter 2026
        </p>
        <h1 style={{ 
          fontSize: 'clamp(3rem, 8vw, 6rem)', 
          marginBottom: '32px',
          lineHeight: 1.1
        }}>
          The Art of <br/> Minimalism
        </h1>
        <p className="text-muted" style={{ 
          fontSize: '1.2rem', 
          marginBottom: '48px',
          maxWidth: '500px',
          margin: '0 auto 48px'
        }}>
          Discover our new collection of carefully curated, sustainable pieces designed for the modern wardrobe.
        </p>
        <button className="btn btn-primary" onClick={onExplore}>
          Explore Collection
        </button>
      </div>
    </section>
  );
}
