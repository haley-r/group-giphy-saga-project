import React, { Component } from "react";
import { connect } from "react-redux";
import axios from 'axios';

class Search extends Component {

  state = {
    searchInput: ''
  }

  search=()=> {
    let searchString=this.state.searchInput;
    console.log(`gonna search for ${searchString}`);

    this.props.dispatch({type: 'FETCH_GIF', payload: searchString})

    // axios({
    //   method: 'GET',
    //   url: '/api/search'
    // }).then((response)=> {
    //   console.log('this is the client side: ', response.data.data)
    // }).catch((error) => {
    //   console.log('client', error);
    // })//end axios
  }

  trackSearchInput=(event)=>{
    this.setState({
      searchInput: event.target.value
    })
  }

  render() {
    return (
      <div className="Search">
        <input type="text" onChange={this.trackSearchInput} placeholder="what would you like to see?" value={this.state.searchInput}/>
        <button onClick={this.search}>send search</button>
      </div>
    );
  }
}
const getStore = reduxState => ({
  reduxState
});
export default connect(getStore)(Search);
