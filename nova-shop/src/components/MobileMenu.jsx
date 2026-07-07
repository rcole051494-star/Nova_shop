import React from 'react';
import { X } from 'lucide-react';

export default function MobileMenu({ isOpen, onClose, onNavigate }) {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: 'var(--color-bg)', zIndex: 3000,
      display: 'flex', flexDirection: 'column',
      padding: 'var(--spacing-lg)'
    }}>
      <button 
        onClick={onClose}
        style={{ alignSelf: 'flex-end', background: 'none', border: 'none', cursor: 'pointer', marginBottom: '64px' }}
      >
        <X size={32} strokeWidth={1} />
      </button>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', fontSize: '2rem', fontFamily: 'var(--font-serif)' }}>
        <button 
          onClick={() => { onNavigate('home'); onClose(); }}
          style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit' }}
        >
          Home
        </button>
        <button 
          onClick={() => { onNavigate('shop'); onClose(); }}
          style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit' }}
        >
          Shop
        </button>
        <button 
          onClick={() => { onNavigate('collections'); onClose(); }}
          style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit' }}
        >
          Collections
        </button>
        <button 
          onClick={() => { onNavigate('journal'); onClose(); }}
          style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit' }}
        >
          Journal
        </button>
      </div>
    </div>
  );
}
