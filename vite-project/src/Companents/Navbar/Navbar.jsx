import React, { useState } from 'react';
import './Navbar.css';
import frm from '../img/Frame64.png';

const Navbar = () => {
  // Qaysi sahifa faolligini saqlash uchun holat (state)
  const [activePage, setActivePage] = useState('menu');

  // Sahifani o'zgartirish funksiyasi
  const handlePageChange = (pageName, e) => {
    e.preventDefault(); // Sahifa qayta yuklanishining oldini oladi
    setActivePage(pageName);
  };

  return (
    <>
      {/* Kichik harf bilan header yozildi */}
      <header>
        <div className="container">
          <div className="navbar">
            {/* Logotip bosilganda bosh sahifaga (menu) qaytadi */}
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

      {/* SAHIFALAR KONTENTI: Qaysi biriga bosilsa, faqat o'sha ko'rinadi */}
      <main className="page-content">
        <div className="container">
          
          {activePage === 'menu' && (
            <div className="page-animation">
              <h1>Bizning Menyu</h1>
              <p>Bu yerda shirin va mazali turk taomlari ro'yxati chiqadi.</p>
            </div>
          )}

          {activePage === 'news' && (
            <div className="page-animation">
              <h1>Yangiliklar va Chegirmalar</h1>
              <p>Restoranimizdagi eng so'nggi aksiyalar va yangiliklar.</p>
            </div>
          )}

          {activePage === 'about' && (
            <div className="page-animation">
              <h1>Biz haqimizda</h1>
              <p>Eaturkish restorani tarixi, maqsadlari va an'analari.</p>
            </div>
          )}

          {activePage === 'contact' && (
            <div className="page-animation">
              <h1>Biz bilan bog'lanish</h1>
              <p>Telefon: +998 71 123-45-67 | Manzil: Toshkent shahri</p>
            </div>
          )}

          {activePage === 'login' && (
            <div className="page-animation">
              <h1>Tizimga kirish sahifasi</h1>
              <p>Profilingizga kiring va buyurtmalarni boshqaring.</p>
            </div>
          )}

        </div>
      </main>
    </>
  );
};

export default Navbar;