import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faFlag, faFutbol, faMapMarkerAlt, faMarsStroke } from '@fortawesome/free-solid-svg-icons';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import './ClubDetails.css';
import male from '../../image/male.png';
import female from '../../image/female.png';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const ClubDetails = () => {
    const { idTeam } = useParams();
    const [club, setClub] = useState([]);
    const { strTeam, strCountry, strSport, strGender, strDescriptionEN, strTeamBanner, strTeamBadge, intFormedYear, strTwitter, strFacebook, strYoutube } = club;

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setClub(data.teams[0]))
    }, [idTeam])
    console.log(club);

    return (
        <div style={{ background: '#0e0a2a' }}>
            <NavBar />
            <div className="banner mb-5 text-center" style={{ backgroundImage: `url(${strTeamBanner})` }}>
                <img style={{ height: '150px' }} src={strTeamBadge} alt="" />
            </div>
            <div className="container">
                <div className="custom-style row mb-4">
                    <div className="col-md-7">
                        <h3 className="mb-4">{strTeam}</h3>
                        <p> <strong><FontAwesomeIcon icon={faMapMarkerAlt} /> Founded : {intFormedYear}</strong></p>
                        <p> <strong><FontAwesomeIcon icon={faFlag} /> Country : {strCountry}</strong> </p>
                        <p> <strong><FontAwesomeIcon icon={faFutbol} /> Sport Type : {strSport}</strong></p>
                        <p> <strong><FontAwesomeIcon icon={faMarsStroke} /> Gender : {strGender}</strong></p>
                        <Button className="btn-style" as={Link} to="/home" variant="primary"><FontAwesomeIcon icon={faArrowLeft} /> Go Back</Button>
                    </div>
                    <div className="col-md-5">
                        {
                            strGender ?
                                <img src={male} alt="" />
                                : <img src={female} alt="" />
                        }
                    </div>

                </div>
                <p className="text-white">{strDescriptionEN}</p>
                <div className="social-icon text-center py-5 m-auto">
                    <a className="twitter" target="_blank" href={strTwitter}> <FaTwitter /> </a>
                    <Link className="facebook" target="_blank" to={strFacebook}> <FaFacebookF /> </Link>
                    <Link className="youtube" target="_blank" to={strYoutube}> <FaYoutube /> </Link>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ClubDetails;