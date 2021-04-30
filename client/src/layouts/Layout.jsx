import React from 'react';
// import { Link } from 'react-router-dom';
import Nav from '../shared/Nav';

export default function Layout(props) {
  // const { currentUser, handleLogout } = props;
  return (
    <div>
      <Nav>
        
      </Nav>
      {/* <header>
        <h1>Sneakerheads</h1>
        {
          currentUser ?
            <>
              <p>Welcome, {currentUser.username}!</p>
              <button onClick={handleLogout}>Logout</button>
            </>
            :
            <Link to='/login'>Login</Link>
        }
        {
          currentUser &&
          <>
            <Link to='/posts'>Kicks</Link>
            
          </>
        }
        
        <hr />
      </header> */}
      
      {props.children}
    </div>
  )
}