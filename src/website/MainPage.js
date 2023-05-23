import './MainPage.css';
import NavBar from './NavBar';
import Card from './Card';
import { faMailBulk, faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Task from "./images/Task Tracker.jpg";
import Yelp from "./images/Yelp.jpg";
import TTP from "./images/ttp.jpg";
import Hangman from "./images/Hangman.jpg";
import Click from "./images/Click.jpg";
import CRUD from "./images/CRUD.jpg";
import file from "./images/file-solid.svg"
import checkIcon from "./images/circle-check-solid.svg";
import { useEffect } from 'react';

export default function MainPage() {

    useEffect(() => {
        const slideElements = document.querySelectorAll('.hidden');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                entry.target.classList.toggle("show", entry.isIntersecting);
                if (entry.isIntersecting) { observer.unobserve(entry.target); }
            })
        })

        slideElements.forEach(element => {
            observer.observe(element)
        })
    });

    const pernStack = [
        "https://camo.githubusercontent.com/67a01fa7cf337616274f39c070a11638f2e65720e414ef55b8dd3f9c2a803b2a/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d526561637426636f6c6f723d323232323232266c6f676f3d5265616374266c6f676f436f6c6f723d363144414642266c6162656c3d",
        "https://camo.githubusercontent.com/faec9d89bd2c7d47b91d988dcd0f27011c27e8191d45836cfa36bf2b3c2a92bd/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d4e6f64652e6a7326636f6c6f723d333339393333266c6f676f3d4e6f64652e6a73266c6f676f436f6c6f723d464646464646266c6162656c3d",
        "https://camo.githubusercontent.com/0a95585d6b3a07028298a45d60b85a1331358bc336549d64dbbc27977f1495f3/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d4578707265737326636f6c6f723d303030303030266c6f676f3d45787072657373266c6f676f436f6c6f723d464646464646266c6162656c3d",
        "https://camo.githubusercontent.com/95a15266c9b093e9070410fa62c8dcba6611e79edd738e0ded7ec5b52541d6c4/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d506f737467726553514c26636f6c6f723d343136394531266c6f676f3d506f737467726553514c266c6f676f436f6c6f723d464646464646266c6162656c3d",
        "https://camo.githubusercontent.com/3aaee8bf7885dcf0cea8a5647c4514b7d800b1a730d38bce7dadf6bff883378d/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d4a61766153637269707426636f6c6f723d323232323232266c6f676f3d4a617661536372697074266c6f676f436f6c6f723d463744463145266c6162656c3d"
    ]

    const challengesStack = [
        "https://camo.githubusercontent.com/67a01fa7cf337616274f39c070a11638f2e65720e414ef55b8dd3f9c2a803b2a/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d526561637426636f6c6f723d323232323232266c6f676f3d5265616374266c6f676f436f6c6f723d363144414642266c6162656c3d",
        "https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&amp;logo=material-ui&amp;logoColor=white",
        "https://camo.githubusercontent.com/ed77a28768e0711948d83722fca374fe74caffab09386432c81d69d31ee834b5/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d4157532b416d706c69667926636f6c6f723d323232323232266c6f676f3d4157532b416d706c696679266c6f676f436f6c6f723d464639393030266c6162656c3d",
        "https://camo.githubusercontent.com/2e1f2dc091af830685d2057c2d4c797b639c7d1601a8d6019629272c210b707b/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d4772617068514c26636f6c6f723d453130303938266c6f676f3d4772617068514c266c6f676f436f6c6f723d464646464646266c6162656c3d"
    ]

    const clickCounterStack = [
        "https://camo.githubusercontent.com/67a01fa7cf337616274f39c070a11638f2e65720e414ef55b8dd3f9c2a803b2a/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d526561637426636f6c6f723d323232323232266c6f676f3d5265616374266c6f676f436f6c6f723d363144414642266c6162656c3d",
        "https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&amp;logo=firebase&amp;logoColor=black",
        "https://camo.githubusercontent.com/3aaee8bf7885dcf0cea8a5647c4514b7d800b1a730d38bce7dadf6bff883378d/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d4a61766153637269707426636f6c6f723d323232323232266c6f676f3d4a617661536372697074266c6f676f436f6c6f723d463744463145266c6162656c3d"
    ]

    return (
        <>
            <NavBar />
            <div className="intro" id="home">
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
                                href="https://drive.google.com/file/d/1g4akhUjAk9rye0WHrsEyjunAbezDHqgb/view?usp=sharing"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faFile}
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
            <div className='exp-container' id="experience">
                <h1 className='underline'>Experience</h1>
                <div className='exp-container-inner'>
                    <div className='left'>
                        <h1>Knomadix</h1>
                        <h4><i>Front End Developer Intern</i></h4>
                    </div>
                    <div className='right'>
                        <div className='hidden'>
                            <img src={checkIcon} className='checkIcon'></img>
                            <p>Creatively designed and developed two responsive layouts using React, HTML, and CSS which improved the readability of information presented to end users by 30%</p>
                        </div>
                        <div className='hidden'>
                            <img src={checkIcon} className='checkIcon'></img>
                            <p>Collaborated closely with both backend developers to implement over 10+ new APIs using React Redux, improving the accessibility and management of dozens of APIs for the team</p>
                        </div>
                        <div className='hidden'>
                            <img src={checkIcon} className='checkIcon'></img>
                            <p>Collaborated closely with both backend developers to implement over 10+ new APIs using React Redux, improving the accessibility and management of dozens of APIs for the team</p>
                        </div>
                        <div className='hidden'>
                            <img src={checkIcon} className='checkIcon'></img>
                            <p>Handled and manipulated JSON Data accordingly to best display assignment and subscription details on tables, graphs, and dashboards using Material UI components</p>
                        </div>
                        <div className='hidden'>
                            <img src={checkIcon} className='checkIcon'></img>
                            <p>Set up interactive forms using JavaScript from the UI and utilized APIs to successfully update subscription plans, notifications, and school and user information</p>
                        </div>
                        <div className='exp-tech-stack'>
                            <img alt="react" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&amp;logo=react&amp;logoColor=%2361DAFB"></img>
                            <img alt="redux" src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&amp;logo=redux&amp;logoColor=white" />
                            <img alt="materialUI" src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&amp;logo=material-ui&amp;logoColor=white"></img>
                            <img alt="javascript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&amp;logo=javascript&amp;logoColor=%23F7DF1E" />
                            <img alt="html5" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&amp;logo=html5&amp;logoColor=white" />
                            <img alt="css3" src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&amp;logo=css3&amp;logoColor=white"></img>
                        </div>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='wave-bottom'><path fill="#FFFFFF" fill-opacity="1" d="M0,160L60,138.7C120,117,240,75,360,101.3C480,128,600,224,720,234.7C840,245,960,171,1080,165.3C1200,160,1320,224,1380,256L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>

            <div className="project-section" id="projects">
                <h1 className="projects-title underline">Projects</h1>
                <div className="cards-container margin">
                    <Card
                        image={TTP}
                        id="1"
                        title="Restuarant Website"
                        desc="Fullstack web application for a local business (In Progress)"
                        techStack="React, Javascript, Node, Express, ProgresSQL, Bootstrap"
                        stack={pernStack}
                        projectLink="https://ttp-capstone-project.netlify.app/"
                        sourceLink="https://github.com/antsanchez198/Restaurant-Backend"
                    />
                    <Card
                        image={Yelp}
                        id="2"
                        title="Yelp Couple Helper"
                        desc="Full-stack web app that helps two users decide where to eat using Yelp's API"
                        techStack="AWS Amplify, GraphSQL, React, MaterialUI"
                        stack={challengesStack}
                        projectLink="https://lighthall-hangman-coral.vercel.app/"
                        sourceLink="https://github.com/ya-miao/lighthall-couple-yelp"
                    />
                    <Card
                        image={Hangman}
                        id="3"
                        title="Hangman Game"
                        desc="Full-stack web app of Hangman"
                        techStack="AWS Amplify, GraphSQL, React, MaterialUI"
                        stack={challengesStack}
                        projectLink="https://lighthall-hangman-coral.vercel.app/hangman"
                        sourceLink="https://github.com/ya-miao/lighthall-hangman"
                    />
                    <Card
                        image={Task}
                        id="4"
                        title="Task Tracker App"
                        desc="Full-stack web app which allows users to create and track tasks"
                        techStack="AWS Amplify, GraphSQL, React, MaterialUI"
                        stack={challengesStack}
                        projectLink="https://dev.d1k8dokfdo58j9.amplifyapp.com/"
                        sourceLink="https://github.com/ya-miao/task-tracker"
                    />
                    <Card
                        image={Click}
                        id="5"
                        title="Click Counter"
                        desc="Full-stack web app that uses the Geolocation API to get user's location and display click amount"
                        techStack="Firebase, React, Javascript"
                        stack={clickCounterStack}
                        projectLink="https://main--stirring-daffodil-67d04b.netlify.app/"
                        sourceLink="https://github.com/antsanchez198/Lighthall-Challenge-1"
                    />
                    <Card
                        image={CRUD}
                        id="6"
                        title="CRUD Application"
                        desc="My first web app that can create, read, update and delete items (Not Deployed)"
                        techStack="React, Javascript, Node, Express, ProgresSQL"
                        stack={pernStack}
                        // projectLink="https://main--stirring-daffodil-67d04b.netlify.app/"
                        sourceLink="https://github.com/antsanchez198/TTP-CRUD"
                    />
                </div>
            </div>
            <div className='skills-section' id="skills">
                <h1 className='underline'>Skills</h1>
                <div className='skills-section-container'>
                    <div className='skills-section-item frontend hidden'>
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
                    <div className='skills-section-item backend hidden'>
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
                    <div className='skills-section-item database hidden'>
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
            <div className='contact-section' id="contact">
                <div className='contact-section-inner column'>
                    <h2 className='underline'>Get In Touch</h2>
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