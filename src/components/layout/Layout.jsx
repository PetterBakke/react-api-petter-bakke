import React from 'react'
import { Link } from "react-router-dom";
// import Heading from '../heading/Heading';



const links = [
  { title: 'Home', to: '/' },
  { title: 'Contact', to: '/contact' },
];

function Navbar() {
  return (
    <>
      <div>
        {links.map((link) => (
          
          <Link key={link.title} to={link.to}>
            <div>{link.title}</div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Navbar;