import React, { Component } from 'react'

export default class CreateContent extends Component {
  render() {
    return (
      <article>
        <h2>Create</h2>
        <form
              action = "/create_process"
              method = "post"
              onSubmit={function(e) {
                e.preventDefault();
                // debugger;
                this.props.onSubmit(
                  e.target.title.value,
                  e.target.desc.value
                )
                alert('submit!');
              }.bind(this)}>
          <p>
            <input type = 'text' name = 'title' placeholder='title'></input>
          </p>
          <p>
            <textarea name = 'desc' placeholder='description'></textarea>
          </p>
          <p>
            <input type = 'submit' value = '제출'></input>
          </p>
        </form>
      </article>
    )
  }
}