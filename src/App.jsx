import React, {Component} from 'react';
import axios from 'axios';
import './App.css'
import DisplaySongs from './components/DisplaySongs/DisplaySongs';
import TitleBar from './components/TitleBar/TitleBar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            songs : []
        }
    }

    componentDidMount(){
        this.getAllSongs();
    }

    async getAllSongs(){
        debugger
        let response = await axios.get('http://127.0.0.1:8000/music/')
        this.setState({
            songs : response.data
        });
    }





    render() { 
        return (  
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                    <TitleBar />
                    <DisplaySongs songs = {this.state.songs}/>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default App;