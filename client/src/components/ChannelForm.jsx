import React from 'react'

import { createChannel } from '../api'

class ChannelForm extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      name: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    e.preventDefault()
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    if (this.state.name){
      let uniqueName = true
      this.props.channels.map(channel => {
        if (channel.name === this.state.name){
          uniqueName = false
        }
        return null
      })
      if (uniqueName === true){
        createChannel(this.state.name)
        this.setState({
          name: ''
        })
      }
    }
  }

  render(){
    return (
      <div className ="messaging center-block">
      <div className="row chat-send">
      <div className=" col-md-12">
      <form className="input-group" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.name}
          placeholder="New Channel"
          className="form-control"
          onChange={this.handleChange}
        ></input>
        <button className="btn btn-primary">Create</button>
      </form>
      </div>
      </div>
      </div>
    )
  }
}

export default ChannelForm
