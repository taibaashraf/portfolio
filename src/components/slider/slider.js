import React from 'react';
import './slider.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ProfilePicture from '../assets/1T.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import link from '../assets/linkedin.png';
import gmail from '../assets/images.png';

export default function Slider() {

    return (
        <div>
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
            <div id="aboutId">
                <Container>
                    <h2 className="headerExpe">
                        Working Experience
                    </h2>
                    <Row>
                        <Col md={6} id="time-text">
                            <h2>SFCC Front-End Developer</h2>
                            <h4>Royal Cyber</h4>
                            <h4>NOVEMBER 2021 – Present</h4>
                            <p>
                                Royal Cyber Inc. is a globally recognized award-winning
                                technology partner that is helping companies imagine,
                                execute, and accelerate their digital transformation.
                                Being a Front-End Developer, my responsibilities are to
                                develop new modules and enhancing the code with best fit
                                approaches of Model-View-Controller (MVC) design pattern
                                to keep the code clean and minimize the factor of complexity.
                                I am using Demandware to consume the third-party API’s. I work
                                closely with Solution Architect to develop solution in accordance
                                with the system design. There are some tools and platforms which
                                has been using for this purpose are: JavaScript, jQuery, HTML,
                                SASS, Waterfall, GitHub, Visual Studio Code, Bitbucket, JIRA.
                            </p>
                        </Col>

                        <Col md={5} class="timeline-date">

                        </Col>

                    </Row>

                    <Row>
                        <Col md={5} class="timeline-date">

                        </Col>
                        <Col md={6} id="time-text" style={
                            {
                                borderRight: 'none',
                                borderLeft: '5px solid #dddddd'
                            }}>
                            <h2>Front-End Developer</h2>
                            <h4>Silverback (Pvt) Ltd</h4>
                            <h4>NOVEMBER 2020 – SEPTEMBER 2021</h4>
                            <p>
                                Silverback is a premiere Internet of Things
                                centric technology company aimed at providing
                                cutting edge innovative solutions that provides
                                tools for creators to develop internet-connected
                                hardware. Being a Front-End Developer, my responsibilities
                                are to design and development of Web applications using
                                Visual Studio Code and Microsoft SQL. Developed a virtual
                                lab for the hardware students to implement their tasks.
                                Virtually Accessible Physical Lab (VAP), Silverback Website and
                                Beepure Website.

                            </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6} id="time-text">
                            <h2>SFCC Front-End Developer</h2>
                            <h4>Boolean Bits</h4>
                            <h4>JULY 2020 – OCTOBER 2020</h4>
                            <p>
                                Boolean Bits provides business support
                                solutions to a global client base. Being
                                a Front-End Developer, my responsibilities
                                are to design and implement the different modules.
                                Some of the tools and platforms which I had been
                                using for this purpose are: HTML5, React JS,
                                React-Bootstrap, CSS SCSS, Typescript, GIT and
                                GITHUB. Implemented web design and development
                                principles to build stable software. Collaborating
                                with designers to ensure designs were efficient
                                and technically sound. Developed websites and web
                                pages that are responsive and usable. Recommended
                                solutions for a streamlined, user-friendly interface
                                with the design team.
                            </p>
                        </Col>
                        <Col md={5} class="timeline-date">

                        </Col>
                    </Row>

                    <Row>
                        <Col md={5} class="timeline-date">

                        </Col>
                        <Col md={6} id="time-text" style={
                            {
                                borderRight: 'none',
                                borderLeft: '5px solid #dddddd'
                            }}>
                            <h2>Front-End Developer Internee</h2>
                            <h4>Barefoot Software House</h4>
                            <h4>JUNE 2017 – AUGUST 2017</h4>
                            <p>
                                Implemented mock-ups to life using HTML, CSS, Bootstrap,
                                JavaScript to enhance functionality and user experience on
                                web pages. Worked closely with programmers to meet project
                                requirements goals and desired functionality.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>

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
        </div>
    );
}