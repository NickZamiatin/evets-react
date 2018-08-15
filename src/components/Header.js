import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
   return <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{marginBottom : 40}}>
    <Link  to='/' className="navbar-brand" href="#">Home</Link>
    <Link   to="/events/create" className="navbar-brand" href="#">Create</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">  
      </button>
   </nav>
}


export default Header