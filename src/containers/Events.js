import React, {Component} from 'react';
import Event from '../components/Event'
import {getAllEvents} from '../API'


class Events extends Component {
state = {
  isLoading: true,
  events: []
}

componentDidMount(){
  getAllEvents()
    .then(events => {
      setTimeout(()=>{
        this.setState({
          events,
          isLoading: false// dont show false 
        })
      },1000)
    })
}

  render (){
    return (
      <div>
        <h2></h2>
        {this.state.isLoading ? <h2>Loading </h2> : this.state.events.map(event =>(
            <Event key={event.id} event={event} />
        )) }
        <h2></h2>
      </div>
    );
  }
}

export default Events