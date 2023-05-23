import './MainPage.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
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
                    <a
                        href={props.projectLink}
                        target="_blank"
                        rel="noreferrer"
                        title="View Project"
                    >
                        {/* <FontAwesomeIcon
                                    icon={faLink}
                                    className="homepage-social-icon yellow"
                                /> */}
                        <img class="dialog-image" src={props.image} />
                    </a>
                    <div className='dialog-bottom-section'>
                        <div class="bottom-text ">{props.desc}</div>
                        <div className='exp-tech-stack-dialog'>
                            {props.stack.map((src) => {
                                { return <img alt="redux" src={src} /> }
                            })}
                        </div>
                        <div className='bottom-button-container '>
                            {/* <a
                                href={props.projectLink}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faLink}
                                    className="homepage-social-icon yellow"
                                />
                            </a> */}
                            <a
                                href={props.sourceLink}
                                target="_blank"
                                rel="noreferrer"
                                title="Source Code"
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