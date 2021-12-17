import React from "react";
import '../Contact/Contact.css'
import {Form,} from 'react-bootstrap'


const Contact = (props) => {
    return (
        <div className="Form">
            <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>{props.email}</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label> {props.description}</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
</div>
    )
}

















export default Contact ;