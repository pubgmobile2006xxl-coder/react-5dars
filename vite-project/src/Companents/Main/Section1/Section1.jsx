import React from 'react'
import './Section1.css' // SCSS faylini ulash
import grp from '../../img/Group93.png' // Orqadagi aylanma chiziqlar foni
// import heroDish from '../../img/HeroDish.png' // Taom/shashlik rasmini ham shu yerga import qiling

const Section1 = () => {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-container">
          
          {/* Chap tomondagi matnlar qismi */}
          <div className="hero-text-content">
            <span className="subtitle">Chase The New Flavour</span>
            <h1 className="main-title">The Key To <br /> Fine Dining</h1>
            <p className="description">
              Sit tellus lobortis sed senectus vivamus molestie. 
              Condimentum volutpat morbi facilisis quam scelerisque 
              sapien. Et, penatibus aliquam amet tellus
            </p>
            <button className="explore-btn">Explore Menu</button>
          </div>

          {/* O'ng tomondagi rasm qismi (Aylanma chiziqlar foni bilan) */}
          <div className="hero-image-content">
            <div className="image-wrapper">
              {/* Figmadagi Group93.png chiziqlari orqa fonga qo'yildi */}
              <img src={grp} alt="lines background" className="bg-lines" />
              {/* Asosiy shashlik/taom rasmi */}
            </div>
          </div>

          {/* Pastki o'ng burchakdagi Scroll ko'rsatkichi */}
          <div className="scroll-indicator">
            <div className="line"></div>
            <span>SCROLL</span>
          </div>

        </div>
      </section>
    </>
  )
}

export default Section1