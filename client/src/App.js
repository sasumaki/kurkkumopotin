import React, { Component } from 'react'
import axios from 'axios'
import './App.css'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      selectedFile: null,
      mopoChance: undefined
    }
  }

  fileChangedHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] })
  }

  uploadHandler = () => {
    const formData = new FormData()
    formData.append('img', this.state.selectedFile, this.state.selectedFile.name)
    axios({
      method: 'post',
      url: 'http://localhost:5000/kurkkuvaimopo',
      data: formData,
      config: {
        headers: [
          { 'Content-Type': 'multipart/form-data' },
          { 'Access-Control-Allow-Origin': '*' }]
      }
    })
      .then((response) => {
        this.setState({ mopoChance: response.data })
      }
      )
      .catch(function (response) {
        //handle error
        console.log(response);
      })
  }

  render() {
    return (
      <div>
        <input type="file" onChange={this.fileChangedHandler} />
        <button onClick={this.uploadHandler}>Upload!</button>
        {this.state.mopoChance ? this.state.mopoChance >= 0.5 ?
          <h1>{(this.state.mopoChance * 100).toFixed(2)}% sure this is a moped</h1> :
          <h1>{((1 - this.state.mopoChance)* 100).toFixed(2)}% sure this is a cucumber</h1>
          : ''}</div>
    )
  }
}