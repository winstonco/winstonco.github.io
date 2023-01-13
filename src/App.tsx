import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Intro from './Intro';
import PullIntro from './PullIntro';

const App = () => {
  const [introIsDown, setIntroIsDown] = useState(true);

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
