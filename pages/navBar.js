import Link from 'next/link';

export default function NavBar() {
    return (<nav className="navbar navbar-light bg-light navbar-expand-md">
        <div id="header">Maria Tripoli</div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link href="/index">
                        <a className="nav-link" id="navacolor" href="index.html">About <span className="sr-only">(current)</span></a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/projects">
                        <a className="nav-link" id="navpcolor" href="portfolio.html">Projects</a>
                    </Link>
                </li>
            </ul>
        </div>
    </nav>);
}