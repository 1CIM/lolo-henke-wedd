import { NextPage } from 'next';
import Image from 'next/image';
import HeadTag from '../components/HeadTag';
import Navbar from '../components/Navbar';

const Wishlist: NextPage = () => {
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
          <p>
            För att ha råd att åka på bröllopsresa är vi mycket tacksamma om i
            kan få ett bidrag!
            <br /> <br />
            <span className='wishlist__section--small-text'>
              Eller <br /> En Porsche 911 GT3 RS
            </span>
          </p>
          <p>
            Vi har ett separat konto för dessa gåvor: <br></br>9252 7531288
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
