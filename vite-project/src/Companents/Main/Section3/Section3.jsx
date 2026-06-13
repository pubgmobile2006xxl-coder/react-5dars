import React, { useState } from 'react'
import './Section3.css'

// O'zingizda bor rasmlarni mana bu yerda import qilib olasiz:
import shash from '../../img/klipartz.png'
import piz from '../../img/klipartz1(1).png'
import bur from '../../img/klipartz1(2).png'
import fri from '../../img/klipartz1(3).png'

const Section3 = () => {
  // Qaysi kategoriya tanlanganini bilish uchun state
  const [activeCategory, setActiveCategory] = useState('All');

  // Kategoriya tugmalari ro'yxati
  const categories = [
    'All', 'Shawarma', 'Turk Kebab', 'Hamburger Kebab', 
    'Doner Kebab', 'Shish Kebab', 'French Fries Pizza', 'Desserts'
  ];

  // 12 ta taom ma'lumotlari massivi (Figma bo'yicha)
  const menuItems = [
    { id: 1, image: shash, title: "Barbecue Shish kebab Shashlik Skewer", price: "$12.00", category: "Shish Kebab" },
    { id: 2, image: piz, title: "Barbecue Shish kebab Shashlik Skewer", price: "$12.00", category: "French Fries Pizza" },
    { id: 3, image: bur, title: "Barbecue Shish kebab Shashlik Skewer", price: "$12.00", category: "Hamburger Kebab" },
    { id: 4, image: fri, title: "Barbecue Shish kebab Shashlik Skewer", price: "$12.00", category: "French Fries Pizza" },
    { id: 5, image: piz, title: "Barbecue Shish kebab Shashlik Skewer", price: "$12.00", category: "French Fries Pizza" },
    { id: 6, image: shash, title: "Barbecue Shish kebab Shashlik Skewer", price: "$12.00", category: "Shish Kebab" },
    { id: 7, image: bur, title: "Barbecue Shish kebab Shashlik Skewer", price: "$12.00", category: "Hamburger Kebab" },
    { id: 8, image: bur, title: "Barbecue Shish kebab Shashlik Skewer", price: "$12.00", category: "Hamburger Kebab" },
    { id: 9, image: fri, title: "Barbecue Shish kebab Shashlik Skewer", price: "$12.00", category: "French Fries Pizza" },
    { id: 10, image: shash, title: "Barbecue Shish kebab Shashlik Skewer", price: "$12.00", category: "Shish Kebab" },
    { id: 11, image: piz, title: "Barbecue Shish kebab Shashlik Skewer", price: "$12.00", category: "French Fries Pizza" },
    { id: 12, image: fri, title: "Barbecue Shish kebab Shashlik Skewer", price: "$12.00", category: "French Fries Pizza" },
  ];

  // Tugma bosilganda filtrlash mantiqi
  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section className="regular-menu-section">
      <div className="container">
        
        {/* Katta qizil sarlavha */}
        <h2 className="menu-main-title">Our Regular Menu Pack</h2>

        {/* Filtr tugmalari qatori */}
        <div className="filter-buttons-container">
          {categories.map((cat, index) => (
            <button
              key={index}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 4 ta ustunli Katta Taomlar Gridi */}
        <div className="menu-grid">
          {filteredItems.map((item) => (
            <div className="menu-card" key={item.id}>
              <div className="menu-img-wrapper">
                <img src={item.image} alt={item.title} className="menu-card-img" />
              </div>
              <div className="menu-card-info">
                <h3 className="menu-card-title">{item.title}</h3>
                <p className="menu-card-price">{item.price}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Section3