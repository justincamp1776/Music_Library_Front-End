import React from 'react';
import './TitleBar.css'
import logo from '../../static/images/signboard.png'


const TitleBar = () => {
    return (  
        <div className="bar">
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center ">
            <a className="navbar-brand" style={{fontFamily: "monospace"}}href="#">
            <img src={logo} width="40" height="40" class="d-inline-block align-top"/>
                Tunester </a>
            </nav>  
        </div>
    );
}
 
export default TitleBar;






