import mypassport from './images/mypassport.jpg';
import './App.css';
import {Twitter,
  ZuriTeam,
  ZuriBooks,
  PythonBooks,
  BackgroundCheckCoders,
  DesignBooks,
  Slack,
} from './Social-bar';
import SocialIcons from './Social-Icons';
import { Footer } from './Footer';

function App() {
  return (
    <div className='container'>
      <div className='header'>
        <div className='image-container'>
        <img src={mypassport} className='image-size'/>
        </div>
        <p className='h1-text'>Fredrick Idemudia</p>
          <Twitter />
          <Slack />
          <ZuriTeam />
          <ZuriBooks />
          <PythonBooks />
          <BackgroundCheckCoders />
          <DesignBooks />
          <SocialIcons />
          <Footer />
      </div>
    </div>
  );
}

export default App;
