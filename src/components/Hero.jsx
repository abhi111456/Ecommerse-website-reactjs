import React from 'react';
import './Hero.css'; // Import the CSS file
import speakerBackground from '../assets/behar-zenuni-U1-pZAXmRmM-unsplash.jpg'; // Import the image

const Hero = () => {
  return (
  
    <section className="speaker">
      <div className="container speaker_container" style={{ backgroundImage: `url(${speakerBackground})` }}>
        <div className="speaker_content">
          <h1 className="speaker_title">ZX9 SPEAKER</h1>
          <p className="speaker_text">
            Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound
          </p>
          <a href="#" className="speaker_btn">SEE PRODUCTS</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
