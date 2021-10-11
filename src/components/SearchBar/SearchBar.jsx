import React, {Component} from 'react';
import './SearchBar.css'


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            query : '',
         }
    }


    handleChange =(event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.handleSearch(this.state.query)
    }

    handleOnClick = (event) =>{
        event.preventDefault();
        this.props.getAllSongs()
    }

    render() { 
        
        return (  
            <div className="row">
                <div className="col-md-12">
                    <div className="search-bar">
                        <form  onSubmit={this.handleSubmit}action="/" method="get">
                            <label htmlFor="header-search"><span className="visually-hidden">Search Songs</span></label>
                            <input type="text" onChange={this.handleChange} value={this.state.query}
                                id="header-search" placeholder="title, artist, album, genre" name="query" />
                            <button type="submit">Search</button>
                            <button onClick={this.handleOnClick}>View All</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default SearchBar;