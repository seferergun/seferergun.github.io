import React from "react";
import 'scss/style.scss';
import Particles from 'react-particles-js';
import {Fade, Flip, Slide, Zoom} from "react-reveal";
import {Link} from 'react-scroll';
import {Helmet} from "react-helmet";

import profilePhoto from '../images/profile.jpg';
import frontendImage from '../images/front.png';
import backendImage from '../images/backend.png';
import mobileImage from '../images/mobile.png';
import generalImage from '../images/general.png';

const particleParams = {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": false,
                "value_area": 800
            }
        },
        "color": {
            "value": "#2baeca"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#1cc2f5",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "top",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
};

const SkillBlock = (props) => {
    const {imageSrc, title, skills} = props.skill;
    return (
        <div className="flex-d-row skill-block">
            <div className="flex-md-50 flex-100">
                <img src={imageSrc} alt="" className="img-responsive"/>
            </div>
            <div className="flex-md-50 flex-100 text-center">
                <h2 className="text-center">{title}</h2>
                <div className="text-center">
                    {
                        skills.map((skill, index) => {
                            return (<p key={index}>{skill}</p>)
                        })
                    }

                </div>
            </div>
        </div>);

};

const HeaderBar = () => {
    return (<div className="header-bar"/>);
};


const ExperienceBlock = (props) => {
    const {title, date, info} = props.experience;
    return (
        <div className="flex-d-row experience-block text-center text-md-left">
            <h2 className="flex-100 title">{title}</h2>
            <h4 className="flex-100 date">{date}</h4>
            <div className="flex-100">
                {info}
            </div>
        </div>
    );
};


