import './MainPage.css';
import NavBar from './NavBar';
import Card from './Card';
import { faMailBulk, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Task from "./images/Task Tracker.png";
import Yelp from "./images/Yelp.png";
import Realtor from "./images/Realtor.jpg";
import Hangman from "./images/Hangman.png";
import checkIcon from "./images/circle-check-solid.svg";
import { useEffect } from 'react';

export default function MainPage() {

    useEffect(() => {
        const slideElements = document.querySelectorAll('.hidden');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.target.className.includes("exp-container-inner")) {
                    entry.target.classList.toggle("bounceIn", entry.isIntersecting);
                }
                if (entry.target.className.includes("first")) {
                    entry.target.classList.toggle("frontend", entry.isIntersecting);
                }
                if (entry.target.className.includes("second")) {
                    entry.target.classList.toggle("backend", entry.isIntersecting);
                }
                if (entry.target.className.includes("third")) {
                    entry.target.classList.toggle("database", entry.isIntersecting);
                }
                if (entry.target.className.includes("firstLogo")) {
                    entry.target.classList.toggle("firstLogo1", entry.isIntersecting);
                }
                if (entry.target.className.includes("secondLogo")) {
                    entry.target.classList.toggle("secondLogo2", entry.isIntersecting);
                }
                if (entry.target.className.includes("thirdLogo")) {
                    entry.target.classList.toggle("thirdLogo3", entry.isIntersecting);
                }
                if (entry.target.className.includes("forthLogo")) {
                    entry.target.classList.toggle("forthLogo4", entry.isIntersecting);
                }
                if (entry.target.className.includes("fifthLogo")) {
                    entry.target.classList.toggle("fifthLogo5", entry.isIntersecting);
                }
                if (entry.target.className.includes("sixthLogo")) {
                    entry.target.classList.toggle("sixthLogo6", entry.isIntersecting);
                }
                if (entry.target.className.includes("bullets-hidden")) {
                    entry.target.classList.toggle("show", entry.isIntersecting);
                }
                if (entry.isIntersecting) { observer.unobserve(entry.target); }
            })
        })

        slideElements.forEach(element => {
            observer.observe(element)
        })

        const tabs = document.querySelectorAll(".tab")
        const pages = document.querySelectorAll(".page")
        const scrollToTop = document.querySelector(".scrollToTop")

        const tabObserver = new IntersectionObserver((entries, tabObserver) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log(entry.target);
                    const index = Array.from(pages).indexOf(entry.target)
                    tabs.forEach(tab => {
                        tab.classList.remove("active")
                    })
                    tabs[index].classList.add("active")
                }
            })
        }, {
            threshold: 0.25,
        })


        pages.forEach(page => {
            tabObserver.observe(page)
        })
    });

    const firebaseStack = [
        "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
        "https://img.shields.io/badge/Firebase-FE7A16?style=for-the-badge&logo=firebase&logoColor=white",
    ]

    const challengesStack = [
        "https://img.shields.io/badge/Amplify-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white",
        "https://img.shields.io/badge/graphql-hotpink?style=for-the-badge&logo=graphQL",
        "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
        "https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white",
    ]

    const clickCounterStack = [
        "https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&amp;logo=firebase&amp;logoColor=black",
        "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
        "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
    ]

    return (
        <>
            <div class="topnav">
                <a className="tab" href="#intro">Intro</a>
                <a className='tab' href="#experience">Experience</a>
                <a className='tab' href="#projects">Projects</a>
                <a className='tab' href="#skills">Skills</a>
                <a className='tab' href="#contact">Contact</a>
            </div>
            <div className="intro page" id="intro">
                <div className="container">
                    <div className="container-left">
                        <div className="title homepage-title ">
                            Hi,
                            <div>I'm Anthony Sanchez</div>
                        </div>
                        <div className="subtitle homepage-subtitle">
                            I am a Frontend developer with expertise in React. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.
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
                                href="https://drive.google.com/file/d/1hmsIyVuDi4dg9jRwr9qAK8grlomfwZWo/view?usp=sharing"
                                target="_blank"
                                rel="noreferrer"
                                title="View Resume"
                            >
                                <FontAwesomeIcon
                                    icon={faFilePdf}
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
            <div className='exp-container page' id="experience">
                <h1 className='underline'>Experience</h1>
                <div className='exp-container-inner hidden'>
                    <div className='left'>
                        <h1>Develop for Good</h1>
                        <h4><i>Front End Developer Volunteer</i></h4>
                    </div>
                    <div className='right'>
                        <div className='bullets-hidden hidden'>
                            <img src={checkIcon} className='checkIcon'></img>
                            <p>Contribute to NeighborShare’s web application, a nonprofit tech platform designed to empower donors in
                            supporting households facing urgent financial needs</p>
                        </div>
                        <div className='bullets-hidden hidden'>
                            <img src={checkIcon} className='checkIcon'></img>
                            <p>CDevelop dynamic landing pages utilizing React Components to create targeted landing pages for sponsors,
                            enabling them to focus donations on specific geographies or needs, resulting in a 18% increase in contributions</p>
                        </div>
                        <div className='bullets-hidden hidden'>
                            <img src={checkIcon} className='checkIcon'></img>
                            <p>Collaborated with fellow engineers to implement an enhanced filtering mechanism that allows donors to select
and view needs by the nonprofit that referred them, increasing donor engagement by 10% and resulting in more
effective resource allocation.</p>
                        </div>
                        <div className='exp-tech-stack'>
                            <img className="firstLogo hidden" alt="react" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&amp;logo=react&amp;logoColor=%2361DAFB"></img>
                            <img className="forthLogo hidden" alt="javascript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&amp;logo=javascript&amp;logoColor=%23F7DF1E" />
                            <img className="fifthLogo hidden" alt="html5" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&amp;logo=html5&amp;logoColor=white" />
                            <img className="sixthLogo hidden" alt="css3" src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&amp;logo=css3&amp;logoColor=white"></img>
                        </div>
                    </div>
                </div>
                <div className='exp-container-inner hidden'>
                    <div className='left'>
                        <h1>Knomadix</h1>
                        <h4><i>Front End Developer Intern</i></h4>
                    </div>
                    <div className='right'>
                        <div className='bullets-hidden hidden'>
                            <img src={checkIcon} className='checkIcon'></img>
                            <p>Designed intuitive and modern UI layouts in Figma, then implemented them using React Components, resulting
                            in a 25% increase in click-through rates on key actions due to a simplified and more visually appealing interface</p>
                        </div>
                        <div className='bullets-hidden hidden'>
                            <img src={checkIcon} className='checkIcon'></img>
                            <p>Collaborated closely with backend developers to implement over 10+ new APIs using React Redux to retrieve
and manage critical data such as assignment and subscription details, making data more accessible and
improving workflows for the development team</p>
                        </div>
                        <div className='bullets-hidden hidden'>
                            <img src={checkIcon} className='checkIcon'></img>
                            <p>Handled and manipulated JSON Data accordingly to best display assignment and subscription details on tables, graphs, and dashboards using Material UI components</p>
                        </div>
                        <div className='exp-tech-stack'>
                            <img className="firstLogo hidden" alt="react" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&amp;logo=react&amp;logoColor=%2361DAFB"></img>
                            <img className="secondLogo hidden" alt="redux" src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&amp;logo=redux&amp;logoColor=white" />
                            <img className="thirdLogo hidden" alt="materialUI" src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&amp;logo=material-ui&amp;logoColor=white"></img>
                            <img className="forthLogo hidden" alt="javascript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&amp;logo=javascript&amp;logoColor=%23F7DF1E" />
                            <img className="fifthLogo hidden" alt="html5" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&amp;logo=html5&amp;logoColor=white" />
                            <img className="sixthLogo hidden" alt="css3" src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&amp;logo=css3&amp;logoColor=white"></img>
                        </div>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='wave-bottom'><path fill="#FFFFFF" fill-opacity="1" d="M0,160L60,138.7C120,117,240,75,360,101.3C480,128,600,224,720,234.7C840,245,960,171,1080,165.3C1200,160,1320,224,1380,256L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>

            <div className="project-section page" id="projects">
                <h1 className="projects-title">Projects</h1>
                <div className="cards-container margin">
                    <Card
                        image={Realtor}
                        title="Realtor Clone"
                        desc="Clone Website of Realtor.com Website which demonstrates CRUD functionality and User Authentication"
                        techStack="React, Firebase"
                        stack={firebaseStack}
                        projectLink="https://realtor-clone-react-blue.vercel.app/"
                        sourceLink="https://github.com/antsanchez198/realtor-clone-react"
                    />
                    <Card
                        image={Yelp}
                        title="Yelp Couple Helper"
                        desc="Full-stack web app that helps two users decide where to eat using Yelp's API"
                        techStack="AWS Amplify, GraphQL, React, MaterialUI"
                        stack={challengesStack}
                        projectLink="https://dev.d31kctbuv485tm.amplifyapp.com/"
                        sourceLink="https://github.com/ya-miao/lighthall-couple-yelp"
                    />
                    <Card
                        image={Hangman}
                        title="Hangman Game"
                        desc="Full-stack web app of Hangman"
                        techStack="AWS Amplify, GraphSQL, React, MaterialUI"
                        stack={challengesStack}
                        projectLink="https://lighthall-hangman-coral.vercel.app/hangman"
                        sourceLink="https://github.com/ya-miao/lighthall-hangman"
                    />
                    <Card
                        image={Task}
                        title="Task Tracker App"
                        desc="Full-stack web app which allows users to create and track tasks"
                        techStack="AWS Amplify, GraphSQL, React, MaterialUI"
                        stack={challengesStack}
                        projectLink="https://dev.d1k8dokfdo58j9.amplifyapp.com/"
                        sourceLink="https://github.com/ya-miao/task-tracker"
                    />
                </div>
            </div>
            <div className='skills-section page' id="skills">
                <h1 className='underline'>Skills</h1>
                <div className='skills-section-container'>
                    <div className='skills-section-item hidden first'>
                        <h2>Frontend</h2>
                        <div className='line'></div>
                        <div className='skills-section-item-tech'>
                            <img alt="Javascript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&amp;logo=javascript&amp;logoColor=%23F7DF1E"></img>
                            <img alt="html5" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&amp;logo=html5&amp;logoColor=white"></img>
                            <img alt="css3" src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&amp;logo=css3&amp;logoColor=white"></img>
                            <img alt="react" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&amp;logo=react&amp;logoColor=%2361DAFB"></img>
                            <img alt="redux" src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&amp;logo=redux&amp;logoColor=white"></img>
                            <img alt="materialUI" src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&amp;logo=material-ui&amp;logoColor=white"></img>
                            <img alt="bootstrap" src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&amp;logo=bootstrap&amp;logoColor=white"></img>

                        </div>
                    </div>
                    <div className='skills-section-item hidden second'>
                        <h2>Backend</h2>
                        <div className='line'></div>
                        <div className='skills-section-item-tech'>
                            <img alt="nodejs" src="https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&amp;logo=node-dot-js&amp;logoColor=white" />
                            <img alt="express" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&amp;logo=express&amp;logoColor=%2361DAFB"></img>
                            <img alt="cplusplus" src="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&amp;logo=c%2B%2B&amp;logoColor=white"></img>
                            <img alt="java" src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&amp;logo=java&amp;logoColor=white"></img>
                            <img alt="JSON" src="https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&amp;logo=json&amp;logoColor=white"></img>
                            <img alt="python" src="https://img.shields.io/badge/python-%2314354C.svg?style=for-the-badge&amp;logo=python&amp;logoColor=white"></img>
                        </div>
                    </div>
                    <div className='skills-section-item hidden third'>
                        <h2>Databases and Servers</h2>
                        <div className='line'></div>
                        <div className='skills-section-item-tech'>
                            <img alt="firebase" src="https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&amp;logo=firebase&amp;logoColor=black" />
                            <img alt="mysql" src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&amp;logo=mysql&amp;logoColor=white"></img>
                            <img alt="postgres" src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&amp;logo=postgresql&amp;logoColor=white"></img>
                            <img alt="heroku" src="https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&amp;logo=heroku&amp;logoColor=white"></img>
                            <img alt="netlify" src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&amp;logo=netlify&amp;logoColor=white"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className='contact-section page' id="contact">
                <div className='contact-section-inner column'>
                    <h1 className='underline'>Get In Touch</h1>
                    <form className='fieldset column' action='https://formspree.io/f/mzbqqpdo' method="POST">
                        <input class="form-control" type="text" name="Name" placeholder='First and Last Name' id='' required></input>
                        <input class="form-control" type="email" name="Email" placeholder='Email' id='' required></input>
                        <input class="form-control" type="text" name="Subject" placeholder='Subject' id='' required></input>
                        <textarea class="form-control" rows="5" name="Message" id="message" placeholder="Message" required></textarea>
                        <button type='submit'>Send Message</button>
                    </form>
                </div>
            </div>
        </>

    )
}