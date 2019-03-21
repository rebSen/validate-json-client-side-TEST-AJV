import React, { Component } from 'react'
import Ajv from 'ajv';
// import schema from './schema'
export default class TestAjv extends Component {

  state = {
    file: ''
  }


  handleSubmit = (e) => {
    e.preventDefault()
    // WARNING schema should be out of this function, in a JSON file
    let schema = {
      "type": "object",
      "additionalProperties": true,
      "required": ["hello"],
      "items": {
        "hello": {
          "type": "string"
        }
      }
    }
    // the type of le file is 'string' 
    console.log('fil', typeof (this.state.file));

    //let data = { "hello": "world" } > thats whats is in the file to validate
    let data = JSON.parse(this.state.file)
    let ajv = new Ajv()
    let valid = ajv.validate(schema, data)
    if (valid) {
      console.log('Valid !')
    } else {
      console.log('Invalid', ajv.errors);
    }

  }

  // Handle Upload Using FileReader
  handleFile = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = (event) => {
      console.log(event.target.result);
      this.setState({
        file: event.target.result
      });
    }
    reader.readAsText(file)
  }


  render() {
    return (
      // <form onSubmit={this.test()}>
      // <form onSubmit={this.handleSubmit}>
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input type="file" onChange={this.handleFile} />
        <button >Submit</button>
      </form>
    )
  }
}