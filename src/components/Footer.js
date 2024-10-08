import React from 'react';

const Footer = () => {
    return (
        <div className="footer_section layout_padding">
            <div className="container">
                <div className="social_icon">
                    <ul>
                        <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><img src="/assets/images/fb-icon.png" alt="Facebook" /></a></li>
                        <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><img src="/assets/images/twitter-icon.png" alt="Twitter" /></a></li>
                        <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><img src="/assets/images/linkdin-icon.png" alt="LinkedIn" /></a></li>
                        <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src="/assets/images/instagram-icon.png" alt="Instagram" /></a></li>
                    </ul>
                </div>
                <p className="lorem_ipsum_text">İstanbul Fatih'te Siz Değerli Misafirlerimizi Bekliyoruz.</p>
            </div>
        </div>
    );
};

export default Footer;

