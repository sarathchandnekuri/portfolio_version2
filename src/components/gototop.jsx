import React, { Component } from 'react';
import gototop from '../icons/gototop.svg';

class GoToTop extends React.Component {
    render() { 
        return (
            <div id="goToTop" className="go-to-top">
                <img src={gototop} alt="" />
            </div>
    
        );
    }
}
 
export default GoToTop;