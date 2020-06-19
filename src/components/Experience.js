import React, { useState } from 'react'
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faUniversity } from '@fortawesome/free-solid-svg-icons'
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';

export default function Experience() {
    let [educations, setEducations] = useState(false)
    let [skills, setSkills] = useState(false)
    let toggleEdu = () => {
        setEducations(!educations)
    }
    let toggleSkill = () => {
        setSkills(!skills)
    }
    const showEducations =
        <div className="col-lg-6 w-100 shadow-sm p-3 mb-5 bg-white">
            <Fade bottom cascade>
                <OverlayTrigger
                    placement="right"
                    overlay={
                        <Tooltip>
                            View <strong>Experiences</strong>.
                        </Tooltip>
                    }
                >
                    <Button onClick={toggleEdu} variant="secondary"><h2>Educations</h2></Button>
                </OverlayTrigger>
                <div className="mt-3">
                    <h4> <FontAwesomeIcon icon={faGraduationCap} /> Hai Phong University</h4>
                    <p>Durations: (5 years) From July 2013 - June 2018</p>
                    <p>Major: Bachelor of Mathematic </p>
                    <p>Major: Mathematical Pedagogy </p>
                </div>
                <div>
                    <h4> <FontAwesomeIcon icon={faGraduationCap} /> Coder Scholl</h4>
                    <p>Durations: (3 months) From Ferbuary 2020 - May 2020</p>
                    <p>Full Stack Web Developer</p>
                </div>
            </Fade >
        </div>
    const softSkills =
        <div className="col-lg-6 shadow-sm p-3 mb-5 bg-white">
            <Fade  right cascade>
                <OverlayTrigger
                    placement="right"
                    overlay={
                        <Tooltip>
                            View <strong>Programming Skills</strong>.
                        </Tooltip>
                    }
                >
                    <Button onClick={toggleSkill} variant="secondary"><h2>Soft Skills</h2></Button>
                </OverlayTrigger>
                <main class="main">
                    <p>Team Work 80%</p>
                    <div class="rounded-pill" style={{ width: '100%', height: '14px', border: '1px solid #eeeeee;', padding: '4px 2px 1px;' }}>
                        <div class="rounded-pill" style={{ width: '100%', height: '10px', background: '#777777' }}>
                            <div class="rounded-pill" style={{ width: '80%', height: '10px', backgroundImage: '-webkit-linear-gradient(0deg, #766dff 0%, #88f3ff 100%)' }}></div>
                        </div>
                    </div>
                    <p>Sefl Learning 75%</p>
                    <div className="rounded-pill" style={{ width: '100%', height: '14px', border: '1px solid #eeeeee;', padding: '4px 2px 1px;' }}>
                        <div className="rounded-pill" style={{ width: '100%', height: '10px', background: '#777777' }}>
                            <div className="rounded-pill" style={{ width: '75%', height: '10px', backgroundImage: '-webkit-linear-gradient(0deg, #766dff 0%, #88f3ff 100%)' }}></div>
                        </div>
                    </div>
                    <p>Problem Solve 80%</p>
                    <div className="rounded-pill" style={{ width: '100%', height: '14px', border: '1px solid #eeeeee;', padding: '4px 2px 1px;' }}>
                        <div className="rounded-pill" style={{ width: '100%', height: '10px', background: '#777777' }}>
                            <div className="rounded-pill" style={{ width: '80%', height: '10px', backgroundImage: '-webkit-linear-gradient(0deg, #766dff 0%, #88f3ff 100%)' }}></div>
                        </div>
                    </div>
                    <p>Adaptability 75%</p>
                    <div className="rounded-pill" style={{ width: '100%', height: '14px', border: '1px solid #eeeeee;', padding: '4px 2px 1px;' }}>
                        <div className="rounded-pill" style={{ width: '100%', height: '10px', background: '#777777' }}>
                            <div className="rounded-pill" style={{ width: '75%', height: '10px', backgroundImage: '-webkit-linear-gradient(0deg, #766dff 0%, #88f3ff 100%)' }}></div>
                        </div>
                    </div>
                    <p>Working under pressure 75%</p>
                    <div className="rounded-pill" style={{ width: '100%', height: '14px', border: '1px solid #eeeeee;', padding: '4px 2px 1px;' }}>
                        <div className="rounded-pill" style={{ width: '100%', height: '10px', background: '#777777' }}>
                            <div className="rounded-pill" style={{ width: '75%', height: '10px', backgroundImage: '-webkit-linear-gradient(0deg, #766dff 0%, #88f3ff 100%)' }}></div>
                        </div>
                    </div>
                </main>
            </Fade >
        </div>
    return (
        <div className="bg-experiences" id="experience">
            <div className="intro w-100 h-100 d-flex align-items-center">
                <div className="container shadow-sm mb-5 rounded p-5" style={{ backgroundColor: '#f5f5f5' }}>
                    <div className="row" >
                        {educations ? showEducations :
                            <div className="col-lg-6 shadow-sm p-3 mb-5 bg-white">
                                <Fade left>
                                    <OverlayTrigger
                                        placement="right"
                                        overlay={
                                            <Tooltip>
                                                View <strong>Educations</strong>.
                                        </Tooltip>
                                        }
                                    >
                                        <Button onClick={toggleEdu} variant="secondary"><h2>Experiences</h2></Button>
                                    </OverlayTrigger>
                                    <p className="mt-3"> <FontAwesomeIcon icon={faUniversity}/> July 2013 - June 2018: Study at Hai Phong University major in mathematical pedagogy and bachelor of mathematic.</p>
                                    <p> <FontAwesomeIcon icon={faBriefcase}/> September 2018 - December 2018: Math teacher at Tran Hung Dao secondary school, Distric 12, Ho Chi Minh city.</p>
                                    <p> <FontAwesomeIcon icon={faBriefcase}/> January 2019 - December 2019: Math teacher at Phan Tay Ho sencondary school, Distric Go Vap, Ho Chi Minh city.</p>
                                    <p> <FontAwesomeIcon icon={faUniversity}/> Ferbuary 2020 - Now: Study at "Coder School", Ho Chi Minh city. </p>
                                </Fade>
                            </div>
                        }
                        {skills ? softSkills :
                        <div className="col-lg-6 shadow-sm p-3 mb-5 bg-white">
                            <LightSpeed left cascade>
                                <OverlayTrigger
                                    placement="right"
                                    overlay={
                                        <Tooltip>
                                            View <strong>Soft Skills</strong>.
                                    </Tooltip>
                                    }
                                >
                                    <Button onClick={toggleSkill} variant="secondary"><h2>Programming Skills</h2></Button>
                                </OverlayTrigger>
                                <main class="main">
                                    <p>HTML5 & CSS 85%</p>
                                    <div class="rounded-pill" style={{ width: '100%', height: '14px', border: '1px solid #eeeeee;', padding: '4px 2px 1px;' }}>
                                        <div class="rounded-pill" style={{ width: '100%', height: '10px', background: '#777777' }}>
                                            <div class="rounded-pill" style={{ width: '85%', height: '10px', backgroundImage: '-webkit-linear-gradient(0deg, #766dff 0%, #88f3ff 100%)' }}></div>
                                        </div>
                                    </div>
                                    <p>Javascript 80%</p>
                                    <div className="rounded-pill" style={{ width: '100%', height: '14px', border: '1px solid #eeeeee;', padding: '4px 2px 1px;' }}>
                                        <div className="rounded-pill" style={{ width: '100%', height: '10px', background: '#777777' }}>
                                            <div className="rounded-pill" style={{ width: '80%', height: '10px', backgroundImage: '-webkit-linear-gradient(0deg, #766dff 0%, #88f3ff 100%)' }}></div>
                                        </div>
                                    </div>
                                    <p>ReactJS 85%</p>
                                    <div className="rounded-pill" style={{ width: '100%', height: '14px', border: '1px solid #eeeeee;', padding: '4px 2px 1px;' }}>
                                        <div className="rounded-pill" style={{ width: '100%', height: '10px', background: '#777777' }}>
                                            <div className="rounded-pill" style={{ width: '85%', height: '10px', backgroundImage: '-webkit-linear-gradient(0deg, #766dff 0%, #88f3ff 100%)' }}></div>
                                        </div>
                                    </div>
                                    <p>Node JS 75%</p>
                                    <div className="rounded-pill" style={{ width: '100%', height: '14px', border: '1px solid #eeeeee;', padding: '4px 2px 1px;' }}>
                                        <div className="rounded-pill" style={{ width: '100%', height: '10px', background: '#777777' }}>
                                            <div className="rounded-pill" style={{ width: '70%', height: '10px', backgroundImage: '-webkit-linear-gradient(0deg, #766dff 0%, #88f3ff 100%)' }}></div>
                                        </div>
                                    </div>
                                    <p>Git 75%</p>
                                    <div className="rounded-pill" style={{ width: '100%', height: '14px', border: '1px solid #eeeeee;', padding: '4px 2px 1px;' }}>
                                        <div className="rounded-pill" style={{ width: '100%', height: '10px', background: '#777777' }}>
                                            <div className="rounded-pill" style={{ width: '75%', height: '10px', backgroundImage: '-webkit-linear-gradient(0deg, #766dff 0%, #88f3ff 100%)' }}></div>
                                        </div>
                                    </div>
                                </main>
                            </LightSpeed>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
