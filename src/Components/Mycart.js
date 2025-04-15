import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

export default function Mycart() {
  return (
    <div>
      <Nav />
      <div className="mycart-wrapper">
        <h1 className="page-heading">YOUR CART</h1>

        <div className="cart-layout">
          <div className="cart-left">
            {/* Item 1 */}
            <div className="cart-card">
              <img src="/Images/men.jpeg" className="cart-img" />
              <div className="cart-info">
                <h3>Oversized Hoodie</h3>
                <p>₹999</p>
                <div className="qty-box">
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
              </div>
              <button className="remove-btn">×</button>
            </div>

            {/* Item 2 */}
            <div className="cart-card">
              <img src="/Images/pets.jpeg" className="cart-img" />
              <div className="cart-info">
                <h3>Pet Jacket</h3>
                <p>₹1299</p>
                <div className="qty-box">
                  <button>-</button>
                  <span>2</span>
                  <button>+</button>
                </div>
              </div>
              <button className="remove-btn">×</button>
            </div>
          </div>

          <div className="cart-right">
            <h2>Order Summary</h2>
            <div className="summary-item"><span>Subtotal</span><span>₹3597</span></div>
            <div className="summary-item"><span>Tax (5%)</span><span>₹179.85</span></div>
            <div className="summary-item"><span>Delivery</span><span>₹50</span></div>
            <div className="summary-total"><span>Total</span><span>₹3826.85</span></div>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
