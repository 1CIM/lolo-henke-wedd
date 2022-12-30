import { NextPage } from 'next';
import HeadTag from '../components/HeadTag';
import Navbar from '../components/Navbar';

const Hitta: NextPage = () => {
  return (
    <>
      <HeadTag
        title={'Hitta hit'}
        content={'Information om Lowisa och Henriks bröllop'}
      />
      <header className='header'>
        <h1>Hitta till lokalerna</h1>
      </header>
      <nav>
        <Navbar />
      </nav>
      <main className='find'>
        <article className='map'>
          <h3>Falkenberg kyrka</h3>
          <figure className='map__image'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1089.3645500219532!2d12.487287117443836!3d56.90203150000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4651cfd9bc1aaa65%3A0x7527957bccca811!2sFalkenberg%20Church!5e0!3m2!1sen!2sse!4v1671808106357!5m2!1sen!2sse'
              width='593'
              height='338'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'></iframe>
            <figcaption>Nygatan 41, 311 31 Falkenberg</figcaption>
          </figure>
        </article>
        <article className='map'>
          <h3>Walencia</h3>
          <figure className='map__image'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1096.8077376409285!2d12.469498910667218!3d56.90659148152245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4651cef2de2a82ff%3A0xd00b23701a8dcfc4!2sWalencia%20Aktivitet%20%26%20Utbildning!5e0!3m2!1sen!2sse!4v1671808444484!5m2!1sen!2sse'
              width='593'
              height='338'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'></iframe>
            <figcaption> Valenciavägen 20, 311 75 Falkenberg</figcaption>
          </figure>
        </article>
      </main>
    </>
  );
};

export default Hitta;
