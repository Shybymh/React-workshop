import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

// Renders each card for campsite, promotion and partner as props
function RenderCard({item}) {
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

// Renders featured campsite, promotion and parter passed as props.
function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md m-1">
                    <RenderCard item={props.campsite} />
                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.partner} /> 
                </div>
            </div>
        </div>
    );
}

export default Home; 