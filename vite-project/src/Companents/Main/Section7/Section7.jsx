import React from 'react';
import './Section7.css';

// Har bir rasm uchun bitta unikal import nomi
import maks1 from '../../img/Mask(1).png';
import maks2 from '../../img/Mask.png';
import maks3 from '../../img/Mask(1).png';
import maks4 from '../../img/5.png';
const Section7 = () => {
  // Endi hamma o'zgaruvchilar mavjud
  const images = [maks1, maks2, maks3, maks4];

  return (
    <section className="gallery-section">
      <div className="container">
        <div className="gallery-wrapper">
          <div className="gallery-info">
            <p className="subtitle">Instagram</p>
            <h2>Photo Gallery</h2>
            <p className="desc">Lorem ipsum dolor sit amet...</p>
            <button className="view-more-btn">View More</button>
          </div>

          <div className="gallery-grid">
            {images.map((img, index) => (
              <div key={index} className="gallery-item">
                <img src={img} alt={`Food ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;