import React, { Component } from 'react';
import { connect } from 'react-redux';

class Search extends Component {
  componentDidMount() {
  this.showGIF()
  }
  
  showGIF() {
    this.props.dispatch({
      type: "GET_GIF"
    })
  }
  render() {
    return (
      <div>
     
      </div>
    );
  }
  
}
const getStore = (reduxState) => ({
  reduxState
});
export default connect(getStore)(Search);
