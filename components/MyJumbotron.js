import { Nav,Card } from 'react-bootstrap';
import SkillsTab from './SkillsTab';
import AboutTab from './AboutTab';
import Project from './Projects';
import {useState} from 'react';

export default () => {
    let initialState={
        about:false,
        skills:false,
        work:false,
    }
    const [state, setState] = useState(initialState)
    const handleOpen = (tabName)=>{
        console.log('inside open fn')
        console.log('before',state)
        setState({[tabName]:state[tabName]?false:true});
        console.log('after',state)
    };
    const handleClose = ()=>{
        console.log('inside close fn')
        console.log('before',state)
        setState(initialState)
        console.log('after',state)
    };
    const handleStateChange =(tabName)=>{
        console.log('inside change state fn')
        //first we close all tabs
        handleClose();
        //open only tab that is being clicked
        handleOpen(tabName);
    }
    return  <div className='centeredJumbotron' style={{background:'none'}}>
        <Card className="text-center" style={{background:'none', border:'none'}}>
            <Card.Body>
                <Card.Title>
                    <div style={{fontSize: '80px'}}>
                        MARIA TRIPOLI
                    </div>
                    <div style={{fontSize: '40px'}}>
                        FULL-STACK DEVELOPER
                    </div>
                </Card.Title>
                <Nav variant="tabs" className="justify-content-center">
                    <Nav.Item as="li">
                        <AboutTab tabID='about' show={state.about} animation={handleStateChange}/>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <SkillsTab tabID='skills' show={state.skills} animation={handleStateChange}/>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Project tabID='work' show={state.work} animation={handleStateChange}/>
                    </Nav.Item>  
                </Nav>
            </Card.Body>
            <footer className="text-muted" >
                <a href="https://www.linkedin.com/in/maria-tripoli-b836b167/" target="_blank" className="link footerIcon" rel="noopener noreferrer">
                    <i className="fa fa-linkedin-square"></i>
                </a>         
                <a href="https://github.com/meatripoli" target="_blank" className="link footerIcon">
                    <i className="fa fa-github"></i>
                </a>
                <a href="https://stackoverflow.com/users/11912060/maria?tab=profile" target="_blank" className="link footerIcon" rel="noopener noreferrer">
                    <i className="fa fa-stack-overflow"></i>
                </a>              
                <a href="https://drive.google.com/file/d/1Kb0Qh_zD7ZxqtYs68TN3GJxc5Ydm090C/view?usp=sharing" target="_blank" className="link footerIcon" rel="noopener noreferrer">
                    <i className="fas fa-file-pdf"></i> 
                </a>
            </footer>
        </Card>
    </div>
}