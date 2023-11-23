import logo from './assets/images/logo.svg';
import hamburger from './assets/images/icon-hamburger.svg';
import Hero from './components/Hero';
import illustration from './assets/images/illustration-intro.svg'; 
import Header from './components/Header';
import MainContent from './components/MainContent';
import Anisha from './assets/images/avatar-anisha.png'
import Richard from './assets/images/avatar-richard.png'
import Shanai from './assets/images/avatar-shanai.png'
import Ali from './assets/images/avatar-ali.png'
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import youtube from './assets/images/icon-youtube.svg'
import twitter from './assets/images/icon-twitter.svg'
import pinterest from './assets/images/icon-pinterest.svg'
import instagram from './assets/images/icon-instagram.svg'
import facebook from './assets/images/icon-facebook.svg'



function App() {
  const images = {
    hamburger: hamburger,
    logo: logo,
    illustration:illustration ,
    Anisha:Anisha,
    Richard:Richard,
    Shanai:Shanai,
    Ali:Ali,
    youtube:youtube,
    twitter:twitter,
    pinterest:pinterest,
    instagram:instagram,
    facebook:facebook,
   };

  return (
    <>
<Header images={images}/>
<Hero    heroImage={images}/>
<MainContent/>
<Testimonial avatar={images}/>
<Footer img={images}/>
    </>
  )
}

export default App
