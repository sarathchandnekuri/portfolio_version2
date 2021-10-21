import React,{ useEffect } from "react";
import covac from '../images/covac-thumbnail.png';
import rogalik from '../images/rogalik-thumbnail.png';
import mia from '../images/mia-thumbnail.png';
import godown from '../icons/down.svg';
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import * as dat from 'dat.gui';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import CursorFollower from "../components/cursorFollower";
import Contact from "./contact";
import {motion,useAnimation} from 'framer-motion';


function Home() {

    // window.onload = function(){

        

    //     // const textureLoader = new three.TextureLoader()
    //     // const normalTexture = textureLoader.load("../models/puz-normalmap.png")

    //     // const gui = new dat.GUI();
    //     // const scene = new three.Scene();
    //     // const canvas = document.querySelector(".webgl");
    //     // // const geometry = new three.SphereBufferGeometry( 0.8,60,60 );
    //     // // Materials

        
    //     // const material = new three.MeshStandardMaterial()
    //     // material.color = new three.Color(0xffffff)
    //     // material.normalMap = normalTexture;
    //     // // material.normalMap = texture;

    //     // const gltfLoader = new GLTFLoader()
    //     // gltfLoader.load('../models/logo.glb', 
    //     // function(glb){
    //     //     console.log(glb)

    //     //     const logo = glb.scene;
    //     //     logo.scale.set(0.1,0.1,0.1);
    //     //     scene.add( logo );
            
    //     // }, function(xhr){
    //     //     console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    //     // }, function(error){
    //     //     console.error("error",error);
    //     // })



    //     // // Mesh
    //     // // const sphere = new three.Mesh(geometry,material)
    //     // // scene.add(sphere)
        

    //     // const greenLight = new three.PointLight(0x0000ff, 1)
    //     // greenLight.position.set(-1,0.5,1.5)
    //     // scene.add(greenLight)

    //     // const pointlighthelper = new three.PointLightHelper(greenLight,1)
    //     // scene.add(pointlighthelper)
        
    //     // const color = new three.Color(0xfdf0b1);
    //     // const intensity = 1;
    //     // const light = new three.AmbientLight(color, intensity);
    //     // scene.add(light);

        
    //     // /** Sizes               */
    //     // const sizes = {width: window.innerWidth, height: window.innerHeight}
        
    //     // window.addEventListener('resize', () =>
    //     // {
    //     //     // Update sizes
    //     //     sizes.width = window.innerWidth
    //     //     sizes.height = window.innerHeight
        
    //     //     // Update camera
    //     //     camera.aspect = sizes.width / sizes.height
    //     //     camera.updateProjectionMatrix()
        
    //     //     // Update renderer
    //     //     renderer.setSize(sizes.width, sizes.height)
    //     //     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    //     // })
        
    //     // /**
    //     //  * Camera
    //     //  */
    //     // // Base camera
    //     // const camera = new three.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
    //     // camera.position.set(0,0,2)
    //     // scene.add(camera)
        
    //     // // Controls
    //     // // const controls = new OrbitControls(camera, canvas)
    //     // // controls.enableDamping = true
        
    //     // /** Renderer            */

    //     // const renderer = new three.WebGLRenderer({
    //     //     canvas: canvas,
    //     //     alpha:true,
    //     //     antialias:true
    //     // })
    //     // renderer.setSize(sizes.width, sizes.height)
    //     // renderer.setPixelRatio(window.devicePixelRatio)
    //     // renderer.outputEncoding = three.sRGBEncoding;
        
    //     // /**       Animate         */
        
    //     // const clock = new three.Clock()
        
    //     // const tick = () =>
    //     // {   //const elapsedTime = clock.getElapsedTime()
        
    //     //     // Update objects
    //     //     // logo.rotation.y = .5 * elapsedTime
        
    //     //     // Update Orbital Controls
    //     //     // controls.update()
        
    //     //     // Render
    //     //     renderer.render(scene, camera)
    //     //     // Call tick again on the next frame
    //     //     window.requestAnimationFrame(tick)
    //     // }
        
    //     // tick()


       
    // }
    

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
        },duration:0.5, opacity:1})

        gsap.set( ".footer",{ 
            scrollTrigger:{
                trigger:".footer",
                start:"top top",
                pin:true,
                pinSpacing:false,
                toggleActions:"play none none reset"
        }, duration:0.5})



        ScrollTrigger.create({
            trigger:".p-3",
            start:"20% top",
            onEnter:() => gsap.to("body", {backgroundColor:"#122d34", overwrite:'auto'}),
            onLeaveBack:() => gsap.to("body", {backgroundColor:"#f8feff", overwrite:'auto'}),


        })
        

    },[])

    // const controls = useAnimation();
    // // useEffect(() => {
    // //     controls.start("hidden");
    // // }, [controls]);

    // const variants = {
    //     visible: {
    //       "transform": "translateY(100%)"
    //     },
    //     hidden: {
    //       "transform": "translateY(0%)"
    //     }
    //   };

    return (
        <motion.div
        animate={{opacity:1, translateY:"0px"}}
        initial={{opacity:0, translateY:"50px"}}
        transition={{ duration: 1 }}
        exit={{opacity:0, translateY:"50px"}}
        // animate={controls}
        // variants={variants}
        // initial="visible"
        // transition={{ duration: 0.5 }}
        // exit="visible"
        // sx={{
        //     overflow: "hidden",
        //     position: "absolute",
        //     display: "inline-block",
        //     height: "100vh",
        //     background:"red",
        //     width:"100vw",
        //     "&::before": {
        //       content: '""',
        //       background: "red",
        //       position: "absolute",
        //       width: "100vw",
        //       height: "100vh",
        //       left: 0,
        //       top: 0,
        //       zIndex: 220,
        //       transform: "var(transform)"
        //     }
        //   }}>
            ><div
        

        className="homeC">
            {/* <CursorFollower/> */}
           <div className="transition-yellow"></div>
            <div className="center">
                {/* <canvas className="webgl"></canvas> */}
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
        <Link style={{cursor:"none"}} to="/project1">
            <img className="project-image first-p" src={covac} alt="" />
        </Link>
    </div>
    
    <div className="project p-2">
        <Link style={{cursor:"none"}} to="/project2">
            <div className="pitch">THIS PAGE IS UNDER CONSTRUCTION,<br/> MEANWHILE LOOK AT <br/>PITCH DECK</div>
            <img className="project-image second-p" src={rogalik} alt="" />
        </Link>
    </div>

    <div className="project p-3">
        <Link style={{cursor:"none"}} to="/project3">
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
        
     );
}

export default Home;