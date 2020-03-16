import NavBar from './navBar';
import Link from 'next/link';
export default function Projects() {
    return (<>
        <NavBar></NavBar>
        <div className="container">
            <div className="row">
                <section className="projtags">
                    <div className="projtagname" id="groupProject1">GetAway</div>
                    <Link href="https://meatripoli.github.io/GetAway/">
                        <a className="imglink" href="" alt="sample image1" target="_blank" rel="noopener noreferrer">
                            <img className="figure-img rounded float-left" src="/img/groupProject1.jpg" alt=""/>
                        </a>
                    </Link>
                </section>
                <section className="projtags">
                    <div className="projtagname" id="hang">HiFi</div>
                    <Link href="https://nameless-lowlands-48961.herokuapp.com/login">
                        <a className="imglink" href="" alt="sample image1" target="_blank" rel="noopener noreferrer">
                            <img className="figure-img rounded float-left" src="/img/Pic10.png" alt=""/>
                        </a>
                    </Link>
                </section>
            </div>
            <div className="row">
                <section className="projtags">
                    <div className="projtagname" id="hang">Password Generator</div>
                    <Link href="https://meatripoli.github.io/PasswordGenerator/">
                        <a className="imglink" href="" alt="sample image3" target="_blank" rel="noopener noreferrer">
                            <img className="figure-img rounded float-left" src="/img/Pic11.png" alt=""/>
                        </a>
                    </Link>
                </section>
                <section className="projtags">
                    <div className="projtagname" id="hang">Employee Management System</div>
                    <Link href="https://github.com/meatripoli/EmployeeManagementSystem">
                        <a className="imglink" href="" alt="sample image4" target="_blank" rel="noopener noreferrer">
                            <img className="figure-img rounded float-left" src="/img/employee-tracker.gif" alt=""/>
                        </a>
                    </Link>
                </section>
            </div>
            <div className="row">
                <section className="projtags">
                    <div className="projtagname" id="hang">Burger Restaurant</div>
                    <Link href="https://github.com/meatripoli/BurgerRestaurant">
                        <a className="imglink" href="" alt="sample image5" target="_blank" rel="noopener noreferrer">
                            <img className="figure-img rounded float-left" src="/img/Pic7.png" alt=""/>
                        </a>
                    </Link>
                </section>  
                <section className="projtags">
                    <div className="projtagname" id="hang">Mortgage Calculator</div>
                    <Link href="https://github.com/meatripoli/ChallengeMortgageCalculator">
                        <a className="imglink" alt="sample image2" target="_blank" rel="noopener noreferrer">
                            <img className="figure-img rounded float-left" src="/img/Pic9.png" alt=""/>
                        </a>
                    </Link>
                </section>    
            </div>
        </div>
    </>);
}