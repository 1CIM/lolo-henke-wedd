import Image from 'next/image';
import HeadTag from '../components/HeadTag';
import Navbar from '../components/Navbar';

const hitta = () => {
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
            <Image src='/falkenberg-kyrka.webp' alt='' width={593} height={338} />
            <figcaption>Nygatan 41, 311 31 Falkenberg</figcaption>
          </figure>
        </article>
        <article className='map'>
          <h3>Walencia</h3>
          <figure className='map__image'>
            <Image src='/walencia.webp' alt='' width={593} height={338} />
            <figcaption> Valenciavägen 20, 311 75 Falkenberg</figcaption>
          </figure>
        </article>
      </main>
    </>
  )
}

export default hitta