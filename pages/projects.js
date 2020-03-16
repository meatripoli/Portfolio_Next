import NavBar from './navBar';
import Link from 'next/link';
export default function Projects() {
    return (<>
        <NavBar></NavBar>
        <div className="container">
            <div className="row">
                <section className="projtags">
                    <div className="projtagname" id="groupProject1">Employee Directory App</div>
                    <Link href="https://still-taiga-58652.herokuapp.com/">
                        <a className="imglink" target="_blank" rel="noopener noreferrer">
                            <img className="figure-img rounded float-left" src="/img/Pic1.png" alt=""/>
                        </a>
                    </Link>
                </section>
                <section className="projtags">
                    <div className="projtagname" id="hang">HiFi</div>
                    <Link href="https://nameless-lowlands-48961.herokuapp.com/login">
                        <a className="imglink" target="_blank" rel="noopener noreferrer">
                            <img className="figure-img rounded float-left" src="/img/Pic10.png" alt=""/>
                        </a>
                    </Link>
                </section>
            </div>
            <div className="row">
                <section className="projtags">
                    <div className="projtagname" id="hang">Password Generator</div>
                    <Link href="https://meatripoli.github.io/PasswordGenerator/">
                        <a className="imglink" target="_blank" rel="noopener noreferrer">
                            <img className="figure-img rounded float-left" src="/img/Pic11.png" alt=""/>
                        </a>
                    </Link>
                </section>
                <section className="projtags">
                    <div className="projtagname" id="hang">Employee Directory Search App</div>
                    <Link href="https://github.com/meatripoli/EmployeeManagementSystem">
                        <a className="imglink" target="_blank" rel="noopener noreferrer">
                            <img className="figure-img rounded float-left" src="/img/employee-tracker.gif" alt=""/>
                        </a>
                    </Link>
                </section>
            </div>
            <div className="row">
                <section className="projtags">
                    <div className="projtagname" id="hang">Burger Restaurant</div>
                    <Link href="https://hidden-peak-22222.herokuapp.com/">
                        <a className="imglink" target="_blank" rel="noopener noreferrer">
                            <img className="figure-img rounded float-left" src="/img/Pic7.png" alt=""/>
                        </a>
                    </Link>
                </section>  
                <section className="projtags">
                    <div className="projtagname" id="hang">Mortgage Calculator</div>
                    <Link href="https://github.com/meatripoli/ChallengeMortgageCalculator">
                        <a className="imglink" target="_blank" rel="noopener noreferrer">
                            <img className="figure-img rounded float-left" src="/img/Pic9.png" alt=""/>
                        </a>
                    </Link>
                </section>    
            </div>
        </div>
    </>);
}