import React, {Component} from 'react';
import { withRouter} from 'react-router-dom';
import EventForm from './EventForm';
import {createEvent} from '../API'

class CreateEvents extends Component {
state = {
  event: {
  "title": "",
  "description": "",
  "date": "",
  "location": ""
  },
  creating: false
}

createEvent = (event) => {
 this.setState({
  creating: true,
 });

createEvent(event)
  .then(result => {
 this.props.history.push(`/events/${result.id}`)
 })
}

  render(){
    return (
      <div>
       <h1>Create Event</h1>
        <EventForm onFormSubmitted={this.createEvent} event={this.state.event} />
      </div>
    )
  }
}

export default withRouter(CreateEvents)