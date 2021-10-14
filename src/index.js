import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// var project = document.querySelector(".project");

// var cursorFollower = document.getElementById("cursor-follower"),
// cursor = document.getElementById("cursor");

// var posX = 0, posY =0, mouseX=0, mouseY=0;

// gsap.to({}, 0.016, {
//   repeat:-1,
//   onRepeat:function(){
//     posY += (mouseY - posY) / 9;
//     posX += (mouseX - posX) / 9;
//   }
// });
// gsap.set(cursorFollower, {
//   css:{
//     left:posX -20,
//     top:posY -20
//   }
// });
// gsap.set(cursor,{
//   css:{
//     left:mouseX,
//     top:mouseY
//   }
// });





// document.addEventListener("mousemove", e=>{
//   mouseX = e.pageX;
//   mouseY = e.pageY;
// });

// project.addEventListener("mouseenter", function(){
//   cursorFollower.classList.add("activeC");
// });

// project.addEventListener("mouseenter", function(){
//   cursorFollower.classList.remove("activeC");
// });


document.getElementById("goToTop").addEventListener("click", function(){
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
