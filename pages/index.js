import Head from 'next/head';
import About from './about';
import Contact from './contact';
import App from './home';
import Skills from './skills';
import Services from './services';
import Portfolio from './portfolio';

export default function Home() {
 
  return (
    <>
    <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <title>Mohanad Portfolio</title>
        <link rel="icon" href="/Mo-logos_black.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>    
    </Head>
    <App/>
    <About/>
    <Skills/> 
    <Services/>
    <Portfolio/>
    <Contact/>
    </>
  )
}
