import React from 'react';
import {Link} from 'react-router-dom';

const LoandingPage = () => {
   return <div className="jumbotron">
   <h1 className="display-3">Welcome to Events!</h1>
   <p className="lead">Its a full stack apllication where you can see amazing events</p>
   <hr className="my-4"/>
   <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
   <p className="lead">
     <Link   to='/events' className="btn btn-primary btn-lg" href="#" role="button">Learn more</Link>
   </p>
 </div>
  

}


export default LoandingPage