import "./Modal.css";
import { useEffect, useState } from 'react';
import { Input } from 'antd';
import Button from "../Button/Button";
import { CloseOutlined, DesktopOutlined, MailOutlined, SendOutlined, UserOutlined } from "@ant-design/icons";

const animateCSS = (element, animation, prefix = 'animate__') =>{
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.getElementById(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });
}

const myAnimate = (target, animation) => {
    new Promise((resolve, reject) => {
        const node = document.getElementById(element);
    
        node.classList.add(animation);
    
        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
          event.stopPropagation();
          node.classList.remove(animation);
          resolve('Animation ended');
        }
    
        node.addEventListener('animationend', handleAnimationEnd, {once: true});
    });
}
export default function Modal(props){
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);
    const remove = () => {
        console.log("remove");
        props.setIsOpen(false);
    }
    const complete = (e) => {
        if(e){
            props.setIsOpen(false);
            return;
        }
        if(props.isOpen){
            document.getElementById("blur").classList.toggle("showbg");
            document.getElementById("modal").classList.toggle("show");
            return;
        }
        document.getElementById("blur").classList.toggle("showbg");
        document.getElementById("modal").classList.toggle("show");
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        //make some api call
        setTimeout(() => {
            setLoading(false);
            setDone(true);
            setTimeout(() => {
                setDone(false);
            }, 1500);
        }, 2000);
    }
    useEffect(() => {
        complete(false);
    }, [props.isOpen]);
    return(
        <>
        <div id="modal" className="modal">
            <div className="modal-header">
                <p className="modal-title medium">
                Contact Us
                </p>
                <CloseOutlined size={64} onClick={() => complete(true)} className="close"/>
            </div>
            <form onSubmit={handleSubmit} id="contact-form" className="input-container">
                <Input prefix={<UserOutlined />} required className="border-radius" onChange={(e) => setName(e.target.value)} value={name} placeholder="Full Name" />
                <Input prefix={<DesktopOutlined />} className="border-radius" onChange={(e) => setCompany(e.target.value)} value={company} placeholder="Company" />
                <Input prefix={<MailOutlined />} required className="border-radius" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" />
                <Input.TextArea className="border-radius restrict" onChange={(e) => setMessage(e.target.value)} value={message} placeholder="Feel free to put any questions here!" />
            </form>
            <Button form="contact-form" type="submit" done={done} id="send" loading={loading} onClick={() => { return; }} className="send" icon={<SendOutlined style={{marginLeft: "10px"}}/>} text="Send"/>
        </div>
        <div onClick={() => remove()} id="blur" className="bg">
        </div>
        </>
    );
}