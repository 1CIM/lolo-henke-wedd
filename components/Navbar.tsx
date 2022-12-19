import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <menu>
      <ul>
        <li>
          <Link href='/'>välkommna</Link>
        </li>
        <li>
          <Link href='/'>hitta hit</Link>
        </li>
        <li>
          <Link href='/'>logi</Link>
        </li>
        <li>
          <Link href='/'>önskelista</Link>
        </li>
        <li>
          <Link href='/'>kontakt</Link>
        </li>
      </ul>
    </menu>
  );
};

export default Navbar;
