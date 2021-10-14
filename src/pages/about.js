import React from "react";
import SC from '../images/scimg.jpg'

function About() {
    return ( 
        <div className="about-container">
            <div className="about-text">
                <h2>Nice to Meet you!</h2>
                <p style={{marginTop:"2rem"}}>Hello, I am Sarath Chand, graduated and specialized in Electronics.</p>
                <p>At college, I always enjoyed using Photoshop and designing stuff. In my 3rd and 4th year's, I became the Design Team Head of VASHISHT, our college technical fest. During then, I got to learn how to manage a team.</p>
                <p>Later in 4th year, I got an opportunity to design an Interface for our unofficial college app. It was challenging. Then I decided to take it up as a career. Later, I took a UX Course developed by Google, including three hands-on projects. It helped me gain a lot of knowledge on UX Design.</p>
                <p>When I'm not designing, you can find me practising photography, playing Pubg, listening to music, or watching another Netflix Series.</p>
            </div>

            <img className="my-image" src={SC} alt="MyImage"/>
        </div>
     );
}

export default About
