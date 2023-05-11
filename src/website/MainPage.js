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

export default function MainPage() {
    return (
        <>
            <NavBar />
            <div className="intro">
                <div className="container">
                    <div className="container-left">
                        <div className="title homepage-title">
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

            <div className='exp-container margin'>
                <div className='left'><h1>Professional Experience</h1></div>
                <div className='line'></div>
                <div className='right'>
                    <h2>Knomadix</h2>
                    <div className='exp-container-inner'>
                        <h3 className='exp-container-inner-left'><i>Front End Developer Intern</i></h3>
                        <div className='exp-container-inner-right'>
                            <ul className='tech-stack'>
                                <li className='tech-stack-items'>
                                    <FontAwesomeIcon
                                        icon={faReact}
                                        className="homepage-social-icon"
                                    /></li>
                                <li className='tech-stack-items'>
                                    <FontAwesomeIcon
                                        icon={faHtml5}
                                        className="homepage-social-icon"
                                    />
                                </li>
                                <li className='tech-stack-items'>
                                    <FontAwesomeIcon
                                        icon={faCss3}
                                        className="homepage-social-icon"
                                    />
                                </li>
                                <li className='tech-stack-items'>React Redux</li>
                                <li className='tech-stack-items'>Material-UI</li>
                            </ul>
                        </div>
                    </div>
                    <p>Designed and built new responsive layouts and features for an educational based startup company named Knomadix using React.js, HTML,
                        and CSS. Who's mission is to transform how students learn using Artificial Intelligence to leverage insights from assignments to help create personalized lesson plans.</p>
                </div>
            </div>
            <div className="project-section">
                <h1 className="margin">Projects</h1>
                <div className="cards-container">
                    <Card
                        image={TTP}
                        title="Restuarant Website"
                        desc="Built a fullstack web application for a local business"
                    />
                    <Card
                        image={Task}
                        title="Task Tracker App"
                        desc="Built a full-stack web app to allow users to create and track tasks across
                        multiple accounts"
                    />
                    <Card
                        image={Yelp}
                        title="Yelp Couple Helper"
                        desc="Built a full-stack web app that allows two users decide where they want to eat with the help of Yelp's API"
                    />
                    <div class="card-wrapper">
                    </div>
                </div>
            </div>
            <h1>Skills</h1>
        </>

    )
}