import React from 'react'
import './Section4.css'

const Section4 = () => {
  // Figma maketidagi mijozlar fikrlari massivi
  const reviews = [
    {
      id: 1,
      name: "Maria",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing sit, auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisq...",
      date: "06/02/2022",
      time: "11:15",
      views: "222"
    },
    {
      id: 2,
      name: "Maria",
      text: "Я всегда был самым худым и щуплым ребенком среди своих сверстников. Я всегда мечтал стать как мой кумир и иметь интерес...",
      date: "06/02/2022",
      time: "11:15",
      views: "222"
    },
    {
      id: 3,
      name: "Maria",
      text: "Я всегда был самым худым и щуплым ребенком среди своих сверстников. Я всегда мечтал стать как мой кумир и иметь интерес...",
      date: "06/02/2022",
      time: "11:15",
      views: "222"
    }
  ];

  return (
    <section className="testimony-section">
      <div className="container">
        
        {/* Tepadagi kichik sarlavha va chiziqcha */}
        <div className="testimony-header">
          <span className="subtitle">Testimony</span>
          <div className="spoon-line"></div>
          <h2 className="main-title">Happy Customers</h2>
        </div>

        {/* 3 talik sharhlar kartochkalari */}
        <div className="reviews-grid">
          {reviews.map((review) => (
            <div className="review-card" key={review.id}>
              <h3 className="client-name">{review.name}</h3>
              <p className="client-text">{review.text}</p>
              
              {/* Kartochka ichidagi pastki kichik ma'lumotlar (Ikonkalar bilan) */}
              <div className="card-footer">
                <span className="footer-item">
                  📅 {review.date}
                </span>
                <span className="footer-item">
                  🕒 {review.time}
                </span>
                <span className="footer-item">
                  👁️ {review.views}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pastki qismdagi boshqaruv tugmalari */}
        <div className="testimony-arrows">
          <button className="arrow-btn prev">‹</button>
          <button className="arrow-btn next active">›</button>
        </div>

      </div>

      {/* Maket pastidagi o'sha tanish aylanma muhr effekti */}
      <div className="bite-delight-stamp">
        <svg viewBox="0 0 100 100" width="100" height="100">
          <path id="circlePath4" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
          <text fill="#a81d33" fontSize="8.5" fontWeight="600" letterSpacing="1.5">
            <textPath href="#circlePath4">BITE DELIGHT IN EVERY BITE • </textPath>
          </text>
        </svg>
        <div className="stamp-center-icon">🍴</div>
      </div>
    </section>
  )
}

export default Section4