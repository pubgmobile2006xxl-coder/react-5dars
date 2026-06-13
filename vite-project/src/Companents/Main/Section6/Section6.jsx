import React, { useState } from 'react';
import './Section6.css';

const Section6 = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "pzSv1uidzIw";

  return (
    <section className="video-section">
      <div className="video-container">
        {/* Iframe har doim orqada */}
        <iframe
          className="youtube-iframe"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=${isPlaying ? 1 : 0}&mute=0&controls=1&rel=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        {/* Qopqoq qatlam */}
        <div className={`video-cover-layer ${isPlaying ? 'fade-out' : ''}`}>
          <div 
            className="video-poster" 
            style={{ backgroundImage: `url(https://img.youtube.com/vi/${videoId}/maxresdefault.jpg)` }}
          >
            <div className="dark-layer"></div>
          </div>

          <div className="video-stamp">
            <svg viewBox="0 0 100 100" width="110" height="110">
              <path id="circlePath6" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
              <text fill="#ffffff" fontSize="8.5" fontWeight="600" letterSpacing="1.5">
                <textPath href="#circlePath6">BITE DELIGHT IN EVERY BITE • </textPath>
              </text>
            </svg>
            <div className="stamp-icon">🍴</div>
          </div>

          <div className="play-btn-wrapper">
            <button className="play-trigger" onClick={() => setIsPlaying(true)}>
              <div className="play-icon-shape"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;