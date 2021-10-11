import React, {Component} from 'react';
import axios from 'axios';
import './App.css'
import TitleBar from './components/TitleBar/TitleBar';
import TableViewer from './components/TableViewer/TableViewer';
import CreateSong from './components/CreateSong/CreateSong';
import SearchBar from './components/SearchBar/SearchBar';
import Header from './components/Header/Header';


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
        let finalList=[]
        let newList=this.state.songs.filter(song => song.title.toLowerCase().includes(keyWord.toLowerCase()))
        if(newList != undefined){
            finalList.push(newList)
        }
       

        this.setState({
            songs : finalList
        })
    }





    render() { 
        return (  
            <div className="container-fluid">
                <TitleBar />
                
                <SearchBar handleSearch={this.handleSearch} songs={this.state.songs} getAllSongs={this.getAllSongs} />
               
               
                <TableViewer songs={this.state.songs} deleteSong={this.deleteSong}/>
                
               
                <CreateSong postSong={this.postSong}/>
               
                
                
                
               
                
            </div>

        );
    }
}
 
export default App;