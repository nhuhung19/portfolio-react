import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar, { ElementsWrapper } from 'react-scrolling-nav';
import ScrollUpButton from "react-scroll-up-button";
import NavBarSection from './components/NavBarSection'
import About from './components/About'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Banner from './components/Banner'

function App() {
    return (
        <div>
            <div>
                {/* <div className="container">
                <NavBarSection />
                </div> */}
                <Banner />
                <About />
                <Experience />
                <Portfolio />
                <Contact />
            </div>
            <ScrollUpButton
                StopPosition={0}
                ShowAtPosition={150}
                EasingType='easeOutCubic'
                AnimationDuration={500}
                ContainerClassName='ScrollUpButton__Container'
                TransitionClassName='ScrollUpButton__Toggled'
                style={{}}
                ToggledStyle={{}}
            />
        </div>
    );
}

export default App;
