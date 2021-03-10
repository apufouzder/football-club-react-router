import React, { useEffect, useState } from 'react';
import Club from '../Club/Club';
import './Home.css';
import HeroBanner from '../../image/herobanner.jpg';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';


const Home = () => {
    const [clubs, setClubs] = useState([]);

    const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setClubs(data.teams))
    }, [])

    return (
        <div style={{ background: '#06134e' }}>
            <NavBar />
            <div className="hero-banner mb-5" style={{ backgroundImage: `url(${HeroBanner})` }}>
                <h1 className="text-white display-3">Football Clubs</h1>
            </div>
            <div className="container">
                <div className="row">
                    {
                        clubs.map(club => <Club key={club.idTeam} club={club}></Club>)
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;