import Image from 'next/image';
import HeadTag from '../components/HeadTag';
import Navbar from '../components/Navbar';

const Kontakt = () => {
  return (
    <>
      <HeadTag
        title={'Kontakt'}
        content={'Information om Lowisa och Henriks bröllop'}
      />
      <header className='header'>
        <h1>Kontakt</h1>
      </header>
      <nav>
        <Navbar />
      </nav>
      <main className='contact'>
        <section>
          <p>
            O.S.A till:
            <br />
            <a href='mailto:lowisaochhenrik@gmail.com'>
              lowisaochhenrik@gmail.com
            </a>
            <br />
            samt uppge eventuella allergier.
          </p>
        </section>
        <hr className='horizontal-line' />
        <section>
          <p>
            Om ni vill komma i kontakt med våra toast madames & masters för att
            t.ex planera in ett tal, något spexigt eller något annat, <br /> Så
            kan ni nå dem på numren nedan:
          </p>
          <div className='numbers-container'>
            <p>
              Thea:{' '}
              <a className='numbers-container__number' href='tel:+46738059174'>
                073 - 805 91 74
              </a>
            </p>
            <p>
              Rebecka:{' '}
              <a className='numbers-container__number' href='tel:+46763292758'>
                076 - 329 27 58
              </a>
            </p>
            <p>
              Henric:{' '}
              <a className='numbers-container__number' href='tel:+46704229384'>
                070 - 422 93 84
              </a>
            </p>
            <p>
              Urban:{' '}
              <a className='numbers-container__number' href='tel:+46701455197'>
                070 - 145 51 97
              </a>
            </p>
          </div>
        </section>
        <figure>
          <Image src='/kontakt.webp' alt='' width={419} height={559} />
        </figure>
      </main>
    </>
  );
};

export default Kontakt;
