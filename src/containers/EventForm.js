import React, {Component} from 'react';
// import {Link} from 'react-router-dom';

class Eventform extends Component {
state = {
  event: {
    "title": "",
    "description": "",
    "date": "",
    "location": ""
    },
}
componentDidMount(){
  this.setState({
    event : {
      ...this.props.event
    }
  })
}

valueChange = (events) =>{
  const {name , value} = events.target
    this.setState((prewState)=> ({
      event: {
        ...prewState.event,
        [name]:value
      },
    }))
}

validEvent = () => {
  const {event} = this.state

  const hasTitle = typeof event.title === 'string' && event.title.trim() !== '';
  const hasDescription = typeof event.description === 'string' && event.description.trim() !== '';
  const hasDate = typeof event.date === 'string' && event.date.trim() !== '';
  const hasLocation = typeof event.location === 'string' && event.location.trim() !== '';
  return hasTitle && hasDescription && hasDate && hasLocation
}

formSubmit = (event) => {
  event.preventDefault();
  if (this.validEvent()){
    console.log(this.state.event)
    this.props.onFormSubmitted(this.state.event)
  }
}

  render(){
    const {event} = this.state;
    return (
      <form onSubmit={this.formSubmit} >
        <div className="form-group">
          <label className="control-label" htmlFor="disabledInput">Title of event</label>
          <input  onChange={this.valueChange} value={event.title} name="title" className="form-control" id="disabledInput" type="text" placeholder="Title " disabled=""/>
        </div>
        <div className="form-group">
           <label className="control-label"  htmlFor="disabledInput">Date of Event</label>
            <input onChange={this.valueChange} value={event.date} className="form-control" name="date" id="disabledInput" type="text" placeholder="mm/dd/yy " disabled=""/>
         </div>
        <div className="form-group">
           <label className="control-label"  htmlFor="disabledInput">Location of Event</label>
            <input onChange={this.valueChange} value={event.location} className="form-control" name="location" id="disabledInput" type="text" placeholder="Location " disabled=""/>
         </div>
        <div className="form-group">
           <label className="control-label"  htmlFor="disabledInput">Description of Event</label>
            <input  onChange={this.valueChange} value={event.description} className="form-control" name="description" id="disabledInput" type="text" placeholder="Description " disabled=""/>
         </div>
           <button type="buttom" className="btn btn-primary">Create</button>
       </form>
    )
  }
}

export default Eventform