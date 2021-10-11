import React from 'react';
import './Header.css'
import music from '../../static/images/music.png'

const Header = () => {
    return (  

        <div className="container-fluid">
            <div className="col-md-12">
                
                    <div className="image"> <img src={music} alt="header"/> </div>
           
            </div>
        </div>
    );
}
 
export default Header;