import HeadTag from '../components/HeadTag';
import Navbar from '../components/Navbar';

const Logi = () => {
  return (
    <>
      <HeadTag
        title={'Logi'}
        content={'Information om Lowisa och Henriks bröllop'}
      />
      <header className='header'>
        <h1>Logi</h1>
      </header>
      <nav>
        <Navbar />
      </nav>
      <main className='logi'>
        <section className='logi__section'>
          <p>Vi har fått 10% rabatt på grand hotel under helgen v. 31.</p>
          <p>
            Grand hotel har två olika anläggningar som ligger ca 150 meter ifrån
            varandra.
            <br />
            Rabatten kan användas på båda anläggningarna
          </p>
          <p>
            Boka direkt på deras hemsida:
            <br />
            <a href='https://grandhotelfalkenberg.se' target='_blank' rel='noreferrer'>
              www.grandhotelfalkenberg.se
            </a>
            <br />
            <a href='https://hwitan.se' target='_blank' rel='noreferrer'>www.hwitan.se</a>
          </p>
          <p>
            Eller ring/maila dem på:
            <br />
            <a href='tel:+4634614450'>0346 - 144 50</a>
            <br />
            <a href='mailto:info@grandhotelfalkenberg.se'>
              info@grandhotelfalkenberg.se
            </a>
          </p>
          <p>
            Ett tips är att boka i god tid eftersom det är högsäsong i
            Falkenberg under den perioden
          </p>
        </section>
        <section className='logi__discount-code'>
          <p className='logi__discount-code--text'>För att få 10% rabatt använd koden</p>
          <p className='logi__discount-code--code'>lowisaochhenrik</p>
          <p className='logi__discount-code--text'>När ni bokar</p>
        </section>
      </main>
    </>
  );
};

export default Logi;
