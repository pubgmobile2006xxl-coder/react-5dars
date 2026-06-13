import React, { useState } from 'react';
import './Navbar.css';
import frm from '../img/Frame64.png';

const Navbar = () => {
  // Qaysi oyna (sahifa) faolligini saqlash uchun state
  const [activePage, setActivePage] = useState('menu');

  // Oynani o'zgartirish funksiyasi
  const handlePageChange = (pageName, e) => {
    e.preventDefault(); // Sahifa qayta yuklanishining oldini oladi
    setActivePage(pageName);
  };

  return (
    <>
      {/* 1. TEPA PANEL (NAVBAR) */}
      <header>
        <div className="container">
          <div className="navbar">
            
            {/* Logotip bosilganda Menu (bosh sahifa) oynasiga qaytadi */}
            <div className="logo" onClick={(e) => handlePageChange('menu', e)} style={{ cursor: 'pointer' }}>
              <img src={frm} alt="Eaturkish Logo" />
            </div>

            <ul>
              <li>
                <a 
                  href="#" 
                  className={activePage === 'menu' ? 'active' : ''} 
                  onClick={(e) => handlePageChange('menu', e)}
                >
                  Menu
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className={activePage === 'news' ? 'active' : ''} 
                  onClick={(e) => handlePageChange('news', e)}
                >
                  News
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className={activePage === 'about' ? 'active' : ''} 
                  onClick={(e) => handlePageChange('about', e)}
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className={activePage === 'contact' ? 'active' : ''} 
                  onClick={(e) => handlePageChange('contact', e)}
                >
                  Contact Us
                </a>
              </li>
            </ul>

            <button 
              className={activePage === 'login' ? 'active-btn' : ''} 
              onClick={(e) => handlePageChange('login', e)}
            >
              Log in
            </button>
          </div>
        </div>
      </header>

      {/* 2. OYNALAR ALMASHINADIGAN ASOSIY QISM */}
      <main className="page-content">
        
        {/* Menu oynasi faol bo'lsa, Section1 (shashlikli qism) ochiladi */}

        {/* News oynasi faol bo'lsa, Yangiliklar oynasi ochiladi */}
        {activePage === 'news' && (
          <div className="container">
            <div className="page-animation">
              <h1>Yangiliklar va Chegirmalar</h1>
              <p>Restoranimizdagi eng so'nggi aksiyalar va yangiliklar.</p>
            </div>
          </div>
        )}

        {/* About oynasi faol bo'lsa, Biz haqimizda oynasi ochiladi */}
        {activePage === 'about' && (
          <div className="container">
            <div className="page-animation">
              <h1>Biz haqimizda</h1>
              <p>Eaturkish restorani tarixi, maqsadlari va an'analari.</p>
            </div>
          </div>
        )}

        {/* Contact oynasi faol bo'lsa, Aloqa oynasi ochiladi */}
        {activePage === 'contact' && (
          <div className="container">
            <div className="page-animation">
              <h1>Biz bilan bog'lanish</h1>
              <p>Telefon: +998 71 123-45-67 | Manzil: Toshkent shahri</p>
            </div>
          </div>
        )}

        {/* Login oynasi faol bo'lsa, Kirish oynasi ochiladi */}
        {activePage === 'login' && (
          <div className="container">
            <div className="page-animation">
              <h1>Tizimga kirish sahifasi</h1>
              <p>Profilingizga kiring va buyurtmalarni boshqaring.</p>
            </div>
          </div>
        )}

      </main>
    </>
  );
};

export default Navbar;