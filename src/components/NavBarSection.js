import React, { useEffect, useState } from 'react'
import { Link} from "react-scroll";

export default function NavBarSection() {
    let [background, setBackground] = useState('nav-bar')

    const onScroll = () => {
        const backgroundcolor = window.scrollY < 100 ? "nav-bar" : "nav-bar-scroll";
            setBackground(backgroundcolor);
    }
    useEffect(() => {
        document.addEventListener("scroll", onScroll)
    }, [])

    return (

        <nav className={`navbar ${background} px-5 navbar-expand-lg navbar-light fixed-top`}>
            <div className="container my-2">
                <span className="nav-branch font-weight-bold">Hung Portfolio</span>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li classNameName="nav-item active" style={{ cursor: 'pointer' }}>
                            <Link className="px-3 font-weight-bold"
                                activeclassName="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >Home</Link>
                        </li>
                        <li className="nav-item" style={{ cursor: 'pointer' }}>
                            <Link className="px-3 font-weight-bold"
                                activeclassName="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                            >About</Link>
                        </li>
                        <li className="nav-item" style={{ cursor: 'pointer' }}>
                            <Link className="px-3 font-weight-bold"
                                activeclassName="active"
                                to="experience"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
                            >Experience</Link>
                        </li>
                        <li className="nav-item rounded" style={{ cursor: 'pointer' }}>
                            <Link className="px-3 font-weight-bold"
                                activeclassName="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}
                            >Projects</Link>
                        </li>
                        <li className="nav-item" style={{ cursor: 'pointer' }}>
                            <Link className="px-3 font-weight-bold"
                                activeclassName="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
                            >Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
