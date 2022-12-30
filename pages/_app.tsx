import '../styles/style.css';
import type { AppProps } from 'next/app';
import Image from 'next/image';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='wrapper'>
      <Image src='/top.webp' alt="floral gold background wedding invitation PNG Designed By Aliyahnurs" width={347} height={347} className="deco-leaf--top" priority />
      <Component {...pageProps}/>
      <Image src='/bottom.webp' alt="floral gold background wedding invitation PNG Designed By Aliyahnurs" width={347} height={347} className="deco-leaf--bottom"/>
    </div>
  );
}
