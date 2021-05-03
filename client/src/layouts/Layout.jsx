import React from 'react';


import Nav from '../shared/Nav/Nav';

export default function Layout(props) {
  const { currentUser } = props;
  return (
    <div>
      
      <Nav currentUser={currentUser}>

      </Nav>
      
      
      {props.children}
    </div>
  )
}