import React, {Component} from 'react';

class UpdateSong extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            artist : '',
            title : '',
            album : '',
            genre : '',
            release_date : '',
        }
    }

        handleChange = (event) =>{
            this.setState({
                [event.target.name] : event.target.value
            })
        }

        handleSubmit = (event) =>{
            event.preventDefault();
            this.props.updateSong(this.state)
        }

    render() { 
        return (  
            <div>
                 <div>
                     <dialog id="Update Song">
                            <form method="dialog">
                                <label>Artist:</label>
                                <input name="artist" onChange={this.handleChange} value={this.state.artist} placeholder={this.props.song_to_update.artist}/>
                                <label>Title:</label>
                                <input name="title" onChange={this.handleChange} value={this.state.title} placeholder={this.props.song_to_update.title}/>
                                <label>Album:</label>
                                <input name="album" onChange={this.handleChange} value={this.state.album} placeholder={this.props.song_to_update.album}/>
                                <label>Genre:</label>
                                <input name="genre" onChange={this.handleChange} value={this.state.genre} placeholder={this.props.song_to_update.genre}/>
                                <label>Release Date:</label>
                                <input name="release_date" onChange={this.handleChange} value={this.state.artist} placeholder={this.props.song_to_update.release_date}/>

                                <menu>
                                    <button>Cancel</button>
                                    <button>Confirm</button>
                                </menu>
                                
                            </form>
                        </dialog> 
                    </div> 
                </div>
        );
    }
}
 
export default UpdateSong;