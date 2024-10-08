import React from 'react';
import Banner from './Banner';
import About from './About';
import Discount from './Discount';
import Testimonial from './Testimonial';
import Reservation from './Reservation';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Discount />
            <Testimonial />
            <Reservation />
        </div>
    );
}

export default Home;