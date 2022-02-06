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
          

            <Container className="my-5">
                <Row xs={1} md={3} className="g-4 ">
                    {umrahPac.map((pac) => (
                        <Col>
                            <Card className="p-3">
                                <Card.Img variant="top" src={pac?.img} />
                                <Card.Body>
                                    <Card.Title>{pac.pakckageName}</Card.Title>
                                    <h4 className="fw-bold text-info">{pac.price} $</h4>
                                    <Card.Text>
                                        {pac.description.slice(0, 200)}...
                                      </Card.Text>
                                </Card.Body>
                                <Link to={`package/${pac._id}`} className="text-center">
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