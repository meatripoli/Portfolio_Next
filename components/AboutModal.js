import Modal from 'react-bootstrap/Modal';
import {Button,Card,Image,Container, Row,Col} from 'react-bootstrap';
import {useState} from 'react';

export default () => {
    const [show, setShow] = useState(false);
    const handleModal = () => show?setShow(false):setShow(true);
    return(<>
        <Button variant="link" onClick={handleModal}>About</Button>
        <Card style={show?{display:'inherit',background:'none',border:'none'}:{display:'none',background:'none'}}>
            <Card.Body>
                <Card.Text>
                    <Container>
                        <Row>
                            <Col xs={6} md={4}>
                                <Image roundedCircle src="/img/Me.jpg" alt="pic" style={{width:'250px', height:'300px'}}/> 
                            </Col>
                            <Col xs={12} md={8}>
                                <div>
                                    <p>
                                        Hi! I'm Maria, an inquisitive, bilingual web developer who enjoys 
                                        solving programming challenges, collaboration, and excited to leverage 
                                        my skills as part of a fast-paced, quality-driven team in order to build 
                                        better experiences on the web.
                                    </p>
                                    <p>
                                        I was born in Italy and moved to the United States when I was 10 years 
                                        old. I graduated from Florida Tech with a BS degree in Electrical Engineering
                                        but my career path quickly moved to more software roles.
                                    </p>
                                    <p>
                                        Outside of my professional career my main hobbies is training dogs. I have participated 
                                        in agility and tracking events with my personal dog and have helped dog owners with obedience 
                                        training and dog behavior modification.
                                    </p>
                                    <p>
                                        GET IN TOUCH!
                                    </p>
                                    <a href="mailto:meatripoli@gmail.com?subject=Hi%20there!">meatripoli@gmail.com</a>
                                    <p>(321) -431-0659</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Card.Text>
            </Card.Body>
        </Card>
        </>
    )
}