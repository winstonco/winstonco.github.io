// import { render } from 'solid-js/web';
import type { Component } from 'solid-js';
import { Routes, Route } from '@solidjs/router';

import HomePage from './home';
import ProjectsPage from './projects';
import NotFoundPage from './not-found';

// import Intro from '../components/Intro';
import Header from '../components/Header';
// import PullIntro from '../components/PullIntro';
import Footer from '../components/Footer';

const App: Component = () => {
  // const [introIsDown, setIntroIsDown] = createSignal(
  //   sessionStorage.getItem('introIsDown') === null,
  // );

  // const showIntro = () => {
  //   setIntroIsDown(true);
  //   const body = document.querySelector('body');
  //   body?.style.setProperty('overflow', 'hidden');
  // };

  // const hideIntro = () => {
  //   setIntroIsDown(false);
  //   sessionStorage.setItem('introIsDown', 'false');
  //   const body = document.querySelector('body');
  //   body?.style.removeProperty('overflow');
  // };

  // onMount(() => {
  //   if (!document.getElementById('intro-all')) {
  //     render(
  //       () => (
  //         <>
  //           <div
  //             id="custom-offcanvas-fade"
  //             style={{ opacity: introIsDown() ? 0.5 : 0 }}
  //           ></div>
  //           <Intro isDown={introIsDown} hideIntro={hideIntro} />
  //         </>
  //       ),
  //       document.getElementById('custom-offcanvas')!,
  //     );
  //   }
  // });

  return (
    <>
      {/* <Intro isDown={introIsDown} setIsDown={setIntroIsDown} /> */}
      <div class="App">
        <Header />
        {/* <PullIntro isDown={introIsDown} showIntro={showIntro} /> */}
        <Routes>
          <Route path="/" component={HomePage} />
          <Route path="/projects" component={ProjectsPage} />
          <Route path="/*" component={NotFoundPage} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
