import React from "react";
import { Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <div class="contact">
      {/* <h2>Contact Me</h2>
        <h3>Send me a message</h3>
        <form action="https://formspree.io/xaybrrgy" method="POST">
            <label for="email">Your email</label>
            <input type="email" name="email"/>
            <label for="name">Your name</label>
            <input type="name" name="name"/>
            <textarea rows="10" placeholder="your message here"></textarea>
            <button type="submit">Submit</button>
        </form> */}
      <Form action="https://formspree.io/xaybrrgy" method="POST">
        <h3>Send me a message</h3>
        <Form.Group>
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Your name" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Your Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label></Form.Label>
          <Form.Control as="textarea" rows="3" paceholder="Your message"/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
