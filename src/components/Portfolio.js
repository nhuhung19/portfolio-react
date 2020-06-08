import React from 'react'
import imgGame from '../image/canvas-game-1.png'
import imgTwitter from '../image/twitter-3.png'
import imgMovie from '../image/movie-app-1.png'
import imgCakeTime from '../image/final-project-1.png'
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';

export default function Portfolio() {
    return (
        <div className="container jumbotron mt-5" id="projects" >
            <h1 className="text-center">My Projects</h1>
            <div className="row mt-5">
                <Fade top>
                    <div className="col-lg-6">
                        <div className="card" style={{ width: '18rem;' }}>
                            <a href="https://nhuhung-canvas-game.netlify.com">
                                <img className="w-100 h-100" src={imgGame} className="card-img-top" alt="img" />
                            </a>
                            <div className="card-body">
                                <h5 className="card-title text-center">Dark Castle (Canvas Game HTML 5 - JS)</h5>
                                <div className="text-center">
                                    <button className="btn btn-success mx-2"><a style={{ color: 'white' }} href="https://nhuhung-canvas-game.netlify.com" className="card-link">Live Demo</a></button>
                                    <button className="btn btn-info "><a style={{ color: 'white' }} href="https://github.com/nhuhung19/canvas_game_starter" className="card-link">Github Repo</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className="col-lg-6">
                        <div className="card w-100 h-100" style={{ width: '18rem;' }}>
                            <a href="https://twitter-clone-js.netlify.com">
                                <img className="w-100 h-100" src={imgTwitter} className="card-img-top" alt="img" />
                            </a>
                            <div className="card-body mt-5">
                               
                                <h5 className="card-title text-center">Twitter Clone (Group Project JS)</h5>
                                <div className="text-center">

                                    <button className="btn btn-success mx-2"><a style={{ color: 'white' }} href="https://twitter-clone-js.netlify.com" className="card-link">Live Demo</a></button>
                                    <button className="btn btn-info "><a style={{ color: 'white' }} href="https://github.com/nhuhung19/clone-twitter" className="card-link">Github Repo</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
            <div className="row mt-5">
                <Fade left>
                    <div className="col-lg-6">
                        <div className="card" style={{ width: '18rem;' }}>
                            <a href="https://hungta-movie-app.netlify.com"><img className="w-100 h-100" src={imgMovie} className="card-img-top" alt="img" /></a>
                            <div className="card-body">
                                <h5 className="card-title text-center">Movie IMDB (React JS)</h5>
                                <div className="text-center">
                                    <button className="btn btn-success mx-2"><a style={{ color: 'white' }} href="https://hungta-movie-app.netlify.com" className="card-link">Live Demo</a></button>
                                    <button className="btn btn-info "><a style={{ color: 'white' }} href="https://github.com/nhuhung19/react-movie-app" className="card-link">Github Repo</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <div className="col-lg-6">
                        <div className="card" style={{ width: '18rem;' }}>
                            <a href="https://e-commerce-caketime.netlify.app">
                                <img className="w-100 h-100" src={imgCakeTime} className="card-img-top" alt="img" />
                            </a>
                            <div className="card-body">
                                <h5 className="card-title text-center">Cake Time (Final Project)</h5>
                                <div className="text-center">
                                    <button className="btn btn-success mx-2"><a style={{ color: 'white' }} href="https://e-commerce-caketime.netlify.app" className="card-link">Live Demo</a></button>
                                    <button className="btn btn-info "><a style={{ color: 'white' }} href="https://github.com/nhuhung19/cake-time" className="card-link">Github Repo</a></button>
                                </div>
                            </div>

                        </div>
                    </div>
                </Fade>
            </div>
        </div >

    )
}
