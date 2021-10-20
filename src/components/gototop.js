import React,{useEffect} from 'react';
import gototop from '../icons/gototop.svg';

function GoToTop(){

    useEffect(()=>{
        window.addEventListener("scroll", function(){
            document.getElementById("goToTop").classList.toggle("goappear", window.scrollY>600);
        })

        
        document.getElementById("goToTop").addEventListener("click", function(){
            window.scrollTo({
            top:0,
            behavior:"smooth"
            })
        })
    });

    return (
        <div id="goToTop" className="go-to-top">
            <img src={gototop} alt="" />
        </div>

    );
}

 
export default GoToTop;