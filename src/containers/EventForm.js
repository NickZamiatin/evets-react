import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Eventform extends Component {
state = {
  event: {},
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
  const hasTitle = event.title.trim() !== '';
  const hasdescription = event.description.trim() !== '';
  const haslocation = event.location.trim() !== '';
  const hasdate = !isNaN(event.date);
  return  hasTitle && hasdescription && haslocation && hasdate
}

formSubmit = (event) => {
  event.preventDefault();
  if (this.validEvent()){

  }
  console.log(this.state.event)
}

  render(){
    return (
      <form onSubmit={this.formSubmit} >
        <div className="form-group">
          <label className="control-label"     for="disabledInput">Title of event</label>
          <input  onChange={this.valueChange}  name="title" className="form-control" id="disabledInput" type="text" placeholder="Title " disabled=""/>
        </div>
        <div className="form-group">
           <label className="control-label"  for="disabledInput">Date of Event</label>
            <input onChange={this.valueChange} className="form-control" name="date" id="disabledInput" type="text" placeholder="mm/dd/yy " disabled=""/>
         </div>
        <div className="form-group">
           <label className="control-label"  for="disabledInput">Location of Event</label>
            <input onChange={this.valueChange} className="form-control" name="location" id="disabledInput" type="text" placeholder="Location " disabled=""/>
         </div>
        <div className="form-group">
           <label className="control-label"  for="disabledInput">Description of Event</label>
            <input  onChange={this.valueChange} className="form-control" name="description" id="disabledInput" type="text" placeholder="Description " disabled=""/>
         </div>
           <button type="buttom" className="btn btn-primary">Create</button>

       </form>
    )
  }
}

export default Eventform