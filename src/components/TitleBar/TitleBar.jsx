import React from 'react';
import './TitleBar.css'


const TitleBar = () => {
    return (  
        <div className="bottom">
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <a className="navbar-brand" style={{paddingLeft: "900px"}} href="#">Tunester</a>
            </nav> 
        </div>
    );
}
 
export default TitleBar;