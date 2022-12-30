import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const MobNav = () => {
  const [nav, setNav] = useState(false);
  const Toggle = () => setNav(!nav);
  const isOpen = nav ? 'is-open' : '';

  const router = useRouter();
  const location = router.asPath;
  const homeActive = ['/'].includes(location) ? 'active' : '';
  const findActive = ['/hitta'].includes(location) ? 'active' : '';
  const logiActive = ['/logi'].includes(location) ? 'active' : '';
  const wishActive = ['/onskelista'].includes(location) ? 'active' : '';
  const contactActive = ['/kontakt'].includes(location) ? 'active' : '';
  return (
    <>
      <a className={`btn-burger ${isOpen}`} onClick={() => Toggle()}></a>

      <div className={`side-menu ${isOpen}`}>
        <ul className='list-items'>
          <li>
            <Link
              href='/'
              className={`nav-link nav-link--${homeActive}`}
              onClick={() => Toggle()}>
              Välkommna
            </Link>
          </li>
          <li>
            <Link
              href='/hitta'
              className={`nav-link nav-link--${findActive}`}
              onClick={() => Toggle()}>
              Hitta hit
            </Link>
          </li>
          <li>
            <Link
              href='/logi'
              className={`nav-link nav-link--${logiActive}`}
              onClick={() => Toggle()}>
              Logi
            </Link>
          </li>
          <li>
            <Link
              href='/onskelista'
              className={`nav-link nav-link--${wishActive}`}
              onClick={() => Toggle()}>
              Önskelista
            </Link>
          </li>
          <li>
            <Link
              href='/kontakt'
              className={`nav-link nav-link--${contactActive}`}
              onClick={() => Toggle()}>
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobNav;
