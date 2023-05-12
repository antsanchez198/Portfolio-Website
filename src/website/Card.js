import './MainPage.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function Card(props) {
    return (
        <div class="card-wrapper">
            <div class="card-top">
                <img class="image" src={props.image} />
            </div>

            <div class="card-bottom">
                <div class="top-text">{props.title}</div>
                <div class="bottom-text">{props.desc}</div>
                <div className='bottom-button-container'>
                    <a>
                        <FontAwesomeIcon
                            icon={faLink}
                            className="homepage-social-icon"
                        />
                    </a>
                    <a>
                        <FontAwesomeIcon
                            icon={faGithub}
                            className="homepage-social-icon"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}