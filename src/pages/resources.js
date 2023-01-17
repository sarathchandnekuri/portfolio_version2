import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CursorFollower from '../components/cursorFollower';
import {motion} from 'framer-motion';
import {CDN} from '../config';  

function Resources(){

    useEffect(() => {
        const script = document.createElement("script");
        const div = document.getElementById("supportByBMC"); 
        script.setAttribute("data-cfasync", "false"); 

        script.setAttribute('data-name','BMC-Widget')
        script.src = "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
        script.setAttribute('data-id', 'sarathnekuri');
        script.setAttribute('data-description', 'Support me on Buy me a coffee!');
        script.setAttribute('data-message', 'All the resources are free to use. Do you want to help supporting it?');
        script.setAttribute('data-color',"#fce264")
        script.setAttribute('data-position','right')
        script.setAttribute('data-x_margin','18')
        script.setAttribute('data-y-margin','18') 
  
        div.appendChild(script);
    }, []);

    return(
        <div className='resources-page'><CursorFollower/>

        <motion.div
        animate={{opacity:1,  translateY:"0px"}}
        initial={{opacity:0, translateY:"50px"}}
        transition={{ duration: 1.5 }}
        exit={{opacity:0, translateY:"50px"}}>

            <h1>Resources</h1>

            <div className="resources-container">
                <div className="resource" style={{textAlign:'center'}}>
                    <Link to="/social-media" className='resource-thumbnail'>
                        <img src={`${CDN}/images/Resources/Social Media/Social Media Thumbnail.jpg`} alt="" />
                    </Link>
                </div>
            </div>
            <div id="supportByBMC"></div>  
        </motion.div>
        </div>
    );
    
}

export default Resources