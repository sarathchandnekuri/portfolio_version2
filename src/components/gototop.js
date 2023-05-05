import React,{useEffect} from 'react';

import { CDN } from '../config';

function GoToTop(){

    useEffect(()=>{
        if(document.getElementById("goToTop")){
            window.addEventListener("scroll", function(){
                document.getElementById("goToTop").classList.toggle("goappear", window.scrollY>600);
            })
        }
   
        document.getElementById("goToTop").addEventListener("click", function(){
            window.scrollTo({
            top:0,
            behavior:"smooth"
            })
        })
    });

    return (
        <div id="goToTop" className="go-to-top">
            <img style={{fill:'000'}} src={`${CDN}/icons/gototop+1.svg`} alt="" />
        </div>

    );
}

 
export default GoToTop;