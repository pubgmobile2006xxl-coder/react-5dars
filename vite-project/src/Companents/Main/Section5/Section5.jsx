import React from 'react'
import './Section5.css' // O'ZGARISH: .css fayldan .scss faylga o'zgartirildi

// Rasmni 'kom' nomi bilan import qildik
import kom from '../../img/komr.png' 

const Section5 = () => {
  // Figma maketidagi 3 ta yangilik ma'lumotlari massivi
  const newsItems = [
    {
      id: 1,
      image: kom, // O'ZGARISH: Tepada nima deb import qilingan bo'lsa, aynan o'sha nom ('kom') bo'ldi
      title: "Tips For Prepping And Caring For Your Grill",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.",
      date: "16 Apr 2021"
    },
    {
      id: 2,
      image: kom, // O'ZGARISH: Bu yer ham 'kom' o'zgaruvchisiga o'zgartirildi
      title: "Tips For Prepping And Caring For Your Grill",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.",
      date: "16 Apr 2021"
    },
    {
      id: 3,
      image: kom, // O'ZGARISH: Bu yer ham 'kom' o'zgaruvchisiga o'zgartirildi
      title: "Tips For Prepping And Caring For Your Grill",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.",
      date: "16 Apr 2021"
    }
  ];

  return (
    <section className="news-section">
      <div className="container">
        
        {/* Tepadagi sarlavhalar bloki */}
        <div className="news-header">
          <span className="subtitle">News</span>
          <div className="spoon-line"></div>
          <h2 className="main-title">Gericht Updates</h2>
        </div>

        {/* 3 ta ustunli Yangiliklar Gridi */}
        <div className="news-grid">
          {newsItems.map((item) => (
            <div className="news-card" key={item.id}>
              <div className="card-img-wrapper">
                <img src={item.image} alt={item.title} className="card-img" />
              </div>
              <div className="card-body">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.desc}</p>
                
                {/* Pastki havola va sana qismi */}
                <div className="card-footer">
                  <a href="#" className="read-more-btn">Read More</a>
                  <span className="news-date">{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Eng pastdagi barcha yangiliklarni ko'rish tugmasi */}
        <div className="view-more-container">
          <button className="view-more-btn">View More</button>
        </div>

      </div>
    </section>
  )
}

export default Section5