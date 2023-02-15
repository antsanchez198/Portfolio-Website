import './MainPage.css';
import NavBar from './NavBar';
import photo from '../'

export default function MainPage() {
    return (
        <>
        <NavBar/>
        <div className = "body">
            <h1>Anthony Sanchez</h1>
            <img className = "img" src="/myheadshot.png"></img>
            
       
        <p className='paragraph'>A hands on, detail orientated, and professional Web Developer with entry-level experience in HTML, CSS and React. Who’s
motivated to contribute to large scale projects with a proven track record of developing polished and creative user interfaces.</p>
        </div>
        <h1>Experience</h1> 
        </>
    )
}