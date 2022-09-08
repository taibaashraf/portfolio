import React from 'react';
import './slider.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ProfilePicture from '../assets/1T.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Slider() {

    return (
        <Container id="homeId" className="aboutSec">
            <Row className=''>
                <Col md={4}>
                    <img src={ProfilePicture} alt="silverBackBanner" className="img-responsive profilePicture" />
                </Col>

                <Col md={8}>
                    <p className="container textSliderAbout">
                        Hi, I am Tayyaba Naseem. I have done Bachelor's in
                        Computer Science from Sir Syed CASE Institute of
                        Technology, Islamabad, Pakistan. I have been working
                        professionally for about 3 years as a Front-End Developer.
                        I have learnt to complete challenging responsibilities. 
                        I am well equipped to be a suitable addition for a good 
                        software development team.
                        <br />
                        <br />
                        When not working I enjoy going
                        out with friends and family. If it's summer, I try to
                        make a trip to northern areas.

                    </p>
                </Col>
            </Row>
        </Container>
    );
}