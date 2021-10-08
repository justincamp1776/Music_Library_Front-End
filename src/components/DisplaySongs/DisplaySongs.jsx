import React from 'react';
import './DisplaySongs.css';

const DisplaySongs = (props) => {




    return (  
            <div >
                <table className="row-center" size="lg">
                <thead style={{border: "3px solid rgb(0, 0, 0)"}} >
                    <tr>
                        <th>ARTIST</th>
                        <th>TITLE</th>
                        <th>ALBUM</th>
                        <th>GENRE</th>
                        <th>LIKES</th>
                        <th>RELEASE DATE</th>
                    </tr>
                </thead>
               
                    {props.songs.map(item=>(
                    <tr style={{border: "2px solid rgb(0, 0, 0)"}}  key= {item.song_id}>
                        <td>{item.artist} </td>
                        <td>{item.title}</td>
                        <td>{item.album}</td>
                        <td>{item.genre}</td>
                        <td>{item.likes}</td>
                        <td>{item.release_date}</td>
                        <td><button onClick={()=>props.deleteSong(item.id)}>Delete</button></td>
                    </tr>
                    ))}
                 </table>
            </div>
    );
}
 
export default DisplaySongs;