import React, {Component} from 'react';
import './CreateSong.css';



class CreateSong extends Component {
    constructor(props) {
        super(props);
        this.state = { 
                title : '',
                artist : '',
                album : '',
                release_date : null,
                genre : '',    
         }
    }

    handleChange = (event) =>{
        console.log(event.target.value);
        console.log(event.state)
        this.setState({
         [event.target.name] : event.target.value
        })
    }

    handleSumbit = (event) =>{
        event.preventDefault();
        this.props.postSong(this.state)
    }

    render() {
        return (  

            <div className="container-fluid">
                <div className="row">
                    <div Classname="col-md-12">
                       <div className="text"><span class="blinking"><strong> Add Your Favorite Song:</strong></span></div> 
                        <div className="form">
                            <form  style={{marginRight: '200px'}}  onSubmit={this.handleSumbit}>
                                <label style={{marginRight: '68px'}} >TITLE</label>
                                <input  name="title" onChange={this.handleChange} value={this.state.title}/><br/>
                                <label style={{marginRight: '56px'}} >ARTIST</label>
                                <input name="artist" onChange={this.handleChange} value={this.state.artist}/><br/>
                                <label style={{marginRight: '52px'}}  >ALBUM</label>
                                <input name="album" onChange={this.handleChange} value={this.state.album}/><br/>
                                <label style={{marginRight: '3px'}} >RELEASE DATE</label>
                                <input style={{marginRight: '100px'}}name="release_date" onChange={this.handleChange} value={this.state.release_date}/><br/>
                                <label style={{marginRight: '56px'}} >GENRE</label>
                                <input name="genre" onChange={this.handleChange} value={this.state.genre}/><br/>
                                <button  class="btn btn-secondary btn-lg btn-block"  style={{marginLeft: '5px', paddingRight: "110px",paddingLeft: "110px" }}  type='Submit'>Add Song</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default CreateSong;