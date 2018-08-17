import React  from 'react';
import {Link} from 'react-router-dom';


const Event = ({event, showEdit, deleteEvent}) =>{
  return <div className="card text-white bg-primary mb-3" >
  <h1 className="card-header">{event.title}</h1>
  <div className="card-body">
    <h4 className="card-title">{event.description}</h4>
    <h2 className="card-text">{event.date}</h2>
    {
      showEdit ? 
      <div>
      <Link to={`/events/${event.id}/edit`} type="buttom" className="btn btn-info">Edit</Link> 
      <button onClick={deleteEvent} type="buttom" className="btn btn-danger">Delete</button> 
      </div>
    :
    <Link to={`/events/${event.id}`} type="buttom" className="btn btn-primary">See more</Link>
    }
  </div>
</div>

}

export default Event