const Index = () => {

    const skills = [
        {
            title: 'Frontend Web Development',
            imageSrc: frontendImage,
            skills: ['Angular', 'React', 'Vue', 'JQuery', 'HTML5', 'CSS3'],
        },
        {
            title: 'Backend Web Development',
            imageSrc: backendImage,
            skills: ['NodeJs', 'ExpressJs', 'Python', 'Django', 'PHP', 'Laravel'],
        },
        {
            title: 'Mobile Development',
            imageSrc: mobileImage,
            skills: ['Native iOS development with Swift', 'Native Android development with Java', 'IONIC', 'React Native'],
        },
        {
            title: 'General Development',
            imageSrc: generalImage,
            skills: ['C and C++', 'Qt Framework', 'Low level programming', 'OpenGL graphics development', 'Game development'],
        },
    ];
    const experiences = [
        {
            title: 'Full Stack Web Developer - TEKBAS Group',
            date: 'JULY 2018 - PRESENT',
            info: (<p className="experience-job-info">Developed internal automation tool for interconnecting multiple
                departments of the company using
                Django/Python and Vue.JS
                Implemented multiple features to old automation tools using PHP/Laravel.
                Worked on micro services that uses MEAN stack.
                Developed internal mobile applications using IONIC.</p>)
        },
        {
            title: 'Full Stack Web Developer and Mobile Developer - SAIL Tech',
            date: 'JUNE 2017 - JUNE 2018',
            info: <p className="experience-job-info">Developed native Android and iOS application of a vehicle tracking
                system that has hundreds of
                active users. Improved performance of the main backend server and improved responsiveness of the website
                of the tracking system using PHP/Laravel.
                Worked on porting front-end code to Angular.
                Created a mobile application of an e-commerce platform using IONIC.</p>
        },
        {
            title: 'Mobile Developer Internship - AKBIM',
            date: 'JUNE 2016 - AUGUST 2016',
            info: (<p className="experience-job-info">Developed native Android application of accounting software
                Dinamik and worked on back-end to
                create API for mobile application</p>)
        }
    ];


    const navbarAnchorRef = React.useRef(null);

    const [showNavbar, setShowNavbar] = React.useState(false);
    const [expandNavbar, setExpandNavbar] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener('scroll', function () {
            const windowTop = this.scrollY;
            const anchorElem = navbarAnchorRef.current;
            if (anchorElem) {
                const anchorTop = anchorElem.offsetTop;
                const shouldShowNavbar = windowTop >= anchorTop;
                setShowNavbar(shouldShowNavbar);
            }
        });

        return () => {
            window.removeEventListener('scroll');
        }
    }, []);


    return (
        <div className="main-content">
            <Helmet>
                <meta charSet="utf-8"/>
                <title>Sefer Ergün's Website</title>
                <meta name="description" content="Sefer Ergün's Personal Website"/>
                <meta name="keywords" content="Sefer,Ergün,JavaScript,Developer,Web,Software,Engineer,Nodejs"/>
                <meta name="author" content="Sefer Ergün"/>
                <link rel="stylesheet"
                      href="https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome-font-awesome.min.css"/>
            </Helmet>
            {/*<Particles params={particleParams} className="particles-container"/>*/}


            <Fade top when={showNavbar}>
                <nav className="navbar">
                    <Slide top cascade when={showNavbar}>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation"
                                onClick={() => setExpandNavbar(!expandNavbar)}>
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <ul className={`navbar-nav ${expandNavbar ? 'expanded' : ''}`}>
                            <li className="nav-item">
                                <Link activeClass="active" to="home" spy={true} smooth={true} duration={500}
                                      className="nav-link">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link activeClass="active" to="aboutMe" spy={true} smooth={true} duration={500}
                                      className="nav-link">
                                    About Me
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link activeClass="active" to="skills" spy={true} smooth={true} duration={500}
                                      className="nav-link">
                                    Skills
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link activeClass="active" to="experiences" spy={true} smooth={true} duration={500}
                                      className="nav-link">
                                    Experiences
                                </Link>
                            </li>
                        </ul>

                    </Slide>

                </nav>
            </Fade>

            <section id="home">
                <div className="initial-header">

                    <h3 className="initial-header-text">
                        Hi, I'm <span className="initial-header-text-name">Sefer Ergün</span> <br/>
                        I'm a full-stack web developer
                    </h3>
                    <Zoom cascade>
                        <div>
                            <a href="mailto:sefer.ergun@outlook.com" target="_blank"
                               className="initial-header-link"><i
                                className="fa fa-envelope"/></a>
                            <a href="https://www.linkedin.com/in/sefer-ergun/" target="_blank"
                               className="initial-header-link"><i
                                className="fa fa-linkedin"/></a>
                            <a href="https://github.com/seferergun" target="_blank" className="initial-header-link"><i
                                className="fa fa-github"/></a>
                        </div>
                    </Zoom>

                    <div>
                        <Flip top>
                            <Link to="aboutMe" smooth={true} duration={500} className="about-me">
                                About Me <i className="fa fa-arrow-down"/>
                            </Link>
                        </Flip>
                    </div>
                </div>
            </section>
            <section className="flex-d-column about-me-block flex-center" id="aboutMe" ref={navbarAnchorRef}>
                <Slide left duration={500}>
                    <Fade>
                        <h1 className="header-title">About
                            Me</h1>
                    </Fade>

                </Slide>
                <Slide left delay={50}>
                    <Fade>
                        <HeaderBar/>
                    </Fade>

                </Slide>

                <div className="flex-d-row flex-center">
                    <div className="flex-100 flex-md-50 text-center">
                        <Zoom>
                            <img src={profilePhoto} alt=""
                                 className="profile-photo"/>
                        </Zoom>
                    </div>
                    <div className="flex-100 flex-md-50">
                        <Slide right>
                            <p className="info">
                                I'm a software developer the graduated from Çukurova University with BSc. I have
                                been
                                programming since the age of 14.

                                Through years I have worked on different projects in several fields. These include
                                the
                                operating system and kernel development, game and game engine development, native
                                and
                                hybrid
                                mobile application development and full-stack web development.
                                <br/>
                                I'm open to freelance jobs and job offerings. You can contact me through my email
                            </p>
                        </Slide>
                    </div>
                </div>
            </section>


            <section className="flex-d-column flex-center" id="skills">
                <Fade>
                    <div>
                        <Slide right>
                            <h1 className='header-title'>Skills</h1>
                        </Slide>
                        <Slide right>
                            <h3 className='header-subtitle'>Languages
                                and Frameworks that I have used and have experince with</h3>
                        </Slide>
                        <Slide right>
                            <HeaderBar/>
                        </Slide>
                    </div>
                </Fade>


                {
                    skills.map((skill, index) => {
                        return (
                            <Zoom key={index}>
                                <SkillBlock skill={skill}/>
                            </Zoom>
                        );
                    })
                }
            </section>
            <section className="flex-d-column flex-center" id="experiences">
                <Fade left>
                    <div>
                        <Slide left>
                            <h2 className="header-title">Experiences</h2>
                        </Slide>
                        <Slide left delay={50}>
                            <HeaderBar/>
                        </Slide>
                    </div>
                </Fade>
                {
                    experiences.map((experience, index) => {
                        return (
                            <Zoom key={index}>
                                <ExperienceBlock experience={experience}/>

                            </Zoom>
                        );
                    })
                }
            </section>
        </div>
    );
};

export default Index;
