import "./MainPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

export default function Card(props) {
  useEffect(() => {
    const slideElements = document.querySelectorAll(".fadeIn");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
        }
      });
    });

    slideElements.forEach((element) => {
      observer.observe(element);
    });
  });

  const stack = props.stack;

  return (
    <div class="card-wrapper fadeIn" id={props.title}>
      <div class="top-text">{props.title}</div>
      <div class="image-box">
        <img src={props.image} onClick={props.sourceLink} />
      </div>
      <div className="card-bottom-section">
        <div className="top-bottom-section">
          <div class="bottom-text ">{props.desc}</div>
          <div className="exp-tech-stack-dialog">
            {props.stack.map((src) => {
              {
                return <img alt="redux" src={src} key={src} />;
              }
            })}
          </div>
        </div>
        <div className="bottom-bottom-container">
          <a
            href={props.projectLink}
            target="_blank"
            title="View Project"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="homepage-social-icon black"
            />
          </a>
          <a
            href={props.sourceLink}
            target="_blank"
            rel="noreferrer"
            title="Source Code"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="homepage-social-icon black"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
