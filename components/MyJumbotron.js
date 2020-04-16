import { Button,Jumbotron,Container,Row,Col } from 'react-bootstrap';

export default () => {
    return <Jumbotron>
        <Row>
            <div>MT</div>
        </Row>
        <Row>
            <div>MARIA TRIPOLI</div>
        </Row>
        <Row>
            <Col><Button>About</Button></Col>
            <Col><Button>Skills</Button></Col>
            <Col><Button>Work</Button></Col>
        </Row>
    </Jumbotron>
}