import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Nav.css"


export default function Nav(props) {
  const {currentUser} = props
  const authenticatedOptions = (
    <>
      <NavLink className="link" to="/profile">Profile</NavLink>
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







