import './MainPage.css';
import NavBar from './NavBar';
import photo from '../'

export default function MainPage() {
    return (
        <>
            <NavBar />
            <div className="container">
                <h1>Anthony Sanchez</h1>
                <img className="img" src="/myheadshot.png"></img>
                <p className='paragraph'>A hands on, detail orientated, and professional Web Developer with entry-level experience in HTML, CSS and React. Who’s
                    motivated to contribute to large scale projects with a proven track record of developing polished and creative user interfaces.</p>
            </div>
            <div className='exp-container'>
                <div className='left'><h1>Professional Experience</h1></div>
                <div className='line'></div>
                <div className='right'>
                    <h2>Knomadix</h2>
                    <div className='exp-container-inner'>
                        <h3><i>Front End Developer Intern</i></h3>
                        <div className='tech-stack'>
                            <ul>
                                <li>Coffee</li>
                                <li>Tea</li>
                                <li>Milk</li>
                            </ul>
                        </div>
                    </div>
                    <p>Designed and built new responsive layouts and features for an educational based startup company using React.js, HTML,
                        and CSS. Resulting in an improvement of the readability of information and overall front-end design</p>
                    <p>Collaborated closely with Backend developers to implement dozens of APIs using React Redux and debugging any issues
                        during the process</p>
                    <p>Handled JSON Data received from the API containing assignment and subscription details to display on tables, graphs, and
                        dashboards with the use of Material UI components</p>
                    <p>Responsible for setting up forms using JavaScript, which stored data from the user interface to be passed to the API for a
                        successful update of subscription plans, notifications, and school district information</p>
                </div>
            </div>
            <h1>Projects</h1>
            <h1>Skills</h1>
        </>

    )
}