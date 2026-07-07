import React from 'react';

const articles = [
  { id: 1, title: 'The Art of Layering', category: 'Style Guide', date: 'October 12, 2026', image: 'https://images.unsplash.com/photo-1434389678059-ff0ab5433062?q=80&w=1000&auto=format&fit=crop' },
  { id: 2, title: 'Sustainable Practices in Modern Fashion', category: 'Behind the Scenes', date: 'September 28, 2026', image: 'https://images.unsplash.com/photo-1605289982774-9a6fef564df8?q=80&w=1000&auto=format&fit=crop' },
  { id: 3, title: 'Interview with our Head Designer', category: 'Interviews', date: 'September 15, 2026', image: 'https://images.unsplash.com/photo-1550614000-4b95f2cb9a2f?q=80&w=1000&auto=format&fit=crop' },
];

export default function Journal() {
  return (
    <div className="animate-fade-in stagger-1" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="container">
        <h1 style={{ fontSize: '4rem', marginBottom: '64px', textAlign: 'center' }}>The Journal</h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', marginBottom: '64px' }}>
          {articles.map((article, index) => (
            <div key={article.id} className={`product-card animate-fade-in stagger-${index + 1}`}>
              <div style={{ height: '300px', overflow: 'hidden', marginBottom: '16px' }}>
                <img src={article.image} alt={article.title} className="product-image" />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                <span className="text-muted">{article.category}</span>
                <span className="text-muted">{article.date}</span>
              </div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '16px' }}>{article.title}</h2>
              <a href="#" style={{ borderBottom: '1px solid var(--color-text)', paddingBottom: '2px', fontWeight: 500, fontSize: '0.9rem' }}>Read Article</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
