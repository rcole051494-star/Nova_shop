import React, { useEffect } from 'react';

export default function Toast({ message, isVisible, onClose }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '32px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'var(--color-text)',
      color: 'var(--color-bg)',
      padding: '16px 32px',
      zIndex: 3000,
      fontFamily: 'var(--font-sans)',
      fontSize: '0.9rem',
      fontWeight: 500,
      letterSpacing: '0.5px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      animation: 'slideUp 0.3s ease-out',
      whiteSpace: 'nowrap'
    }}>
      {message}

      <style>{`
        @keyframes slideUp {
          from { transform: translate(-50%, 20px); opacity: 0; }
          to { transform: translate(-50%, 0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
