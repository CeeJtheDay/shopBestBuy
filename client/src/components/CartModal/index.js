import React, { useEffect } from "react";
import {  Modal } from 'react-bootstrap';
import AOS from "aos";
import Viewport from "../Viewport";
// import anime from "animejs";



function RegisterModal(props) {

    useEffect(() => {

        const script1 = document.createElement("script");
        const script2 = document.createElement("script");


        script1.src = "https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js";
        script1.async = true;

        script2.src = "https://unpkg.com/aos@next/dist/aos.js";
        script2.async = true;


        document.body.appendChild(script1);
        document.body.appendChild(script2);


        AOS.init({
            offset: 400, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 1000 // values from 0 to 3000, with step 50ms
        });
    })

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Your Cart
          </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <Viewport />
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default RegisterModal;