import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <menu className='nav-bar'>
      <ul>
        <li>
          <Link className='nav-bar__link nav-bar__link--active' href='/'>välkommna</Link>
        </li>
        <li>
          <Link className='nav-bar__link' href='/'>hitta hit</Link>
        </li>
        <li>
          <Link  className='nav-bar__link' href='/'>logi</Link>
        </li>
        <li>
          <Link  className='nav-bar__link' href='/'>önskelista</Link>
        </li>
        <li>
          <Link  className='nav-bar__link' href='/'>kontakt</Link>
        </li>
      </ul>
    </menu>
  );
};

export default Navbar;
