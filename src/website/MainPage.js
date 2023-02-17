import './MainPage.css';
import NavBar from './NavBar';
import Card from './Card';

export default function MainPage() {
    return (
        <>
            <NavBar />
            <h1 className="margin">Anthony Sanchez</h1>
            <div className="container">
                <img className="img" src="/myheadshot.png"></img>
                <p className='paragraph'>A hands on, detail orientated, and professional Web Developer with entry-level experience in HTML, CSS and React. Who’s
                    motivated to contribute to large scale projects with a proven track record of developing polished and creative user interfaces.</p>
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
                                <li className='tech-stack-items'>React.js</li>
                                <li className='tech-stack-items'>HTML</li>
                                <li className='tech-stack-items'>CSS</li>
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
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
            <h1>Skills</h1>
        </>

    )
}