import Image from 'next/image';
import HeadTag from '../components/HeadTag';
import Navbar from '../components/Navbar';

const Wishlist = () => {
  return (
    <>
      <HeadTag
        title={'Önskelista'}
        content={'Information om Lowisa och Henriks bröllop'}
      />
      <header className='header'>
        <h1>Önskelista</h1>
      </header>
      <nav>
        <Navbar />
      </nav>
      <main className='wishlist'>
        <section className='wishlist__section'>
          <p>Vi är tacksamma att ni vill vara med på vår dag.</p>
          <p className='no-height'>
            I brist på fantasi så önskar vi oss bidrag till våran bröllopsresa.{' '}
            <br /> <br />
            <span className='wishlist__section--small-text'>
              Eller <br /> En Porsche 911 GT3 RS
            </span>
          </p>
          <figure>
            <Image src='/blurred.webp' alt='' width={828} height={683} />
          </figure>
        </section>
      </main>
    </>
  );
};

export default Wishlist;
