
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from './auth/LogoutButton';
import DemoUserButton from './auth/DemoUserButton';

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
        <li>
        |
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
      <div className='navbar'>
        <div className='navbar__link'>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home 
          </NavLink>
      </div>
      <div>
        |
        </div>
        <div className='navbar__link'>
          <NavLink to='/users' exact={true} activeClassName='active'>
            My Campaigns 
          </NavLink>
        </div>
        <div>
        |
        </div>
        <div className='navbar__link'>
          <NavLink to='/users' exact={true} activeClassName='active'>
            My Characters 
          </NavLink>
        </div>
        <div className="navbar__link" id="navbar-userProfilePic">
              <img alt="profile-pic" src={`${profileImage}`} style={{height:'45px', width:'45px', 'borderRadius':'50%', margin: '5px', marginTop : '10px', objectFit: 'cover'}}/>
          </div>
          <div>
          <LogoutButton />
          </div>
      </div>
    )
  }

  return (
    <nav>
      { user? <div className="navbar-leftSide">
        <NavLink to='/' exact={true} activeClassName='active'>
        <img  className="nav-logo" src="https://user-images.githubusercontent.com/35717793/127536568-030443d6-ab1d-48f2-9da5-c422545245e5.png" alt="RollBound logo" />
        <h2 className="nav-brand">RollBound</h2>
        </NavLink>
      </div>  : <div className="navbar-leftSide">
        <NavLink to='/login' exact={true} activeClassName='active'>
          <img className="nav-logo" src="https://user-images.githubusercontent.com/35717793/127536568-030443d6-ab1d-48f2-9da5-c422545245e5.png" alt="RollBound logo" />
          <h2 className="nav-brand">RollBound</h2>
        </NavLink>
      </div>

      }
      {navContent}
    </nav>
  );
}

export default NavBar;
