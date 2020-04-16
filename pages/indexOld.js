import NavBar from  './navBar';
import Background from '../components/background';

export default function Home() {
    return (<> 
        <NavBar></NavBar>
        <div className="container">
            <div className="row">
                <div className="col-9">
                    <div className="row">
                        <h1 id="row-about">ABOUT ME</h1>
                    </div>
                    <div className="row">
                        <img id="about_pic" src="/img/Me.jpg" alt="pic"/>                 
                        <p> 
                            Software Engineer with 3 years of experience as a 
                            Business Intelligence Developer. Experienced as a 
                            technical trainer with 3 years of formal instruction in both 
                            stand-up and classroom settings. Eagered about approaching programming challenges from 
                            different angles and collaborating with others to create 
                            meaningful web applications. Excited to leverage my skills as 
                            part of a fast-paced, quality-driven team in order to build 
                            better experiences on the web.
                        </p>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card" >
                        <div className="card-body">    
                            <i className="fa fa-linkedin-square">
                                <a href="https://www.linkedin.com/in/maria-tripoli-b836b167/" className="link" rel="noopener noreferrer">LinkedIn</a>
                            </i>
                            <br />
                            <i className="fa fa-github">
                                <a href="https://github.com/meatripoli" className="link">
                                    GitHub
                                </a>
                            </i>  
                            <br />
                            <i className="fa fa-stack-overflow">
                                <a href="https://stackoverflow.com/users/11912060/maria?tab=profile" className="link" rel="noopener noreferrer">StackOverflow</a>
                            </i> 
                            <br />
                            <i className="fas fa-file-pdf">
                                <a href="https://drive.google.com/file/d/1SABfCkzigMpCX7RwpzlwSec1IUrbL7l7/view?usp=sharing" className="link" rel="noopener noreferrer">Resume</a>
                            </i> 
                            <i className="fas fa-envelope-open-text">
                                <a href="gmail.com" className="link" rel="noopener noreferrer">meatripoli@gmail.com</a>
                            </i> 
                            <i className="fas fa-phone">
                                (321) 431-0659
                            </i> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}