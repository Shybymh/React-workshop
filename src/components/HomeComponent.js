import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Loading } from './LoadingComponent';

// Renders each card for campsite, promotion and partner as props
function RenderCard({item, isLoading, errMess}) {
    if (isLoading) {
        return <Loading />;
    }
    if (errMess) {
        return <h4>{errMess}</h4>;
    }
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
                    <RenderCard 
                    item={props.campsite} 
                    isLoading={props.campsitesLoading}
                    errMess={props.campsitesErrMess}
                />
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