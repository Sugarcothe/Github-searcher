import React from 'react';
import propTypes from 'prop-types';
import Useritem from './Useritem';

 const Navbar = ({icon, title }) => {
    return (
      <nav className='navbar bg-primary'>
        <h1><i className={icon}/> {title}</h1>
      </nav>
    )
};
Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
};

Useritem.propTypes = {
user: propTypes.object.isRequired,
}

export default Navbar

