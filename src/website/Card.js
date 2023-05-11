import './MainPage.css';

export default function Card(props) {
    return (
        <div class="card-wrapper">
            <div class="card-top">
                <img class="image" src={props.image}/>
            </div>

            <div class="card-bottom">
                <div class="top-text">{props.title}</div>
                <div class="bottom-text">{props.desc}</div>
                <button class="button">Join Us</button>
            </div>
        </div>
    )
}