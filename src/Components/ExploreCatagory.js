import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';

export default function ExploreCatagory() {
  const { catagory } = useParams();
  const [catagories, setCatagories] = useState({});

  useEffect(() => {
    if (catagory === 'men') setCatagories(mencategories);
    else if (catagory === 'women') setCatagories(womenCategories);
    else if (catagory === 'kids') setCatagories(kidsCategories);
    else if (catagory === 'pets') setCatagories(petCategories);
  }, [catagory]);

  const mencategories = {
    "Clothing": [
      "T-Shirts", "Shirts", "Polo Shirts", "Sweatshirts & Hoodies", "Jackets & Coats",
      "Suits & Blazers", "Sweaters & Cardigans", "Jeans", "Trousers & Chinos",
      "Joggers & Track Pants", "Shorts", "Ethnic Wear", "Innerwear & Loungewear", "Thermals"
    ],
    "Footwear": [
      "Sneakers", "Casual Shoes", "Formal Shoes", "Boots", "Sandals & Floaters",
      "Sports Shoes", "Loafers", "Slippers & Flip-Flops", "Ethnic Footwear", "Socks"
    ],
    "Accessories": [
      "Watches", "Belts", "Wallets", "Ties & Pocket Squares", "Sunglasses",
      "Caps & Hats", "Bags & Backpacks", "Cufflinks & Brooches", "Scarves & Mufflers", "Gloves"
    ],
    "Grooming": [
      "Fragrances", "Beard Care", "Hair Care", "Skin Care", "Bath & Body"
    ],
    "Sports & Activewear": [
      "Gym Wear", "Running Gear", "Tracksuits", "Compression Wear", "Sports Shoes", "Sports Accessories"
    ],
    "Occasion Wear": [
      "Festive & Wedding", "Party Wear", "Work/Formal", "Casual/Everyday", "Vacation/Resort Wear", "Date Night Looks"
    ],
    "New & Trending": [
      "New Arrivals", "Best Sellers", "Influencer Picks", "Celebrity Styles", "Limited Edition", "Sustainable Fashion"
    ],
    "Premium Brands": [
      "Designer Labels", "Luxury Watches", "High-end Footwear", "Exclusive Collaborations"
    ]
  };

  const womenCategories = {
    "Clothing": [
      "Tops & T-Shirts", "Shirts & Blouses", "Kurtas & Kurtis", "Dresses",
      "Ethnic Sets", "Sarees", "Gowns", "Jeans", "Trousers & Palazzos",
      "Leggings & Jeggings", "Skirts & Shorts", "Jumpsuits & Dungarees",
      "Shrugs & Capes", "Co-ords & Twin Sets", "Sweaters & Cardigans",
      "Jackets & Coats", "Hoodies & Sweatshirts", "Nightwear & Loungewear",
      "Innerwear & Lingerie", "Maternity Wear", "Thermals"
    ],
    "Footwear": [
      "Flats", "Heels", "Sneakers", "Ballerinas", "Loafers", "Boots",
      "Sandals", "Ethnic Footwear", "Slippers & Flip-Flops", "Sports Shoes", "Socks"
    ],
    "Bags & Accessories": [
      "Handbags", "Sling Bags", "Clutches & Wallets", "Backpacks", "Tote Bags",
      "Jewellery", "Sunglasses", "Belts", "Scarves & Stoles", "Watches",
      "Hair Accessories", "Caps & Hats", "Umbrellas", "Brooches"
    ],
    "Beauty & Grooming": [
      "Makeup", "Skincare", "Hair Care", "Fragrances", "Bath & Body",
      "Intimate Care", "Beauty Tools"
    ],
    "Activewear & Sportswear": [
      "Sports Bras", "Tights & Leggings", "Joggers & Shorts", "Tank Tops & Crop Tops",
      "Tracksuits", "Yoga Wear", "Gym Shoes", "Sports Accessories"
    ],
    "Occasion Wear": [
      "Festive & Traditional", "Wedding & Bridal", "Party Wear", "Office/Formal Wear",
      "Casual/Chic", "Travel/Resort Wear", "Date Night Looks"
    ],
    "New & Trending": [
      "New Arrivals", "Influencer Picks", "Celebrity Looks", "Trending Now",
      "Limited Edition", "Sustainable Fashion"
    ],
    "Luxury & Premium": [
      "Designer Wear", "Luxury Handbags", "Premium Footwear", "Fine Jewellery",
      "Branded Fragrances"
    ]
  };


  const kidsCategories = {
    "Clothing": [
      "T-Shirts & Tops", "Shirts", "Dresses & Frocks", "Jeans & Trousers", "Shorts & Skirts",
      "Dungarees & Jumpsuits", "Sweaters & Sweatshirts", "Jackets & Coats",
      "Ethnic Wear (Kurta Sets, Lehengas)", "Nightwear & Loungewear", "Onesies & Rompers",
      "School Uniforms", "Innerwear & Thermals", "Sets & Combos", "Mittens & Socks"
    ],
    "Footwear": [
      "Casual Shoes", "Sandals & Floaters", "Sports Shoes", "Boots", "School Shoes",
      "Slippers & Flip-Flops", "Socks"
    ],
    "Toys & Games": [
      "Educational Toys", "Soft Toys", "Action Figures & Dolls", "Board Games", "Building Blocks",
      "Remote Control Toys", "Musical Toys", "Puzzles", "Outdoor Play", "STEM Toys"
    ],
    "Accessories": [
      "Caps & Hats", "Sunglasses", "Backpacks & School Bags", "Hair Accessories",
      "Watches", "Belts", "Water Bottles", "Lunch Boxes", "Gloves & Scarves"
    ],
    "Infant Essentials": [
      "Bodysuits", "Swaddles & Blankets", "Diapering", "Feeding Bottles", "Baby Wipes",
      "Baby Towels & Bibs", "Pacifiers & Teethers", "Baby Grooming", "Baby Carriers",
      "Changing Mats"
    ],
    "Grooming & Care": [
      "Skincare", "Shampoo & Body Wash", "Lotions & Creams", "Fragrances for Kids",
      "Toothpaste & Brushes", "Health & Hygiene Kits"
    ],
    "School Essentials": [
      "School Bags", "Pencil Boxes", "Notebooks", "Stationery Kits", "Art & Craft Supplies",
      "Lunch Boxes", "Water Bottles"
    ],
    "New & Trending": [
      "Cartoon-Themed Apparel", "Character Merchandise", "Seasonal Picks", "Mini Me (Matching with Parents)",
      "Festive Wear", "Trending Toys"
    ]
  };

  const petCategories = {
    "Pet Types": [
      "Dogs", "Cats", "Birds", "Rabbits", "Hamsters", "Fish & Aquarium", "Turtles & Exotic Pets"
    ],
    "Food": [
      "Dry Food", "Wet Food", "Puppy & Kitten Food", "Grain-Free Food", "Treats & Chews",
      "Special Diet Food", "Raw Food", "Bird Seeds & Pellets", "Aquarium Feed"
    ],
    "Toys": [
      "Chew Toys", "Squeaky Toys", "Interactive Toys", "Balls & Fetch Toys",
      "Catnip Toys", "Bird Toys", "Hanging Toys", "Aquarium Decor Toys"
    ],
    "Grooming & Hygiene": [
      "Shampoo & Conditioners", "Brushes & Combs", "Deodorizers", "Wipes & Towels",
      "Nail Clippers", "Dental Care", "Tick & Flea Treatment", "Bath Accessories"
    ],
    "Beds & Furniture": [
      "Pet Beds", "Cushions & Mats", "Cat Trees & Scratching Posts",
      "Kennels & Houses", "Crates & Carriers", "Aquarium Plants & Rocks"
    ],
    "Clothing & Accessories": [
      "Pet Clothes", "Raincoats", "Boots & Socks", "Harnesses", "Collars & Leashes",
      "Bandanas & Bows", "Pet ID Tags"
    ],
    "Health & Wellness": [
      "Supplements", "Vitamins", "Medicines", "First Aid", "Eye & Ear Care",
      "Joint & Bone Health", "Skin & Coat Care"
    ],
    "Training & Behavior": [
      "Training Pads", "Clickers & Whistles", "Training Treats", "Behavioral Sprays",
      "Repellents", "Training Collars"
    ],
    "Bowls & Feeders": [
      "Food Bowls", "Water Dispensers", "Slow Feeders", "Automatic Feeders", "Bird Feeders"
    ],
    "Travel Essentials": [
      "Travel Bags", "Carriers", "Strollers", "Seat Covers", "Travel Water Bottles"
    ],
    "New & Trending": [
      "Custom Pet Products", "Organic Food", "Smart Pet Gadgets", "Festive Wear",
      "Personalized Accessories", "Pet Birthday Kits"
    ]
  };
  

  return (
    <div>
      <Nav />
      <div id='ExpCata_path'>
        <Link to='/'>Home</Link><i className='fas fa-angle-right'></i>
        <Link to='/Explore'>Explore</Link><i className='fas fa-angle-right'></i>
        <Link to={`/Explore/${catagory}`}>{catagory}</Link><i className='fas fa-angle-right'></i>
      </div>

      <div className="mens-page">
        <h1 className="title">{catagory.charAt(0).toUpperCase() + catagory.slice(1)}'s Categories</h1>
        <div className="category-container">
          {Object.entries(catagories).map(([mainCategory, subcategories]) => (
            <div className="category-card" key={mainCategory}>
              <h2 className="category-title">{mainCategory}</h2>
              <ul className="subcategory-list">
                {subcategories.map((item) => (
                  <li key={item} className="subcategory-item">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
