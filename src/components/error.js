import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
        return(
            <div className="error_page">
                <div className="error_text">
                    <h1>Oops! Page Not Found</h1>
                    <h5>If you came here to see my 404 design, then you are in right place, visit homepage from here.</h5>
                    <Link to="/"><button style={{width:"180px", height:"50px", borderRadius:"25px"}}>Homepage</button>
                    </Link>
                </div>
                
                <div className="error-bg"></div>
                {/* <img id="error404" alt="" /> */}
            </div>
        );
}
 
export default Error;