import {Carousel,Button,Container } from 'react-bootstrap';
import {useState} from 'react';

export default () =>{
    const [show, setShow] = useState(false);
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const handleModal = () => show?setShow(false):setShow(true);
    return (<>
        <Button variant="link" onClick={handleModal} style={{color: 'darkslateblue'}}>Work</Button>
        <Container>
            <Carousel indicators={false} slide={false} activeIndex={index} onSelect={handleSelect} style={show?{display:'inherit',background:'none',border:'none'}:{display:'none',background:'none'}}>
                <Carousel.Item>
                    <img className="figure-img rounded float-left" src="/img/dogtraining.png" alt=""/>
                    <Carousel.Caption >
                        <h3 className='carouselStyle'>Dog Training Manager App</h3>
                        <footer>
                            <a href="https://dog-training-manager.herokuapp.com/dogs" className="carouselStyle" rel="noopener noreferrer">Demo</a>
                            <a href="https://github.com/meatripoli/FinalProject_Next" className="carouselStyle">Repo</a>
                        </footer>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="figure-img rounded float-left" src="/img/Pic1.png" alt=""/>
                    <Carousel.Caption style={{background:'white'}}>
                        <h3 className='carouselStyle'>Employee Directory App</h3>
                        <footer>
                            <a href="https://still-taiga-58652.herokuapp.com/" className="carouselStyle" rel="noopener noreferrer">Demo</a>
                            <a href="https://github.com/meatripoli/EmployeeDirectory_React" className="carouselStyle">Repo</a>
                        </footer>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="figure-img rounded float-left" src="/img/Pic10.png" alt=""/>
                    <Carousel.Caption style={{background:'white'}}>
                    <h3 className='carouselStyle'>HiFi</h3>
                    <footer>
                        <a href="https://nameless-lowlands-48961.herokuapp.com/login" className="carouselStyle" rel="noopener noreferrer">Demo</a>
                        <a href="https://github.com/meatripoli/HiFi" className="carouselStyle">Repo</a>
                    </footer>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="figure-img rounded float-left" src="/img/Pic11.png" alt=""/>
                    <Carousel.Caption style={{background:'white'}}>
                        <h3 className='carouselStyle'>Password Generator</h3>
                        <footer>
                            <a href="https://meatripoli.github.io/PasswordGenerator/" className="carouselStyle" rel="noopener noreferrer">Demo</a>
                            <a href="https://github.com/meatripoli/PasswordGenerator" className="carouselStyle">Repo</a>
                        </footer>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="figure-img rounded float-left" src="/img/Pic9.png" alt=""/>
                    <Carousel.Caption style={{background:'white'}}>
                        <h3 className='carouselStyle'>Mortgage Calculator</h3>
                        <footer>
                            <a href="https://github.com/meatripoli/ChallengeMortgageCalculator" className="carouselStyle">Repo</a>
                        </footer>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    </>)
}