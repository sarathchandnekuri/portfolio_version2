import React from 'react';
import no_internet from '../images/no_internet.svg';

function Network(){

    return(

        <div className="network_page">

            <div className="error_text">
                <h1>Ouch! Cannot connect to Internet</h1>
                <h5>Please check your Internet connection and try again.</h5>
                <button style={{width:"180px", height:"50px", borderRadius:"25px"}}>Retry</button>
                
                
            </div>
            <div className="network-bg">
                    <img src={no_internet} alt="" />
                </div>
            

        </div>

    );

}

export default Network;