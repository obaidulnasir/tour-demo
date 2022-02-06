import React, { useEffect, useState } from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import BookNow from '../../shared/BookNow/BookNow';
import ContactCard from '../../shared/ContactCard/ContactCard';
import Banner from '../Umrah/Banner/Banner';
import "./SinglePackage.css"

const SinglePackage = () => {
    const { id } = useParams();
    const [singlePackage, setSinglePackage] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/singlePackage/${id}`)
            .then(res => res.json())
            .then(data => setSinglePackage(data));
    }, [])
    return (
        <div>
            <Banner></Banner>
            <Container className="mt-5">
                <Row>
                    <Col border md={8}>
                        <div>
                            <h3>{singlePackage.pakckageName}</h3>
                            <h4>{singlePackage.price} $</h4>
                        </div>
                        <div>
                            {/* imge or slide here */}
                        </div>
                        {/* Accordiern  */}
                        <div>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Package Details</Accordion.Header>
                                    <Accordion.Body>
                                        {singlePackage.description}
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>

                    </Col>
                    <Col md={4}>
                        {/* <div className="book-now-btn text-center p-5 mt-4 border">
                            <Link to={`bookNow/${id}`}>
                                <button className="btn btn-info btn-lg">Book Now</button>
                            </Link>
                        </div> */}
                        <BookNow packageName={singlePackage.pakckageName} id={id}></BookNow>
                        <ContactCard></ContactCard>
                        <h4>{id}</h4>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SinglePackage;