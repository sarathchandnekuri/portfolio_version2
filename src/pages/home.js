import React,{ useEffect } from "react";
import covac from '../images/covac-thumbnail.png';
import rogalik from '../images/rogalik-thumbnail.png';
import mia from '../images/mia-thumbnail.png';
import godown from '../icons/down.svg';
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import CursorFollower from "../components/cursorFollower";
import Contact from "./contact";
import {motion} from 'framer-motion';
import ThreeCanvas from "../components/threeCanvas";




function Home() {

    
    useEffect( () => {

        if(document.getElementById("go-down")){
            document.getElementById("go-down").addEventListener("click",() =>{
                window.scrollTo({
                    top: 500,
                    behavior: 'smooth'
                });   
        })}

        const job = document.querySelector(".job");

        if(job){
        job.addEventListener("click", function(){
            document.querySelector(".contact-pager").scrollIntoView();
        });}
    

        gsap.registerPlugin(ScrollTrigger);
        gsap.registerPlugin(MotionPathPlugin);
        // gsap.from(".text-trans", {duration:5, opacity:0, y:150, height:0})
        gsap.from(".main-header span", {duration:0.8, opacity:0, stagger:0.2, y:"80%",ease: "back.out(1.7)"})
        gsap.from(".para", {duration:0.5, delay:0.8, opacity:0, y:20})
        gsap.from(".job", { duration: 0.8, delay:1.3, opacity:0, y:80, ease: "bounce.out"})

        gsap.to( ".go-down",{ 
            scrollTrigger:{
                trigger:".p-2",
                toggleActions:"play none none reset"
        },duration:0.2, opacity:0})

        gsap.to( ".p-1",{ 
            scrollTrigger:{
                trigger:".p-2",
                toggleActions:"play none none reset"
        },duration:0.2, opacity:1,y:0,scale:1 })

        gsap.to( ".p-2",{ 
            scrollTrigger:{
                trigger:".p-1",
                start:"50% 80%",
                toggleActions:"play none none reset"
        },duration:0.2, opacity:1,y:0,scale:1 })
    
        gsap.to( ".p-3",{ 
            scrollTrigger:{
                trigger:".p-2",
                start:"50% 60%",
                toggleActions:"play none none reset"
        },duration:0.2, opacity:1,y:0,scale:1 })

        gsap.to( ".contact-pager",{ 
            scrollTrigger:{
                trigger:".contact-pager",
                start:"top 10%",
                toggleActions:"play none none reset"
        },duration:0.5, opacity:1, pointerEvents:"all"})



        ScrollTrigger.create({
            trigger:".p-3",
            start:"20% top",
            onEnter:() => gsap.to("body", {backgroundColor:"#122d34", overwrite:'auto'}),
            onLeaveBack:() => gsap.to("body", {backgroundColor:"#f8feff", overwrite:'auto'}),


        })
        

    },[])


    return (
        <div><CursorFollower/>
        <motion.div
        animate={{opacity:1,  translateY:"0px"}}
        initial={{opacity:0,  translateY:"50px"}}
        transition={{ duration: 1 }}
        exit={{opacity:0,  translateY:"50px"}}>
                
        <div className="homeC">
            
            <div className="center">

                {/* <ThreeCanvas/> */}


                <h1 className="main-header">
                    <span>Hello, </span>
                    <span>I'm </span>
                    <span>Sarath </span>
                    <span>Chand!</span>
                </h1>
            
                <p style={{color:"#122d34"}} className="para">I am Passionate about
                    <div className="cube-container">
                        <div className="cube">
                            <span className="front-name"> UX Design</span>
                            <span className="top-name"> UX Design</span>
                            <span className="back-name"> UI Design</span>
                            <span className="bottom-name"> UI Design</span>
                        </div>
                    </div>
                </p>
                    <p className="job" style={{fontSize:"1rem"}} >Currently Looking for a job</p>

                    
            </div>

            <div id="go-down" className="go-down">
                <img src={godown} alt="" />
            </div>

<div className="works">
    <div className="project p-1">
        <Link style={{cursor:"none"}} to="/covac">
            <img className="project-image first-p" src={covac} alt="" />
        </Link>
    </div>
    
    <div className="project p-2">
        <Link style={{cursor:"none"}} to="/rogalik-bakery">
            {/* <div className="pitch">THIS PAGE IS UNDER CONSTRUCTION,<br/> MEANWHILE LOOK AT <br/>PITCH DECK</div> */}
            <img className="project-image second-p" src={rogalik} alt="" />
        </Link>
    </div>

    <div className="project p-3">
        <Link style={{cursor:"none"}} to="/mia-restaurant">
            <img className="project-image third-p" src={mia} alt="" />
        </Link>
    </div>

</div>


<div className="footer">
    <a href="https://twitter.com/nsarathsunny" target = "_blank" rel="noreferrer"  className="s-i "> <p>Twitter</p> <span className="bordert"></span></a >
    <a href="https://www.behance.net/sarathchand" target = "_blank" rel="noreferrer"  className="s-i "> <p>Behance</p> <span className="borderb"></span></a >
    <a href="https://www.linkedin.com/in/sarathchand/" target = "_blank" rel="noreferrer"  className="s-i "> <p>LinkedIn</p> <span className="borderl"></span></a >
    <a href="https://www.instagram.com/sarath_chand_19/" target = "_blank" rel="noreferrer"  className="s-i "> <p>Instagram</p> <span className="borderi"></span></a >
    <a href="mailto:sarathchand19@gmail.com" target = "_blank" rel="noreferrer"  className="s-i "> <p> Mail</p> <span className="borderm"></span></a >       
</div>

<div className="contact-pager">
    <Contact/>
</div>

            
            
               
        </div>
        </motion.div> 
        </div>
        
        
     );
}

export default Home;