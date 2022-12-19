import Head from 'next/head';
import Image from 'next/image';
import HeadTag from '../components/HeadTag';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <HeadTag
        title={'Lowisa och Henrik'}
        content={'Information om Lowisa och Henriks bröllop'}
      />
      <header className='header'>
        <p>vi ska gifta oss</p>
        <h1>Lowisa & Henrik</h1>
        <p>datum</p>
        <p>datum2</p>
        <Navbar />
      </header>
      <main className='main'>
        <Image src="/front.webp" alt="" width={726} height={492}/>
        <p>Vi är jätteglada att nivill fira vår stora dag med oss!</p>
        <p>Den 5e Augusti 2023 i Falkenbergs kyrka säger vi JA till varandra.</p>
        <p>Efter det fortsätter festen i <a href="">Walencia</a></p>
      </main>
    </>
  );
};

export default Home;
