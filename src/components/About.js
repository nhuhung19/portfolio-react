import React from 'react'
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import image from '../image/profile-picture-2.jpg'

export default function About() {
    return (
        <div className="container my-5" >
            <div className="shadow-sm px-3 bg-white rounded py-5">
                <Flip>
                    <h1 className="text-center" id="about">About Me</h1>
                </Flip>
                <div className="row">
                    <Fade left>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-6 mt-4">
                                    <img className="w-100 rounded" src={image} alt="img" />
                                </div>
                                <div className="col-lg-6">
                                    <div className="mt-3"><strong>Full Name: </strong><em> Hung Ta Nhu </em></div>
                                    <div className="mt-3"><strong>Profile:</strong><em> Full Stack Developer </em></div>
                                    <div className="mt-3"><strong>Email:</strong><em> nhuhung19@gmail.com </em></div>
                                    <div className="mt-3"><strong>Address: </strong><em> 17/15 Binh Hung, Binh Chanh, Ho Chi Minh city </em></div>
                                    <div className="mt-3"><strong>Phone:</strong><em> 0778-340-357 </em></div>
                                    <h2 className="mt-3">Full-Stack <span className="text-success">Web Developer</span> From VietNam</h2>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="col-lg-6 about-text">
                            <p> </p>
                            <p> - After 2 years as a math teacher, I realized that coding will be a bright career path for my life. I started coding with the effort and passion to make my dream come true.</p>
                            <p> - I love to work with people around me who has passionate coding, professional and funny.</p>
                            <p> - As a dynamic, enthusiastic developer with high flexibility to adapt to new working environment, I am seeking for opportunities to improve myself, as well as contribute to the company.</p>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

