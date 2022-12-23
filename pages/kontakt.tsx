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
        <h1>Logi</h1>
      </header>
      <nav>
        <Navbar />
      </nav>
    </>
  )
}

export default Kontakt