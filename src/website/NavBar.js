import './MainPage.css';
import Menu from "./images/bars-solid.svg"

export default function NavBar() {

    return (
        <>
            {/* <div className='hamburger-container'>
                <img src={Menu}></img>
            </div> */}
            <div class="topnav">
                <a class="active" href="#home">Intro</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
            </div>
        </>
    )
}