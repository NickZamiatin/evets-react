import React, {Component} from 'react';
import { withRouter} from 'react-router-dom';

import { getEvent, updateEvent } from '../API';
import Eventform from './EventForm';

class UpdateEvent extends Component {
state = {
  isLoading: true,
  event: {},
  isEditing: false
}

componentDidMount (){
  const {id} = this.props.match.params
  getEvent(id)
    .then(event =>{
      setTimeout(()=>{
        this.setState({
          event,
         isLoading: false })

      },100)
    })
}

updateEvent = (event) => {
  this.setState({
    isEditing : true
  })
    updateEvent(event.id, event)
      .then(()=>{
        this.props.history.push(`/events/${event.id}`)
      })
}

  render (){
    return this.state.isLoading ? <h1>Loading</h1> 
    : this.state.isEditing ?
    <h1>Loading</h1> :
     <Eventform onFormSubmitted={this.updateEvent} event={this.state.event}/>
  }
}

export default withRouter(UpdateEvent)