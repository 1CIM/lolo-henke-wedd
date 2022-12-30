import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import MobNav from './MobNav';

const Navbar = () => {
  const [mobNav, setMobNav] = useState(false);
  const Toggle = () => setMobNav(!mobNav);

  const router = useRouter();
  const location = router.asPath;
  const homeActive = ['/'].includes(location) ? 'active' : '';
  const findActive = ['/hitta'].includes(location) ? 'active' : '';
  const logiActive = ['/logi'].includes(location) ? 'active' : '';
  const wishActive = ['/onskelista'].includes(location) ? 'active' : '';
  const contactActive = ['/kontakt'].includes(location) ? 'active' : '';

  return (
    <>
      <menu className='nav-bar'>
        <ul>
          <li>
            <Link className={`nav-bar__link ${homeActive}`} href='/'>
              välkommna
            </Link>
          </li>
          <li>
            <Link className={`nav-bar__link ${findActive}`} href='/hitta'>
              hitta hit
            </Link>
          </li>
          <li>
            <Link className={`nav-bar__link ${logiActive}`} href='/logi'>
              logi
            </Link>
          </li>
          <li>
            <Link className={`nav-bar__link ${wishActive}`} href='/onskelista'>
              önskelista
            </Link>
          </li>
          <li>
            <Link className={`nav-bar__link ${contactActive}`} href='/kontakt'>
              kontakt
            </Link>
          </li>
        </ul>
      </menu>
      <menu className='mobile-nav'>
        <MobNav />
      </menu>
    </>
  );
};

export default Navbar;
