import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <Container className="my-5">
                <Row>
                    <Col>
                        <Col>
                            <h2>About Obokas <br /> <span className="text-info">TRAVEL AGENCY</span></h2>
                        </Col>
                        <Col>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi necessitatibus quos, voluptas vero totam, quia, aliquid ad pariatur consectetur fugit mollitia iure nihil minima laboriosam! Voluptatum, sapiente ipsam ratione vitae porro eaque voluptatibus dolor!</p>
                        </Col>
                        <Col>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos voluptatibus, vel vitae illum explicabo perferendis iure ad nulla quis id similique dolores, nostrum, delectus in officia magni qui natus itaque modi optio voluptates! Quo aperiam ducimus recusandae suscipit magni reprehenderit eveniet maxime vel incidunt assumenda!</p>
                        </Col>
                    </Col>
                    <Col>
                        <Col>
                            <video width="320" height="240" controls src="https://youtu.be/cpcG5mbSTnQ"></video>
                        </Col>
                        <Col>
                            <img src="" alt="" />
                        </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;