import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <header>
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
        <hr />
        {
          currentUser &&
          <>
            <Link to='/posts'>Kicks</Link>
            
          </>
        }
        
      </header>
      {props.children}
    </div>
  )
}