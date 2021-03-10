import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import AboutBanner from '../../image/about/about.jpg';
import AboutRight from '../../image/about/aboutRight.gif';

const About = () => {
    return (
        <>
            <NavBar />
            <div className="banner mb-5 text-center" style={{ backgroundImage: `url(${AboutBanner})` }}>
                <h1 className="display-3 text-center py-5 text-white">Developer is sleeping...!!</h1>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-7">
                        <h3 className="display-4">About Us</h3>
                        <h5>Lorem ipsum dolor sit amet adipisicing elit.</h5>
                        <p className="text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A facilis voluptates illo sapiente exercitationem. Placeat accusamus modi nam quidem alias, quisquam, dolorum nostrum aperiam laborum vero beatae, consectetur enim totam ad dolore? Omnis laboriosam magni quidem, molestiae facere, vero nihil eligendi quis fugit molestias ipsam deleniti, ullam excepturi incidunt veritatis.</p>
                    </div>
                    <div className="col-md-5">
                        <img src={AboutRight} alt="" />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default About;