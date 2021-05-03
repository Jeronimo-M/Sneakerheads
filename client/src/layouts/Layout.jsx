import React from 'react';


import Nav from '../shared/Nav/Nav';

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      
      <Nav currentUser={currentUser}
      handleLogout={handleLogout}>

      </Nav>
      
      
      {props.children}
    </div>
  )
}