import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import $ from 'jquery'; 
const About = () => {
  
  const [expanded, setExpanded] = useState(false);

  // Function to toggle the visibility of additional content
  const toggleContent = () => {
    $('.additional-content').slideToggle(); // Use jQuery to slide toggle the content
    setExpanded(!expanded); // Update the state
  };

  return (
    <section className='about' id='about'>
      <div className="container">
      <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
        <div className="banner">
          {/* Your existing content */}
          {/* "About Us" section */}
          <div className="top">
            <h1 className='heading'>About Us</h1>
            <p>Welcome to FiestaFlavorsCuisine.com, where every dish is a celebration of taste and tradition. Our journey began with a simple dream: to bring the vibrant spirit of Mexican and Italian feasts to every table.</p>
          </div>

          {/* Additional content with class 'additional-content' */}
          <div className="top additional-content" style={{ display: expanded ? 'block' : 'none' }}>
            {/* "Our Story" section */}
            <h1 className='heading'>Our Story</h1>
            <p>FiestaFlavorsCuisine.com was born from a passion for rich culinary cultures that span continents. Our founders, Maria and Giovanni, grew up in families where food was not just sustenance but a reason to gather, celebrate, and enjoy life. Maria Mexican heritage and Giovanni Italian roots are the cornerstones of our diverse menu, offering an eclectic mix of flavors that dance on your palate.</p>

            {/* "Our Values" section */}
            <h1 className='heading'>Our Values</h1>
            <p>Authenticity, Quality, Innovation, Community</p>

            {/* "Our Mission" section */}
            <h2 className='heading'>Our Mission</h2>
            <p>Our mission is to provide an online haven for food lovers who crave the zest of Mexican tacos and the comfort of Italian pasta. We aim to create a virtual dining experience that feels like a warm embrace from a loved one. At FiestaFlavorsCuisine.com, we believe that good food has the power to bring people together, no matter the distance.</p>
          </div>

          

          {/* Link to explore menu */}
          <Link to={"/"} onClick={toggleContent}>{expanded ? 'Show Less' : 'Show More'} <span>
            <HiOutlineArrowNarrowRight/>
          </span></Link>
        </div>
        
      </div>
    </section>
  );
}

export default About;
