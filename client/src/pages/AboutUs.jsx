import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutUs() {
    return (

        <div className='aboutus'>
            <br />
            <br />
            <h1>About us</h1>
            <br />
            <hr/>
            <h3>Our Team Members</h3>
            <br/>
            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Tushar Patil</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                                <Card.Text>
                                    Electronics Engineer<br/>
                                    Skills: Java, Unix, SQL, JavaScript, NoSQL.
                                </Card.Text>
                                <Card.Link href="https://linkedin.com/in/tusharpatil01">Linkedin</Card.Link>
                                <Card.Link href="https://github.com/tushar-pandurang-patil">Github</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Rahul Kumar</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                                <Card.Text>
                                    Computer Science Engineer<br/>
                                    Skills: Java, Unix, SQL, JavaScript, NoSQL.
                                </Card.Text>
                                <Card.Link href="#">Linkedin</Card.Link>
                                <Card.Link href="#">Github</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Pushpak Thakur</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                                <Card.Text>
                                    Electrical Engineer<br/>
                                    Skills: Java, Unix, SQL, JavaScript, NoSQL.
                                </Card.Text>
                                <Card.Link href="https://www.linkedin.com/in/pushpak-thakur-3578851a7/">Linkedin</Card.Link>
                                <Card.Link href="https://github.com/dashboard">Github</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>

    );
}

export default AboutUs;