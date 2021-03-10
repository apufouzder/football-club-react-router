import React from 'react';
import { Form, Button } from 'react-bootstrap';
import HeroBanner from '../../image/herobanner.jpg';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import './Contact.css';


const Contact = () => {
    return (
        <>
            <NavBar />
            <div className="banner-contact" style={{ backgroundImage: `url(${HeroBanner})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8 py-5">
                            <Form className="text-style">
                                <Form.Group controlId="formGroupEmail">
                                    <Form.Label>Email address..</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group controlId="formGroupPassword">
                                    <Form.Label>Phone..</Form.Label>
                                    <Form.Control type="number" placeholder="Enter number" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Message..</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                                <Button>Submit</Button>
                            </Form>
                        </div>
                        <div className="col-2"></div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;