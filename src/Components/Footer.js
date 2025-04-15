import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
    <div className="footer__top">
      <div className="footer__col">
        <h3>ShopEase</h3>
        <p>Your one-stop shop for all fashion needs. Trendy. Affordable. Reliable.</p>
      </div>

      <div className="footer__col">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/faq">FAQs</a></li>
        </ul>
      </div>

      <div className="footer__col">
        <h4>Customer Support</h4>
        <ul>
          <li><a href="/shipping">Shipping Info</a></li>
          <li><a href="/returns">Returns & Refunds</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/terms">Terms & Conditions</a></li>
        </ul>
      </div>

      <div className="footer__col">
        <h4>Join Our Newsletter</h4>
        <form className="footer__newsletter">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
        <div className="footer__socials">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </div>

    <div className="footer__bottom">
      <p>&copy; {new Date().getFullYear()} ShopEase. All rights reserved.</p>
    </div>
  </footer>
  )
}
