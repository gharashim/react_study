import React, { Component } from 'react';
import '../App.css';

class Subject extends Component {
  render() {
    return (
      <header>
        <h1><a
              className='page-title'
              href="/"
              onClick = {function(e) {
                e.preventDefault();
                this.props.onChangePage();
              }.bind(this)}
              >{this.props.title}</a></h1>
        {this.props.sub}
      </header>
    );
  }
}

export default Subject;