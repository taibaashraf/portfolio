import React, { useState, useEffect } from "react";
import './About.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Aos from "aos";
import "aos/dist/aos.css";
// import Spin from './spin';
// data-aos="fade-left"

export const About = () => {
    useEffect(() => {
        Aos.init({ duration: 1100 });

    }, []);

    return (
        <div id="aboutId">
            <Container>
                <h2 className="headerExpe">
                    Working Experience
                </h2>
                <Row>
                    <Col md={6} data-aos="fade-right" id="time-text">
                        <h2>SFCC Front-End Developer</h2>
                        <h4>Royal Cyber</h4>
                        <h4>NOVEMBER 2021 – Present</h4>
                        <p>
                            Work on a migrating an existing application into modernized UI experience.
                            Make recommendations for enhancements and modifications to improve system
                            performance, efficiency, internal business process, and reporting. Work Closely
                            with Project Manager to develop solution in accordance to the system design.
                        </p>
                    </Col>

                    <Col md={5} class="timeline-date">

                    </Col>

                </Row>

                <Row>
                    <Col md={5} class="timeline-date">

                    </Col>
                    <Col md={6} data-aos="fade-left" id="time-text" style={
                        {
                            borderRight: 'none',
                            borderLeft: '5px solid #dddddd'
                        }}>
                        <h2>Front-End Developer</h2>
                        <h4>Silverback (Pvt) Ltd</h4>
                        <h4>NOVEMBER 2020 – SEPTEMBER 2021</h4>
                        <p>
                            Participated in design and development of Web applications
                            using Visual Studio Code and Microsoft SQL. Developed a virtual
                            lab for the hardware students to implement their tasks.
                            Virtually Accessible Physical Lab (VAP), Silverback Website and
                            Beepure Website.

                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col md={6} data-aos="fade-right" id="time-text">
                        <h2>SFCC Front-End Developer</h2>
                        <h4>Boolean Bits</h4>
                        <h4>JULY 2020 – OCTOBER 2020</h4>
                        <p>
                            Implemented web design and development principles to build
                            stable software. Collaborating with designers to ensure
                            designs were efficient and technically sound. Developed
                            websites and web pages that are responsive and usable. Recommended
                            solutions for a streamlined, user-friendly interface with the design team.
                            Some of the tools and platforms which I had been using for this purpose
                            are: HTML5,React JS, React-Bootstrap, CSS SCSS, Typescript, GIT and GITHUB.
                        </p>
                    </Col>
                    <Col md={5} class="timeline-date">

                    </Col>
                </Row>

                <Row>
                    <Col md={5} class="timeline-date">

                    </Col>
                    <Col md={6} data-aos="fade-left" id="time-text" style={
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
    );
}