import React, {Component} from 'react';
import axios from 'axios';
import './App.css'
import TitleBar from './components/TitleBar/TitleBar';
import TableViewer from './components/TableViewer/TableViewer';
import CreateSong from './components/CreateSong/CreateSong';
import SearchBar from './components/SearchBar/SearchBar';


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

    getAllSongs = async () =>{
        let response = await axios.get('http://127.0.0.1:8000/music/')
        this.setState({
            songs : response.data
        });
    }

    deleteSong = async (songId) =>{
        let response = await axios.delete('http://127.0.0.1:8000/music/'+ songId);
        this.getAllSongs()
        return response.status
    }

    postSong = async (newSong) =>{
        console.log(newSong.title)
        let response = await axios.post('http://127.0.0.1:8000/music/', newSong)
        this.getAllSongs()
        return response.status
    }

    handleSearch = (keyWord) =>{
        let newList = this.state.songs.filter(song.namekeyWord)
        this.setState({
            songs : newList
        })

    }




    render() { 
        return (  
            <div className="container-fluid">
                <TitleBar />
                <SearchBar handleSearch={this.handleSearch}/>
                <TableViewer songs={this.state.songs} deleteSong={this.deleteSong}/>
                <CreateSong postSong={this.postSong}/>
            </div>

        );
    }
}
 
export default App;