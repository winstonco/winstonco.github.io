import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Intro from './components/Intro';
import PullIntro from './components/PullIntro';

const App: React.FC = () => {
  const [introIsDown, setIntroIsDown] = useState(
    sessionStorage.getItem('introIsDown') === null
  );

  return (
    <>
      <Intro isDown={introIsDown} setIsDown={setIntroIsDown} />
      <div className="App">
        <Header />
        <div className="main">
          <PullIntro isDown={introIsDown} setIsDown={setIntroIsDown} />
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
