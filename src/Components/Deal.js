import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const DealPage = () => {
  const deals = [
    { id: 1, title: "50% Off on Festive Outfits", description: "Get 50% off on selected festive outfits. Limited time offer!", image: "/Images/pets.jpeg" },
    { id: 2, title: "Buy 1 Get 1 Free on Shoes", description: "Buy one pair of shoes and get another one free. Don't miss this deal!", image: "/Images/kids.jpeg" },
    { id: 3, title: "50% Off on Festive Outfits", description: "Get 50% off on selected festive outfits. Limited time offer!", image: "/Images/pets.jpeg" },
    { id: 4, title: "Buy 1 Get 1 Free on Shoes", description: "Buy one pair of shoes and get another one free. Don't miss this deal!", image: "/Images/men.jpeg" },
    { id: 5, title: "20% Off on Electronics", description: "Save 20% on all electronic gadgets. Grab the latest tech now!", image: "/Images/women.jpeg" }
  ];

  return (
    <div>
      <Nav/>

<div className="deal-page-container">
      <h1 className="page-title">Exclusive Deals</h1>
      <div className="deals-list">
        {deals.map((deal) => (
          <div className="deal-card" key={deal.id}>
            <img className="deal-image" src={deal.image} alt={deal.title} />
            <div className="deal-content">
              <h3 className="deal-title">{deal.title}</h3>
              <p className="deal-description">{deal.description}</p>
              <button className="deal-btn">Shop Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>


      <Footer/>
    </div>
  );
};

export default DealPage;
