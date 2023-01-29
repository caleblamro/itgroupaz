import { useState, useEffect } from "react";
import "./Button.css";
import { CheckOutlined, LoadingOutlined } from "@ant-design/icons";
export default function Button(props){
    var prevLoading = false;
    const [extra, setExtra] = useState(props.className);
    const onclick = () => {
        document.getElementById(props.id).classList.toggle("pressed");
        props.onClick();
        setTimeout(() => {
            document.getElementById(props.id).classList.toggle("pressed");
        }, 250);
    }
    useEffect(() => {
        if(props.loading && !props.done || !props.loading && props.done){
            document.getElementById(props.id).classList.toggle("reduce-width");
        }
        if(props.done){
            document.getElementById(props.id).classList.toggle("green");
            setTimeout(() => {
                document.getElementById(props.id).classList.toggle("green");
            }, 1500);
        }
    }, [props.loading, props.done]);
    return(
        <button form={props.form} type={props.type} id={props.id} className={"button " + extra} onClick={onclick}>
            {!props.loading && !props.done && 
                <>    
                {props.text}
                {props.icon}
                </>
            }
            {props.loading && 
                <LoadingOutlined spin />
            }
            {
                props.done && 
                <CheckOutlined />
            }
        </button>
    );
}