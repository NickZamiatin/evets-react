import React, {Component} from 'react';
import {getEvent, deleteEvent} from '../API';
import Event from '../components/Event';
import { withRouter} from 'react-router-dom';



class  ViewOneEvent extends Component {
  state = {
    isLoading: true,
    event: {}
  }
  componentDidMount(){
    const {id} = this.props.match.params
    getEvent(id)
      .then(event => {
        setTimeout(()=>{
          this.setState({
            event,
            isLoading: false
          })
        },1000)
      })
  }

  deleteEvent = () => {
    deleteEvent(this.state.event.id)
    .then(() =>{
      console.log(this.state.event.id)
       this.props.history.push('/events')
      })
  }

  render(){
    return (
      <div>
        {this.state.isLoading ? <h2>Loading </h2> : 
            <Event deleteEvent={this.deleteEvent}  event={this.state.event} showEdit={true}/>
         }
      </div>
    )
}
}

export default withRouter(ViewOneEvent)