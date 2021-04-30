import React from 'react';
// import { Link } from 'react-router-dom';
import Nav from '../shared/Nav';

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