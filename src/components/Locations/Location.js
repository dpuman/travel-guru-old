import React from 'react';
import { Card } from 'react-bootstrap';
import './locations.css'


const Location = (props) => {
    const { name, image, id } = props.location

    return (
        <div className='location-hover'>
            <Card onMouseOver={() => { props.handleLocation(id) }} className="position-relative rounded bg-transparent border-0 text-white">
                <Card.Img src={image} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title style={{ position: 'absolute', bottom: '40px' }} className="booking ">{name}</Card.Title>

                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Location;