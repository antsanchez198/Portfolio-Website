import './MainPage.css';
import NavBar from './NavBar';
import Card from './Card';
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
    faReact,
    faHtml5,
    faCss3,
} from "@fortawesome/free-brands-svg-icons";
import Task from "./images/Task Tracker.jpg";
import Yelp from "./images/Yelp.jpg";
import TTP from "./images/ttp.jpg";
import checkIcon from "./images/circle-check-solid.svg"

export default function MainPage() {
    return (
        <>
            <NavBar />
            <div className="intro">
                <div className="container">
                    <div className="container-left">
                        <div className="title homepage-title ">
                            Frontend Web Developer
                        </div>
                        <div className="subtitle homepage-subtitle">
                            I am a backend developer with expertise in Node.js. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.
                        </div>
                        <div className="homepage-socials">
                            <a
                                href="https://www.linkedin.com/in/anthony-sanchez-0b334020a/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    className="homepage-social-icon"
                                />
                            </a>
                            <a
                                href="https://github.com/antsanchez198"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    className="homepage-social-icon"
                                />
                            </a>
                            <a
                                // href={`mailto:${INFO.main.email}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faMailBulk}
                                    className="homepage-social-icon"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="container-right">
                        <img className="img" src="/myheadshot.png"></img>
                    </div>
                </div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='wave-top'><path fill="#FFFFFF" fill-opacity="1" d="M0,160L60,138.7C120,117,240,75,360,101.3C480,128,600,224,720,234.7C840,245,960,171,1080,165.3C1200,160,1320,224,1380,256L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            <div className='exp-container'>
                <h1>Professional Experience</h1>
                <div className='exp-container-inner'>
                    <div className='left'>
                        <h1>Knomadix</h1>
                        <h4><i>Front End Developer Intern</i></h4>
                    </div>
                    <div className='right'>
                        <div>
                            <img src={checkIcon}></img>
                            <p>Creatively designed and developed two responsive layouts using React, HTML, and CSS which improved the readability of information presented to end users by 30%</p>
                        </div>
                        <div>
                            <img src={checkIcon}></img>
                            <p>Collaborated closely with both backend developers to implement over 10+ new APIs using React Redux, improving the accessibility and management of dozens of APIs for the team</p>
                        </div>
                        <div>
                            <img src={checkIcon}></img>
                            <p>Collaborated closely with both backend developers to implement over 10+ new APIs using React Redux, improving the accessibility and management of dozens of APIs for the team</p>
                        </div>
                        <div>
                            <img src={checkIcon}></img>
                            <p>Handled and manipulated JSON Data accordingly to best display assignment and subscription details on tables, graphs, and dashboards using Material UI components</p>
                        </div>
                        <div>
                            <img src={checkIcon}></img>
                            <p>Set up interactive forms using JavaScript from the UI and utilized APIs to successfully update subscription plans, notifications, and school and user information</p>
                        </div>
                        <div>
                            <ul className='exp-tech-stack'>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Material UI</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='wave-bottom'><path fill="#FFFFFF" fill-opacity="1" d="M0,160L60,138.7C120,117,240,75,360,101.3C480,128,600,224,720,234.7C840,245,960,171,1080,165.3C1200,160,1320,224,1380,256L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>

            <div className="project-section">
                <h1 className="projects-title">Projects</h1>
                <div className="cards-container margin">
                    <Card
                        image={TTP}
                        title="Restuarant Website"
                        desc="Built a fullstack web application for a local business"
                        projectLink="https://ttp-capstone-project.netlify.app/"
                        sourceLink="https://github.com/antsanchez198/Restaurant-Backend"
                    />
                    <Card
                        image={Task}
                        title="Task Tracker App"
                        desc="Built a full-stack web app to allow users to create and track tasks across
                        multiple accounts"
                        projectLink="https://dev.d1k8dokfdo58j9.amplifyapp.com/"
                        sourceLink="https://github.com/ya-miao/task-tracker"
                    />
                    <Card
                        image={Yelp}
                        title="Yelp Couple Helper"
                        desc="Built a full-stack web app that allows two users decide where they want to eat with the help of Yelp's API"
                        projectLink="https://lighthall-hangman-coral.vercel.app/"
                        sourceLink="https://github.com/ya-miao/lighthall-hangman"
                    />
                    <Card
                        image={Yelp}
                        title="Yelp Couple Helper"
                        desc="Built a full-stack web app that allows two users decide where they want to eat with the help of Yelp's API"
                        projectLink="https://lighthall-hangman-coral.vercel.app/"
                        sourceLink="https://github.com/ya-miao/lighthall-hangman"
                    />

                </div>
            </div>
            <h1>Skills</h1>
        </>

    )
}