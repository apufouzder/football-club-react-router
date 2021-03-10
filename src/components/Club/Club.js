import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Club.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Club = (props) => {
    const { idTeam, strTeam, strTeamBadge, strSport } = props.club;
    const history = useHistory();

    const handleClick = (id) => {
        history.push(`/club/${id}`)
    }

    return (
        <>
            <div className="col-md-4 col-lg-3 mb-4">
                <Card className="p-4 text-center custom-card">
                    <Link to={`/club/${idTeam}`}><Card.Img variant="top" src={strTeamBadge} /></Link>
                    <Card.Body>
                        <Card.Title>{strTeam}</Card.Title>
                        <Card.Text>Sports type: {strSport}</Card.Text>
                        <Button variant="primary" onClick={() => handleClick(idTeam)}>Explore <FontAwesomeIcon icon={faArrowRight} /> </Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
};

export default Club;