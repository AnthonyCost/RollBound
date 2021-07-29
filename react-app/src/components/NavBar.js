
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from './auth/LogoutButton';

const NavBar = () => {

  const user = useSelector(state => state.session.user);
  const profileImage = user?.img_url;
  let navContent = null;

  if(!user) {
    navContent = (
      <ul className='navbar'>
        <li className='navbar__link'>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li className='navbar__link'>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
      </ul>
    )
  }
  
  else {
    navContent = (
      <ul className='navbar'>
        <li className='navbar__link'>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li className='navbar__link'>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li className='navbar__link'>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        <li className='navbar__link'>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    )
  }

  return (
    <nav>
      { user? <div className="navbar-leftSide">
        <NavLink to='/' exact={true} activeClassName='active'>
        <img  className="nav-logo" src="https://user-images.githubusercontent.com/35717793/127536568-030443d6-ab1d-48f2-9da5-c422545245e5.png" />
        <h2 className="nav-brand">RollBound</h2>
        </NavLink>
      </div>  : <div className="navbar-leftSide">
        <NavLink to='/login' exact={true} activeClassName='active'>
          <img className="nav-logo" src="https://user-images.githubusercontent.com/35717793/127536568-030443d6-ab1d-48f2-9da5-c422545245e5.png" />
          <h2 className="nav-brand">RollBound</h2>
        </NavLink>
      </div>

      }
      {navContent}
    </nav>
  );
}

export default NavBar;
