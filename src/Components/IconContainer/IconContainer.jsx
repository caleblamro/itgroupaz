import { createPortal } from "react-dom";
import "./IconContainer.css";
export default function IconContainer(props){
    var color = props.color;
    var lighter = color + "60";
    if(color === "ffffff"){
        lighter = color;
        color = "80c4ff";
    }
    return(
        <div style={{border: "2px solid #" + color, backgroundColor: "#" + lighter}} className="icon-container">
            {props.icon}
        </div>
    );
}