import React from 'react'
import './Section2.css'

// O'zingizda bor rasmlarni import qilib olgansiz (barchasi to'g'ri)
import shash from '../../img/klipartz.png'
import piz from '../../img/klipartz1(1).png'
import bur from '../../img/klipartz1(2).png'
import fri from '../../img/klipartz1(3).png'

const Section2 = () => {
  // Figma maketidagi 4 ta taom ma'lumotlari massivi
  const dishes = [
    {
      id: 1,
      image: shash, // O'ZGARISH: Qo'shtirnoqlar olib tashlandi!
      title: "Barbecue Shish kebab Shashlik Skewer",
      rating: 4, 
      price: "$12.00"
    },
    {
      id: 2,
      image: piz,   // O'ZGARISH: Qo'shtirnoqlar olib tashlandi!
      title: "Barbecue Shish kebab Shashlik Skewer",
      rating: 4,
      price: "$12.00"
    },
    {
      id: 3,
      image: bur,   // O'ZGARISH: Qo'shtirnoqlar olib tashlandi!
      title: "Barbecue Shish kebab Shashlik Skewer",
      rating: 4,
      price: "$12.00"
    },
    {
      id: 4,
      image: fri,   // O'ZGARISH: Qo'shtirnoqlar olib tashlandi!
      title: "Barbecue Shish kebab Shashlik Skewer",
      rating: 4,
      price: "$12.00"
    }
  ];

  return (
    <section className="popular-dishes-section">
      <div className="container">
        
        {/* Slayder sarlavhasi va o'ng tomondagi Figma tugmalari */}
        <div className="section-header">
          <h2 className="section-title">Popular Dishes</h2>
          <div className="slider-arrows">
            <button className="arrow-btn prev">‹</button>
            <button className="arrow-btn next">›</button>
          </div>
        </div>

        {/* Taomlar kartochkalari (Grid) */}
        <div className="dishes-grid">
          {dishes.map((dish) => (
            <div className="dish-card" key={dish.id}>
              <div className="dish-image-wrapper">
                <img src={dish.image} alt={dish.title} className="card-img" />
              </div>
              
              <div className="dish-card-info">
                <h3 className="card-title">{dish.title}</h3>
                
                {/* 5 talik yulduzcha tizimi */}
                <div className="rating-stars">
                  {[...Array(5)].map((_, index) => (
                    <span 
                      key={index} 
                      className={`star ${index < dish.rating ? 'filled' : 'empty'}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                
                <p className="card-price">{dish.price}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Maket pastidagi aylanma dumaloq matnli muhr (Bite Delight) */}
      <div className="bite-delight-stamp">
        <svg viewBox="0 0 100 100" width="100" height="100">
          <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
          <text fill="#a81d33" fontSize="8.5" fontWeight="600" letterSpacing="1.5">
            <textPath href="#circlePath">BITE DELIGHT IN EVERY BITE • </textPath>
          </text>
        </svg>
        <div className="stamp-center-icon">🍴</div>
      </div>

    </section>
  )
}

export default Section2