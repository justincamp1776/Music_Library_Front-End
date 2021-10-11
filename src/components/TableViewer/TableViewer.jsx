import React from 'react';
import DisplaySongs from '../DisplaySongs/DisplaySongs';

const TableViewer = (props) => {
    return (  
        <div className="row ">
            <div className="col-md-12">
                <div className="row-center">
                    <DisplaySongs songs={props.songs} deleteSong={props.deleteSong}/>
                </div>
                
            </div>
        </div>
    );
}
 
export default TableViewer;