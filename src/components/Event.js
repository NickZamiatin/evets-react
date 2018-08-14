import React  from 'react';
import {Link} from 'react-router-dom';


const Event = ({event, showEdit}) =>{
  return <div className="card text-white bg-primary mb-3" >
  <h1 className="card-header">{event.title}</h1>
  <div className="card-body">
    <h4 className="card-title">{event.description}</h4>
    <h2 className="card-text">{event.date}</h2>
    {
      showEdit ? 
    <Link to={`/events/${event.id}`} type="buttom" className="btn btn-danger">Edit</Link> :
    <Link to={`/events/${event.id}`} type="buttom" className="btn btn-primary">See more</Link>
    }
  </div>
</div>

}

export default Event