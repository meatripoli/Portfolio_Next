import NavBar from './navBar';
import Link from 'next/link';
export default function Projects() {
    return (<>
        <NavBar></NavBar>
        <div className="container">
            <div className="row">
                <section className="projtags">
                    <div className="projtagname" id="groupProject1">GetAway</div>
                    <Link href="">
                        <a className="imglink" href="https://meatripoli.github.io/GetAway/" alt="sample image1" target="_blank" rel="noopener noreferrer">
                            <img className="figure-img rounded float-left" src="" alt=""/>
                        </a>
                    </Link>
                </section>
                <section className="projtags">
                    <div className="projtagname" id="hang">HiFi</div>
                    <Link href="">
                        <a className="imglink" href="https://nameless-lowlands-48961.herokuapp.com/login" alt="sample image1" target="_blank" rel="noopener noreferrer">
                            <img className="figure-img rounded float-left" src="" alt=""/>
                        </a>
                    </Link>
                </section>
            </div>
            <div className="row">
                <section className="projtags">
                    <div className="projtagname" id="hang">Password Generator</div>
                    <Link href="">
                        <a className="imglink" href="https://meatripoli.github.io/PasswordGenerator/" alt="sample image3" target="_blank" rel="noopener noreferrer">
                            <img className="figure-img rounded float-left" src="" alt=""/>
                        </a>
                    </Link>
                </section>
                <section className="projtags">
                    <div className="projtagname" id="hang">Employee Management System</div>
                    <Link href="">
                        <a className="imglink" href="https://github.com/meatripoli/EmployeeManagementSystem" alt="sample image4" target="_blank" rel="noopener noreferrer">
                            <img className="figure-img rounded float-left" src="" alt=""/>
                        </a>
                    </Link>
                </section>
            </div>
            <div className="row">
                <section className="projtags">
                    <div className="projtagname" id="hang">Burger Restaurant</div>
                    <Link href="">
                        <a className="imglink" href="https://github.com/meatripoli/BurgerRestaurant" alt="sample image5" target="_blank" rel="noopener noreferrer">
                            <img className="figure-img rounded float-left" src="" alt=""/>
                        </a>
                    </Link>
                </section>  
                <section className="projtags">
                    <div className="projtagname" id="hang">Mortgage Calculator</div>
                    <Link href="">
                        <a className="imglink" href="https://github.com/meatripoli/ChallengeMortgageCalculator" alt="sample image2" target="_blank" rel="noopener noreferrer">
                            <img className="figure-img rounded float-left" src="" alt=""/>
                        </a>
                    </Link>
                </section>    
            </div>
        </div>
    </>);
}