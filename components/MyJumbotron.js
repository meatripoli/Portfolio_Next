import { Button,Card } from 'react-bootstrap';

import AboutModal from './AboutModal';

export default () => {
    return  <div className='centeredJumbotron'style={{background:'none'}}>
        <Card className="text-center" style={{background:'none', border:'none'}}>
            <Card.Body>
                <Card.Title>
                    <h1 className>
                        M<span>A</span>R<span>I</span>A<span> </span> T<span>R</span>I
                        <span>P</span>O<span>L</span>I
                    </h1>
                </Card.Title>
                <Card.Text>
                    <h5>FULL-STACK DEVELOPER</h5>
                </Card.Text>
                <AboutModal></AboutModal>
                <Button variant="link">Skills</Button>
                <Button variant="link">Work</Button>
            </Card.Body>
            <footer className="text-muted">LinkedIn, GitHub, Resume Links</footer>
        </Card>
    </div>
}