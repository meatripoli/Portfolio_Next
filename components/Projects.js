import {Carousel,Button,Container } from 'react-bootstrap';
import {useState} from 'react';

export default (props) =>{
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (<>
        <Button variant="link" onClick={()=>props.animation(props.tabID)} style={{color: 'darkslateblue',fontSize: '25px'}}>Work</Button>
        <Container>
            <Carousel 
            indicators={false} 
            slide={false} 
            activeIndex={index} 
            onSelect={handleSelect} 
            className={props.show?'animated fadeIn':'styleBefore'}>
                <Carousel.Item>
                    <img className="figure-img rounded float-left" src="/img/dogtraining.png" alt=""/>
                    <Carousel.Caption >
                        <h3 className='carouselStyle'>Dog Training Manager App</h3>
                        <footer>
                            <a href="https://dog-training-manager.herokuapp.com/dogs" target="_blank" className="carouselStyle" rel="noopener noreferrer">Demo</a>
                            <a href="https://github.com/meatripoli/FinalProject_Next" target="_blank" className="carouselStyle">Repo</a>
                        </footer>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="figure-img rounded float-left" src="/img/Pic1.png" alt=""/>
                    <Carousel.Caption style={{background:'white'}}>
                        <h3 className='carouselStyle'>Employee Directory App</h3>
                        <footer>
                            <a href="https://still-taiga-58652.herokuapp.com/" target="_blank" className="carouselStyle" rel="noopener noreferrer">Demo</a>
                            <a href="https://github.com/meatripoli/EmployeeDirectory_React" target="_blank" className="carouselStyle">Repo</a>
                        </footer>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="figure-img rounded float-left" src="/img/Pic10.png" alt=""/>
                    <Carousel.Caption style={{background:'white'}}>
                    <h3 className='carouselStyle'>HiFi</h3>
                    <footer>
                        <a href="https://nameless-lowlands-48961.herokuapp.com/login" target="_blank" className="carouselStyle" rel="noopener noreferrer">Demo</a>
                        <a href="https://github.com/meatripoli/HiFi" target="_blank" className="carouselStyle">Repo</a>
                    </footer>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="figure-img rounded float-left" src="/img/Pic11.png" alt=""/>
                    <Carousel.Caption style={{background:'white'}}>
                        <h3 className='carouselStyle'>Password Generator</h3>
                        <footer>
                            <a href="https://meatripoli.github.io/PasswordGenerator/" target="_blank" className="carouselStyle" rel="noopener noreferrer">Demo</a>
                            <a href="https://github.com/meatripoli/PasswordGenerator" target="_blank" className="carouselStyle">Repo</a>
                        </footer>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="figure-img rounded float-left" src="/img/Pic9.png" alt=""/>
                    <Carousel.Caption style={{background:'white'}}>
                        <h3 className='carouselStyle'>Mortgage Calculator</h3>
                        <footer>
                            <a href="https://github.com/meatripoli/ChallengeMortgageCalculator" target="_blank" className="carouselStyle">Repo</a>
                        </footer>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    </>)
}