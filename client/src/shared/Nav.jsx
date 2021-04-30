import React from 'react';
import { NavLink } from 'react-router-dom';


      
        <h1>Sneakerheads</h1>
        {/* {
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
        } */}
        
        <hr />
        const authenticatedOptions = (
          <>
            <NavLink className="link" to="/register">Register</NavLink> 
            {/* <NavLink className="link" to="/sign-out">Sign Out</NavLink> */}
          </>
        ) 

        const unauthenticatedOptions = (
          <>
            <NavLink className="link" to="/register">Sign Up</NavLink>
            <NavLink className="link" to="/login">Sign In</NavLink>
          </>
        )

        const alwaysOptions = (
          <>
            <NavLink className="link" to="/posts">Kicks</NavLink>
          </>
        )

        const Nav = ({ currentUser }) => {
            return (
              <nav>
                <div className="nav">
                    <NavLink className="logo" to="/">Sneakerheads</NavLink>
                    <div className="links">
                        {currentUser && <div className="link welcome">Welcome, {currentUser.username}</div>}
                        {alwaysOptions}
                        {currentUser ? authenticatedOptions : unauthenticatedOptions}
                    </div>
                </div>
              </nav>
        )
        }
      
      // {props.children}
    // </div>
  // )
// }
export default Nav