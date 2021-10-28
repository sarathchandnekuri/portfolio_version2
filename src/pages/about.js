import React,{useEffect} from "react";
import SC from '../images/scimg.jpg';
import SCC from '../images/scimgc.jpg';
import CursorFollower from '../components/cursorFollower';
import {motion} from 'framer-motion';


function About() {

    useEffect(()=>{

        
        const image = document.querySelector(".my-image-c");

        image.addEventListener("mouseenter",function (){
            document.querySelector(".my-image").classList.add("middle-clip");
            document.querySelector(".my-imaged").classList.add("middle-zoom");
            document.querySelector(".left").classList.add("left-clip");
            document.querySelector(".right").classList.add("right-clip");
        });
        image.addEventListener("mouseleave",function (){
            document.querySelector(".my-image").classList.remove("middle-clip");
            document.querySelector(".my-imaged").classList.remove("middle-zoom");
            document.querySelector(".left").classList.remove("left-clip");
            document.querySelector(".right").classList.remove("right-clip");
        });
        

    })

    return (
        <div> <CursorFollower/>
        <motion.div
        animate={{opacity:1,  translateY:"0px"}}
        initial={{opacity:0, translateY:"50px"}}
        transition={{ duration: 1 }}
        exit={{opacity:0, translateY:"50px"}}
         className="about-container">
            
            <div className="about-text">
                <h2>Nice to Meet you!</h2>
                <p style={{marginTop:"2rem"}}>Hello, I am Sarath Chand, graduated and specialized in Electronics.</p>
                <p>At college, I always enjoyed using Photoshop and designing stuff. In my 3rd and 4th year's, I became the Design Team Head of VASHISHT, our college technical fest. During then, I got to learn how to manage a team.</p>
                <p>Later in 4th year, I got an opportunity to design an Interface for our unofficial college app. It was challenging. Then I decided to take it up as a career. Later, I took a UX Course developed by Google, including three hands-on projects. It helped me gain a lot of knowledge on UX Design.</p>
                <p>When I'm not designing, you can find me practising photography, playing Pubg, listening to music, or watching another Netflix Series.</p>
            </div>

            <div className="my-image-c" >
                <div className="my-image">
                    <img className="my-imaged" style={{width:"100%",height:"100%", overflow:"hidden"}}  src={SC} alt="MyImage"/>
                </div>
               
                <img className="left" style={{width:"100%",height:"100%"}}  src={SC} alt="MyImage"/>
                <img className="right" style={{width:"100%",height:"100%"}}  src={SC} alt="MyImage"/>
            </div>
            
        </motion.div>

        </div> 
       
     );
}

export default About
