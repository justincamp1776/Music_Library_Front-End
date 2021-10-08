import React, {Component} from 'react';
import axios from 'axios';
import './App.css'
import TitleBar from './components/TitleBar/TitleBar';
import TableViewer from './components/TableViewer/TableViewer';

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
                <TitleBar />
                <TableViewer songs={this.state.songs}/>
            </div>

        );
    }
}
 
export default App;