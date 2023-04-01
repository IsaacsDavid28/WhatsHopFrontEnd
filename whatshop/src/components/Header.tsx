import React from 'react';
import { Link } from 'react-router-dom';
import { NavItem } from 'reactstrap';
export function Header() {
 return (
  <>
   <nav className='Header'>
     <h1>
       <Link className='whatshop' to="/">What's Hop?</Link>
     </h1>
     <ul>
      <li>
      <Link className="headerlink" to="/favorites">Favorite</Link>
      </li>
      <li>
         <Link className='headerlink' to="/glossary">Glossary</Link>
         </li>
       <li>
         <Link className='headerlink' to="/profile">Profile</Link>
       </li>
       <li>
         <Link className='headerlink' to="/my-reviews">My Reviews</Link>
       </li>
     </ul>
   </nav>
   </>
 );
}