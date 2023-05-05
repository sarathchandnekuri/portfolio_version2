import React,{useEffect} from "react";
import CursorFollower from '../components/cursorFollower';
import {motion} from 'framer-motion';
import VanillaTilt from "vanilla-tilt";
import { HashLink } from 'react-router-hash-link';

import { CDN } from '../config';


function About() {

    useEffect(()=>{ 
        const element = document.querySelector(".my-image");
        VanillaTilt.init(element);
        // element.addEventListener("tiltChange", callback);
    })

    return (
        <div> <CursorFollower/>

        <motion.div
        animate={{opacity:1,  translateY:"0px"}}
        initial={{opacity:0, translateY:"50px"}}
        transition={{ duration: 1.5 }}
        exit={{opacity:0, translateY:"50px"}}
         className="about-container">
            
            <div className="about-text">
                <h1>Nice to meet you!👋</h1>
                <p style={{marginTop:"2rem"}}>Hola, I am Sarath Chand Nekuri, an Electronics graduate from <a target="_blank"  href="https://iiitdm.ac.in/" rel="noreferrer">IIITDM Kancheepuram</a>.</p>
                <p>My passion for design started during high school when I began editing photos on Adobe Photoshop. As an engineering student, I led the college design team as the Design Team Head for our technical fest VASHISHT.</p>
                <p>After graduation, I enrolled in a <a target="_blank"  href="https://www.coursera.org/professional-certificates/google-ux-design" rel="noreferrer">UX course</a> developed by Google, where I worked on three hands-on projects, gaining extensive knowledge on UX design and securing an internship.</p>
                <p>When I'm not designing, you can find me practising photography, listening to music, or watching another netflix series.  <a><HashLink exact to="/home#socialNetworks">Connect with me</HashLink></a>.</p>
            </div>

            <div className="my-image-c">
                <div data-tilt className="my-image">
                    <img className="my-imaged" src={`${CDN}/images/images/scimg_back_1.png`} alt="My_image" />
                    <img className="my-imaged-back" src={`${CDN}/images/images/scimg_front_1.png`} alt="My_image" />
                </div>
            </div>
            
        </motion.div>

        </div> 
       
     );
}

export default About
