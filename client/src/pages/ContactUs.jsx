import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';


const ContactUs = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ypcnc16",
        "template_gf86d7v",
        form.current,
        "0ieyPTlvdz5H0raAg"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

    return (
        <Container>
            <Row>
                <Col>
                    <br />
                    <h3>Get in touch</h3>
                    <hr/>
                    <br/>
                    <form className="contactUsForm" ref={form} onSubmit={sendEmail}>
                        <label className=''>Name</label>
                        <input type="text" name="user_name" /><br/>
                        <label>Email</label>
                        <input type="email" name="user_email" /><br/>
                        <label>Message</label>
                        <textarea name="message" />
                        <input type="submit" value="Send" />
                    </form>
                    <br />
            </Col>
            <Col>
                <br />
                <h3>Contact us</h3>
                <hr/>
                <br />
                <Card>
                    <Card.Header>Centre for Development of Advanced Computing, Mumbai</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Address: <br />
                            Raintree Marg, Near Bharati Vidyapeeth, Opp. Kharghar Railway Station, Sector 7, CBD Belapur
                            Navi Mumbai - 400 614 - Maharashtra (India)
                            <hr />
                            Phone: +91-22-27565303<br />
                            Fax: +91-22-2756-0004
                            <br /><br />
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15087.439164812298!2d73.054246!3d19.025899!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c24cce39457b%3A0x8bd69eab297890b0!2sCentre%20for%20Development%20of%20Advanced%20Computing%20(CDAC)!5e0!3m2!1sen!2sin!4v1716228530904!5m2!1sen!2sin" width="490" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        </Container >

    );
}

export default ContactUs;