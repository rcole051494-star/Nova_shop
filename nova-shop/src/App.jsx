import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import CartDrawer from './components/CartDrawer';
import Shop from './components/Shop';
import Collections from './components/Collections';
import Journal from './components/Journal';
import ProductPage from './components/ProductPage';
import SearchOverlay from './components/SearchOverlay';
import Toast from './components/Toast';
import MobileMenu from './components/MobileMenu';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);

  const showToast = (message) => {
    setToastMessage(message);
    setIsToastVisible(true);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setCurrentPage('product');
  };

  const handleAddToCart = (product) => {
    const size = product.size || 'M';
    
    // Check if item with same id and size exists
    const existingIndex = cartItems.findIndex(item => item.id === product.id && item.size === size);
    
    if (existingIndex >= 0) {
      const newItems = [...cartItems];
      newItems[existingIndex].quantity += 1;
      setCartItems(newItems);
    } else {
      setCartItems([...cartItems, { ...product, size, quantity: 1 }]);
    }
    
    showToast(`${product.title} added to your bag.`);
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (indexToRemove) => {
    setCartItems(cartItems.filter((_, index) => index !== indexToRemove));
  };

  const handleUpdateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) {
      handleRemoveFromCart(index);
      return;
    }
    const newItems = [...cartItems];
    newItems[index].quantity = newQuantity;
    setCartItems(newItems);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onExplore={() => setCurrentPage('shop')} />
            <ProductGrid onProductClick={handleProductClick} />
            <section style={{ background: 'var(--color-accent)', padding: 'var(--spacing-xxl) 0' }}>
              <div className="container text-center" style={{ maxWidth: '800px' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Crafted with Intention</h2>
                <p className="text-muted" style={{ fontSize: '1.2rem', marginBottom: '48px' }}>
                  Every piece in our collection is thoughtfully designed to transcend seasons. We believe in buying less, but buying better.
                </p>
                <button className="btn">Our Philosophy</button>
              </div>
            </section>
          </>
        );
      case 'shop':
        return <Shop onProductClick={handleProductClick} />;
      case 'collections':
        return <Collections />;
      case 'journal':
        return <Journal />;
      case 'product':
        return <ProductPage product={selectedProduct} onAddToCart={handleAddToCart} onBack={() => setCurrentPage('home')} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar 
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} 
        onOpenCart={() => setIsCartOpen(true)} 
        setCurrentPage={setCurrentPage}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenMenu={() => setIsMenuOpen(true)}
      />
      
      <main>
        {renderPage()}
      </main>

      {/* Footer */}
      <footer style={{ padding: 'var(--spacing-xl) 0', borderTop: '1px solid var(--color-border)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
          <div className="logo" style={{ fontSize: '1.5rem', cursor: 'pointer' }} onClick={() => setCurrentPage('home')}>NOVA</div>
          <div style={{ display: 'flex', gap: '24px', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
            <a href="#">Pinterest</a>
          </div>
        </div>
      </footer>

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems}
        onRemove={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
        onCheckout={() => {
          setIsCartOpen(false);
          setCartItems([]);
          showToast("Order placed successfully. Thank you!");
        }}
      />

      <SearchOverlay 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        onProductClick={handleProductClick} 
      />

      <MobileMenu 
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={setCurrentPage}
      />

      <Toast 
        message={toastMessage} 
        isVisible={isToastVisible} 
        onClose={() => setIsToastVisible(false)} 
      />
    </>
  );
}

export default App;
