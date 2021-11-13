import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Form, Row, Button, Card } from 'react-bootstrap';
import { LocationContext } from '../../App';
import './booking.css';
import DatePicker from 'react-date-picker';
import { useHistory, useParams } from 'react-router';

const Booking = () => {

    const { selectedLocation, setSelectedLocation, bookingInfo, setBookingInfo } = useContext(LocationContext);
    const history = useHistory();

    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());
    const [booking, setBooking] = useState({
        origin: '',
        location: {},

    })

    useEffect(() => {
        setBooking({ ...selectedLocation });
    }, {});
    const handleInput = (e) => {
        const temp = { ...booking }
        temp[e.target.name] = e.target.value;
        setBooking(temp);
        e.persist();
    }
    const handleSubmit = (e) => {
        setBookingInfo({ ...bookingInfo, ...booking, fromDate, toDate });
        // console.log({ booking });
        console.log({ bookingInfo });
        // debugger;
        history.push(`/search`);
        e.preventDefault();
    }

    return (
        <div className='booking'>
            <Container style={{ margin: ' 0px 150px', color: 'white' }}>
                <Row>
                    <Col md={4} className=' d-flex align-items-center'>
                        <div  >
                            <h1>{selectedLocation.name}</h1>
                            <p>{selectedLocation.description}</p>
                        </div>
                    </Col>

                    <Col md={8} className='p-5'>
                        <Row>
                            <Card style={{ margin: '0 auto ', width: '470px' }}>
                                <Card.Body>
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3" >
                                            <Form.Label className='text-muted'>Origin</Form.Label>
                                            <Form.Control onBlur={handleInput} className='fw-bold' type="text" name='origin' placeholder="Enter origin" />

                                        </Form.Group>

                                        <Form.Group className="mb-3" >
                                            <Form.Label className='text-muted'>Destination</Form.Label>
                                            <Form.Control name='location' className='fw-bold' type="text" placeholder="Destination" value={selectedLocation.name} />
                                        </Form.Group>
                                        <Row>
                                            <Col md={6}>
                                                <Form.Group className="mb-3" >
                                                    <Form.Label className='text-muted'>From</Form.Label>
                                                    <br />
                                                    {/* <Form.Control value={fromDate} className='fw-bold' type="date" name='from' placeholder="Enter origin" /> */}
                                                    <DatePicker
                                                        onChange={setFromDate}
                                                        value={fromDate}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-3" >
                                                    <Form.Label className='text-muted'>To</Form.Label>
                                                    {/* <Form.Control className='fw-bold' type="date" name='to' placeholder="Enter origin" /> */}
                                                    <br />
                                                    <DatePicker
                                                        onChange={setToDate}
                                                        value={toDate}
                                                    />
                                                </Form.Group>
                                            </Col>

                                        </Row>

                                        <Button className='w-100' variant="warning" type="submit">
                                            Submit
                                        </Button>
                                    </Form>

                                </Card.Body>
                            </Card>

                        </Row>
                    </Col>
                </Row>

            </Container >
        </div>
    );
};

export default Booking;