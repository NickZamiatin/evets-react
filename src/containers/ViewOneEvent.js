import React, {Component} from 'react';
import {getEvent} from '../API';
import Event from '../components/Event';


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
  render(){
    return (
      <div>
        {this.state.isLoading ? <h2>Loading </h2> : 
            <Event  event={this.state.event} showEdit={true}/>
         }
      </div>
    )
}
}

export default ViewOneEvent