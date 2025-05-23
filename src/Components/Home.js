import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer';

export default function Home() {

  const menClothes = [
    {num: 1, name: 'Casual Shirt', image: '/Images/men.jpeg', link: '/product/casual-shirt' },
    {num: 2,name: 'Denim Jacket', image: '/Images/men.jpeg', link: '/product/denim-jacket' },
    {num: 3,name: 'Slim Fit Jeans', image: '/Images/men.jpeg', link: '/product/slim-fit-jeans' },
    {num: 4,name: 'Graphic Tee', image: '/Images/men.jpeg', link: '/product/graphic-tee' },
    {num: 5,name: 'Cargo Pants', image: '/Images/men.jpeg', link: '/product/cargo-pants' },
    {num: 6,name: 'Leather Jacket', image: '/Images/men.jpeg', link: '/product/leather-jacket' },
  ];
  const womenClothes = [
    {num: 1, name: 'Casual Shirt', image: '/Images/women.jpeg', link: '/product/casual-shirt' },
    {num: 2,name: 'Denim Jacket', image: '/Images/women.jpeg', link: '/product/denim-jacket' },
    {num: 3,name: 'Slim Fit Jeans', image: '/Images/women.jpeg', link: '/product/slim-fit-jeans' },
    {num: 4,name: 'Graphic Tee', image: '/Images/women.jpeg', link: '/product/graphic-tee' },
    {num: 5,name: 'Cargo Pants', image: '/Images/women.jpeg', link: '/product/cargo-pants' },
    {num: 6,name: 'Leather Jacket', image: '/Images/women.jpeg', link: '/product/leather-jacket' },
  ];
  const kidsClothes = [
    {num: 1, name: 'Casual Shirt', image: '/Images/kids.jpeg', link: '/product/casual-shirt' },
    {num: 2,name: 'Denim Jacket', image: '/Images/kids.jpeg', link: '/product/denim-jacket' },
    {num: 3,name: 'Slim Fit Jeans', image: '/Images/kids.jpeg', link: '/product/slim-fit-jeans' },
    {num: 4,name: 'Graphic Tee', image: '/Images/kids.jpeg', link: '/product/graphic-tee' },
    {num: 5,name: 'Cargo Pants', image: '/Images/kids.jpeg', link: '/product/cargo-pants' },
    {num: 6,name: 'Leather Jacket', image: '/Images/kids.jpeg', link: '/product/leather-jacket' },
  ];
  const petsClothes = [
    {num: 1, name: 'Casual Shirt', image: '/Images/pets.jpeg', link: '/product/casual-shirt' },
    {num: 2,name: 'Denim Jacket', image: '/Images/pets.jpeg', link: '/product/denim-jacket' },
    {num: 3,name: 'Slim Fit Jeans', image: '/Images/pets.jpeg', link: '/product/slim-fit-jeans' },
    {num: 4,name: 'Graphic Tee', image: '/Images/pets.jpeg', link: '/product/graphic-tee' },
    {num: 5,name: 'Cargo Pants', image: '/Images/pets.jpeg', link: '/product/cargo-pants' },
    {num: 6,name: 'Leather Jacket', image: '/Images/pets.jpeg', link: '/product/leather-jacket' },
  ];

  return (
    <div id='Home'>
        <Nav/>
        <section className="categories">
            <h2 className="section-title">Shop by Category</h2>
            <div className="category-cards">
                <div className="card">
                     <img src="/Images/men.jpeg" alt="Men's Fashion" />
                     <div className="card-content">
                       <h3>Men</h3>
                       <Link to="/Explore/men">Explore <i className='fas fa-angle-right'></i></Link>
                     </div>
                </div>

                <div className="card" style={{animationDelay:'0.7s'}}>
                  <img src="/Images/women.jpeg" alt="Women's Fashion" />
                  <div className="card-content">
                    <h3>Women</h3>
                    <Link to="/Explore/women">Explore <i className='fas fa-angle-right'></i></Link>
                  </div>
                </div>

                <div className="card" style={{animationDelay:'1.4s'}}>
                  <img src="/Images/kids.jpeg" alt="Kids' Fashion" />
                  <div className="card-content">
                    <h3>Children</h3>
                    <Link to="/Explore/kids">Explore  <i className='fas fa-angle-right'></i></Link>
                  </div>
                </div>

                <div className="card" style={{animationDelay:'2.1s'}}>
                  <img src="/Images/pets.jpeg" alt="pets' Fashion" />
                  <div className="card-content">
                    <h3>Pets</h3>
                    <Link to="/Explore/pets">Explore  <i className='fas fa-angle-right'></i></Link>
                  </div>
                </div>

      </div>
    </section>



    <section className="trend-scroll">
      <h2 className="trend-scroll__title">Men's Trending Styles</h2>
      <div className="trend-scroll__track">
        <div className="trend-scroll__inner">
          {[...menClothes, ...menClothes].map((item, index) => (
            <a className="trend-scroll__card" rank={`#`+item.num} href={item.link} key={index}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>

    <section className="trend-scroll">
      <h2 className="trend-scroll__title">Women's Trending Styles</h2>
      <div className="trend-scroll__track">
        <div className="trend-scroll__inner">
          {[...womenClothes, ...womenClothes].map((item, index) => (
            <a className="trend-scroll__card" rank={`#`+item.num} href={item.link} key={index}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>

    <section className="trend-scroll">
      <h2 className="trend-scroll__title">Kid's Trending Styles</h2>
      <div className="trend-scroll__track">
        <div className="trend-scroll__inner">
          {[...kidsClothes, ...kidsClothes].map((item, index) => (
            <a className="trend-scroll__card" rank={`#`+item.num} href={item.link} key={index}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>

    <section className="trend-scroll">
      <h2 className="trend-scroll__title">Pets' Trending Styles</h2>
      <div className="trend-scroll__track">
        <div className="trend-scroll__inner">
          {[...petsClothes, ...petsClothes].map((item, index) => (
            <a className="trend-scroll__card" rank={`#`+item.num} href={item.link} key={index}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>




        




      <Footer/>
    </div>
  )
}
