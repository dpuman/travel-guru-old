import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import locations from '../../fakeData/index';
import Location from './Location';
import './Location'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { LocationContext } from '../../App';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Locations = () => {
    const [myLocations, setMyLocations] = useState([]);
    const history = useHistory();


    const { selectedLocation, setSelectedLocation } = useContext(LocationContext);
    const handleLocation = (id) => {
        // console.log('Selected Item :', id);
        const tempLocation = myLocations.find(ml => ml.id === id);
        // console.log(tempLocation);
        setSelectedLocation(tempLocation);
    }
    useEffect(() => {
        setMyLocations(locations)
    }, []);

    return (

        <div>
            <Container style={{ margin: ' 0px 150px' }}>
                <Row>
                    <Col md={4} className=' d-flex align-items-center'>
                        <div  >
                            <h1>{selectedLocation.name}</h1>
                            <p>{selectedLocation.description}</p>
                            <Button variant="warning" onClick={() => history.push(`/booking/${selectedLocation.id}`)}> Booking <AiOutlineArrowRight /> </Button>
                        </div>
                    </Col>

                    <Col md={8}>
                        <Row>

                            {myLocations.map(loc => <Col className="" md={4}> <Location handleLocation={handleLocation} location={loc} key={loc.id} /></Col>)}

                        </Row>
                    </Col>
                </Row>
            </Container >
        </div >
    );
};

export default Locations;