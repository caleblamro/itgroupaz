import './Card.css';
export default function Card(props){
    var special = ""
    var text_change = ""
    var text_change2 = ""
    if(props.style){
        special = "cool-background"
        text_change = "white"
        text_change2 = "off-white"
    }
    const onclick = () => {
        document.getElementById(props.id).classList.toggle("pressed");
        props.onClick();
        setTimeout(() => {
            document.getElementById(props.id).classList.toggle("pressed");
        }, 200);
    }
    return(
        <div id={props.id} onClick={onclick} className={"card " + special}>
            <div className={'card-icon space top '}>
                {props.icon}
            </div>
            <div className={"card-title medium space top " + text_change}>{props.title}</div>
            <p className={'card-description small space top ' + text_change2}>
                {props.description}
            </p>
            {props.children}
            {props.style && <span className="bubble" />}
            {props.style && <span className="bubble bottom left" />}
        </div>
    );
}