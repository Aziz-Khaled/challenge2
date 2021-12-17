import React from "react";
import { Card } from "react-bootstrap";

const Footer =(props)=>{
    return (

        <Card className="border">
    <Card.Body>{props.copyright}</Card.Body>
</Card>

    )
}




export default Footer ; 