import { Nav,Card } from 'react-bootstrap';
import SkillsTab from './SkillsTab';
import AboutTab from './AboutTab';
import Project from './Projects';

export default () => {
    return  <div className='centeredJumbotron' style={{background:'none'}}>
        <Card className="text-center" style={{background:'none', border:'none'}}>
            <Card.Body>
                <Card.Title>
                    <h1 >
                        M<span>A</span>R<span>I</span>A<span> </span> T<span>R</span>I
                        <span>P</span>O<span>L</span>I
                    </h1>
                    FULL-STACK DEVELOPER
                </Card.Title>
                <Nav variant="tabs" className="justify-content-center">
                    <Nav.Item as="li">
                        <AboutTab/>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <SkillsTab/>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Project/>
                    </Nav.Item>  
                </Nav>
            </Card.Body>
            <footer className="text-muted" >
                    <div className='footerIcon'>
                        <i className="fa fa-linkedin-square">
                            <a href="https://www.linkedin.com/in/maria-tripoli-b836b167/" className="link" rel="noopener noreferrer"></a>
                        </i>
                    </div>
                    <div className='footerIcon'>
                        <i className="fa fa-github">
                            <a href="https://github.com/meatripoli" className="link"></a>
                        </i> 
                    </div> 
                    <div className='footerIcon'> 
                        <i className="fa fa-stack-overflow">
                            <a href="https://stackoverflow.com/users/11912060/maria?tab=profile" className="link" rel="noopener noreferrer"></a>
                        </i> 
                    </div>
                    <div className='footerIcon'>
                        <i className="fas fa-file-pdf">
                            <a href="https://drive.google.com/file/d/1SABfCkzigMpCX7RwpzlwSec1IUrbL7l7/view?usp=sharing" className="link" rel="noopener noreferrer"></a>
                        </i> 
                    </div>
            </footer>
        </Card>
    </div>
}