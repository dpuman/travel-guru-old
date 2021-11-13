import React, { useContext, useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { LocationContext } from '../../App';
import image from '../../assets/Image/Sajek.png';
import locations from '../../fakeData/index'
import Map from './Map';

const Search = () => {

    const { selectedLocation, bookingInfo, setBookingInfo, demoInfo, setDemoInfo } = useContext(LocationContext);

    const { hotels } = selectedLocation;

    console.log({ bookingInfo });
    console.log({ demoInfo });



    return (
        <div>

            <Container>
                <hr />
                <p className='text-muted'>{bookingInfo.origin} 252 stays Aug 13-17 3 guests</p>
                <h4>Stay in Name {selectedLocation.name} </h4>
                <Row >
                    <Col md={6} lg={6} >
                        {hotels && hotels.map(hotel =>
                            <div className="card mb-3" style={{ maxWidth: '540px' }}>
                                <div className="row g-0">
                                    <div className="col-md-4 p-3 ">
                                        <Card.Img variant="top" src={hotel.image} />
                                    </div>
                                    <div className="col-md-8">
                                        <div style={{ lineHeight: '0.6' }} className="card-body">
                                            <h5 className="card-title">{hotel.title}</h5>
                                            <p className="card-text"><small className="text-muted">{hotel.type}</small></p>
                                            <p className="card-text"><small className="text-muted">{hotel.type1}</small></p>
                                            <p className="card-text"><small className="text-muted">{hotel.type2}</small></p>
                                            <div className="d-flex">
                                                <p className='me-5'>{hotel.star}</p>
                                                <p>${hotel.dollars}/night</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }




                    </Col>
                    <Col md={6} lg={6} style={{ width: '500px' }} >

                        {/* AIzaSyB5FLZbbRl445OuYMcSSfoa70m2yLVyg_M */}
                        <Map></Map>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Search;