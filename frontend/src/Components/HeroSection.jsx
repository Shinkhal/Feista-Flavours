import { useState, useEffect } from 'react';
import Navbar from './Navbar';


const images = [
    "/Red Modern Texture Background Online Delivery - Banner (4).jpg",
    "/Red Modern Texture Background Online Delivery - Banner (2).jpg",
    "/Red Modern Texture Background Online Delivery - Banner (1).jpg",
    "/Red Modern Texture Background Online Delivery - Banner.jpg",
    "/Red Modern Texture Background Online Delivery - Banner (3).jpg",

];

const HeroSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            changeSlide(1);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, );

    const changeSlide = (n) => {
        const newIndex = (currentImageIndex + n + images.length) % images.length;
        setCurrentImageIndex(newIndex);
    };

    const handleDotClick = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <section className="heroSection">
            <Navbar/>
            <h1 className='title'>Welcome to Feista Flavours</h1>
            <div className="slideshow-container">
                
                {images.map((src, index) => (
                    <img
                        key={src}
                        src={src}
                        alt={`Slide ${index}`}
                        className={`slideshow-img ${index === currentImageIndex ? 'active' : ''}`}
                        style={{ display: index === currentImageIndex ? 'block' : 'none' }}
                    />
                ))}
                <div className="dots-container">
                    {images.map((src, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                            onClick={() => handleDotClick(index)}
                        />
                    ))}
                </div>
            </div>
            
        </section>
    );
};

export default HeroSection;
