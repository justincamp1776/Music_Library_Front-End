import React from 'react';
import './DisplaySongs.css';

const DisplaySongs = (props) => {

    return (  
        
                <table  size="lg">
                <thead>
                    <tr>
                        <th>Artist</th>
                        <th>Title</th>
                        <th>Album</th>
                        <th>Genre</th>
                        <th>Likes</th>
                        <th>Release Date</th>
                    </tr>
                </thead>
               
                    {props.songs.map(item=>(
                    <tr key= {item.song_id}>
                        <td>{item.artist} </td>
                        <td>{item.title}</td>
                        <td>{item.album}</td>
                        <td>{item.genre}</td>
                        <td>{item.likes}</td>
                        <td>{item.release_date}</td>
                    </tr>
                    ))}
               
              
            </table>
 
    );
}
 
export default DisplaySongs;