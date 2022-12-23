import Image from 'next/image';
import HeadTag from '../components/HeadTag';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <HeadTag
        title={'Lowisa och Henrik'}
        content={'Information om Lowisa och Henriks bröllop'}
      />
      <header className='header'>
        <p className='sub-header'>vi ska gifta oss!</p>
        <h1>Lowisa & Henrik</h1>
        <p className='header__date'>05 AUGUSTI 2023</p>
        <p className='header__time'>Klockan 13:00</p>
      </header>
      <nav>
        <Navbar />
      </nav>
      <main className='home'>
        <figure className='home__image'>
        <Image src='/front.webp' alt='' width={726} height={492} />
        </figure>
        <section className='home__info'>
          <p>Vi är jätteglada att nivill fira vår stora dag med oss!</p>
          <p>
            Den 5e Augusti 2023 i Falkenbergs kyrka säger vi JA till varandra.
          </p>
          <p>
            Efter det fortsätter festen i <a href=''>Walencia</a>
          </p>
        </section>
      </main>
    </>
  );
};

export default Home;
