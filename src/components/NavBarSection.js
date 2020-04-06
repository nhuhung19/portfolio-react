import React, { useEffect, useState } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

export default function NavBarSection() {
    let [background, setBackground] = useState('nav-bar')

    const onScroll = () => {
        const backgroundcolor = window.scrollY < 100 ? "nav-bar" : "nav-bar-scroll";
            setBackground(backgroundcolor);
    }


    useEffect(() => {
        document.addEventListener("scroll", onScroll)
        // return ()=>document.removeEventListener("scroll", haha)
    }, [])
    // test di, van chay dc nhuwng e k hieu lam
    // ec, no k bi sao ca, e muon giai thich thoy @@
    // test coi, van on a oi
    // ua vay chu no bi gi? e chi? k hieu la useEffect chi chay 1 lan, ma e scroll len xuong no van chay
    // cai funtion nay`, no add 1 effect vao` 1 event. nen chi? can add 1 lan xa`i suot doi` cua component
    // co nghia la neu add event thi chay suot, con` function chi chay 1 lan uh?m
    // lai cai moi :))), e biet rui` tks a
    // ok
    // co truong hop, neu e ca`i eventListener vao` 1 cai gi do, ma muon go~ no ra sau khi chuyen trang
    // thi phai du`ng dong` 15 nhu a la`m 
    // dong 15 tuc la gi ha? a, return la sao? hay la no chay 1 lan roi lan sau no' moi renturn
    // no tu7o7ng duong voi componentWillUnMount
    // la` khi thoat' khoi cai component nay, no' se chay cai function do. 
    // e nho trc coi tren youtube cno bao la chay lan dau k return nhung chay lan sau se~ return
    // return na`y y nghia khac voi return trong function bi`nh thuong
    // roi thiet co document k a. Co, useEffect life cycle, google, oke a ah doi e xiu 
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
                                offset={-50}
                                duration={500}
                            >Experience</Link>
                        </li>
                        <li className="nav-item rounded" style={{ cursor: 'pointer' }}>
                            <Link className="px-3 font-weight-bold"
                                activeclassName="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-10}
                                duration={500}
                            >Projects</Link>
                        </li>
                        <li className="nav-item" style={{ cursor: 'pointer' }}>
                            <Link className="px-3 font-weight-bold"
                                activeclassName="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
