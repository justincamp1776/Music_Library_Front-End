import React, {Component} from 'react';
import './SearchBar.css'


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value : ''
         }
    }


    handleChange =(event) =>{
        this.setState({
            [event.target.keyWord] : event.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.handleSearch(this.state.value)
    }


    render() { 
        return (  
            <form onSubmit={this.handleSubmit}action="/" method="get">
            <label htmlFor="header-search">
                <span className="visually-hidden">Search Songs</span>
            </label>
            <input
                type="text"
                onChange={this.handleChange}
                id="header-search"
                placeholder="Search Your Favorite Songs"
                name="keyWord" />
            <button type="submit">Search</button>
        </form>
        );
    }
}
 
export default SearchBar;