import React from "react";
import './Contact.css';
import link from '../assets/linkedin.png';
import gmail from '../assets/images.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const Contact = () => {
    return (
        <div id="contactId" className="footer_copy">
            <Container>
                <Row>
                    <Col className="copyright">
                        Contact Info:
                        <ul className="infoList">
                            <li>
                                <a href="https://www.linkedin.com/in/tayyaba-naseem-9003591aa/" target="_blank">
                                    <img src={link} alt="linkedin" className="hover" />
                                </a>
                                <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
                                    <img src={gmail} className="hover" alt="gmail" />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}