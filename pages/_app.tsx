import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Image from 'next/image';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='container'>
      <Image src='/top.webp' alt="" width={347} height={347} className="deco-leaf top-leaf"/>
      <Component {...pageProps}/>
      <Image src='/bottom.webp' alt="" width={347} height={347} className="deco-leaf bottom-leaf"/>
    </div>
  );
}
