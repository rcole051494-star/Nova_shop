import React from 'react';
import { X, Trash2, Plus, Minus } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cartItems, onRemove, onUpdateQuantity, onCheckout }) {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <>
      <div 
        className={`drawer-overlay ${isOpen ? 'open' : ''}`} 
        onClick={onClose}
      />
      <div className={`drawer ${isOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.5rem' }}>Your Cart</h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <X size={24} />
          </button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto' }}>
          {cartItems.length === 0 ? (
            <p className="text-muted" style={{ textAlign: 'center', marginTop: '64px' }}>
              Your cart is currently empty.
            </p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {cartItems.map((item, index) => (
                <div key={`${item.id}-${item.size}-${index}`} style={{ display: 'flex', gap: '16px' }}>
                  <img src={item.image} alt={item.title} style={{ width: '80px', height: '100px', objectFit: 'cover' }} />
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h4 style={{ fontSize: '1rem', marginBottom: '4px', paddingRight: '8px' }}>{item.title}</h4>
                        <button 
                          onClick={() => onRemove(index)}
                          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)' }}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-muted" style={{ fontSize: '0.85rem', marginBottom: '8px' }}>Size: {item.size || 'M'}</p>
                    </div>
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--color-border)', width: 'fit-content' }}>
                        <button 
                          onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                          style={{ padding: '4px 8px', background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                          <Minus size={14} />
                        </button>
                        <span style={{ padding: '0 8px', fontSize: '0.9rem' }}>{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                          style={{ padding: '4px 8px', background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <p style={{ fontWeight: 500 }}>${item.price * item.quantity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '24px', marginTop: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', fontSize: '1.2rem', fontWeight: 500 }}>
              <span>Subtotal</span>
              <span>${total}</span>
            </div>
            <button className="btn btn-primary" style={{ width: '100%' }} onClick={onCheckout}>
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
