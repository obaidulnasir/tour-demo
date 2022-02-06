import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UmrahPackges = () => {
    // ekhane data Fetch hobe 
    const [umrahPac, setUmrahPac] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/allpackages")
            .then(res => res.json())
            .then(data => setUmrahPac(data));
    }, [])

    return (
        <div>
            <h2>{umrahPac.length}</h2>
            <h3>this is umrah packages</h3>

            <Container>
                <Row xs={1} md={3} className="g-4">
                    {umrahPac.map((pac) => (
                        <Col>
                            <Card className="p-3">
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body>
                                    <Card.Title>{pac.pakckageName}</Card.Title>
                                    <h4 className="fw-bold text-info">{pac.price} $</h4>
                                    <Card.Text>
                                        {pac.description.slice(0, 200)}...
                                      </Card.Text>
                                </Card.Body>
                                <Link to="" className="text-center">
                                    <button className="btn btn-info">More Details</button>
                                </Link>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default UmrahPackges;