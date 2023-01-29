import "./Navigation.css";
import Button from "../../Components/Button/Button";
import { useState } from 'react';
import Modal from "../../Components/Modal/Modal";

export default function Navigation(){
    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
      setIsOpen(true);
    };
    const hideModal = () => {
      setIsOpen(false);
    };
    const toggleModal = () => {
      if(isOpen){
        hideModal();
        return;
      }
      showModal();
    };

    return(
      <>
      <div className="menu-container">
        <img src="./Assets/logo.png" className="icon">

        </img>
        <div className="background">
        <ul id="target" className="menu-list">
          <li className="small menu-element">
            Home
          </li>
          <li className="small menu-element">
            About
          </li>
          <li className="small menu-element">
            Services
          </li>
          <li className="small menu-element">
            Our work
          </li>
          <Button id="nav-button" onClick={toggleModal} text="Contact us" className="button small grey" />
        </ul>
        </div>
      </div>
      <Modal setIsOpen={setIsOpen} isOpen={isOpen} />
      </>
    );
}