import './MainPage.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from 'react';

export default function Card(props) {

    useEffect(() => {
        const showButton = document.getElementById(`${props.title}`);
        const favDialog = document.getElementById(`${props.desc}`);
        const closeBtn = document.getElementById(`${props.id}`);

        showButton.addEventListener('click', () => {
            favDialog.showModal();
            document.body.style.overflowY = "hidden";
        });

        console.log(showButton, "showButton")

        closeBtn.addEventListener('click', () => {
            favDialog.close();
            document.body.style.overflowY = "auto";
        });
    });

    const stack = props.stack;

    return (
        <>
            <div class="card-wrapper" id={props.title}>
                <div class="card-top">
                    <img class="image" src={props.image} />
                </div>
            </div>
            <dialog id={props.desc}>
                <div className='dialog-inner'>
                    <div class="top-text">{props.title}</div>
                    <img class="dialog-image" src={props.image} />
                    <div className='dialog-bottom-section'>
                        <div class="bottom-text ">{props.desc}</div>
                        {/* <div class="bottom-text border background">{props.techStack}</div> */}
                        <div className='exp-tech-stack-dialog'>
                            {/* <img alt="react" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&amp;logo=react&amp;logoColor=%2361DAFB"></img>
                            <img alt="redux" src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&amp;logo=redux&amp;logoColor=white" />
                            <img alt="materialUI" src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&amp;logo=material-ui&amp;logoColor=white"></img>
                            <img alt="javascript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&amp;logo=javascript&amp;logoColor=%23F7DF1E" />
                            <img alt="html5" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&amp;logo=html5&amp;logoColor=white" />
                            <img alt="css3" src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&amp;logo=css3&amp;logoColor=white"></img> */}
                            {props.stack.map((src) => {
                                {return <img alt="redux" src={src} />}
                            })}
                        </div>
                        <div className='bottom-button-container '>
                            <a
                                href={props.projectLink}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faLink}
                                    className="homepage-social-icon yellow"
                                />
                            </a>
                            <a
                                href={props.sourceLink}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    className="homepage-social-icon yellow"
                                />
                            </a>
                        </div>
                        <button formmethod="dialog" id={props.id} className='dialog-btn'>Close</button>
                    </div>
                </div>
            </dialog>
        </>
    )
}