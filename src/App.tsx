import type { Component } from 'solid-js';
import { createSignal, lazy } from 'solid-js';
import { Routes, Route } from '@solidjs/router';
const HomePage = lazy(() => import('./pages/HomePage/index'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage/index'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

import Intro from './components/Intro';
import Header from './components/Header';
import PullIntro from './components/PullIntro';
import Footer from './components/Footer';

const App: Component = () => {
  const [introIsDown, setIntroIsDown] = createSignal(
    sessionStorage.getItem('introIsDown') === null,
  );

  return (
    <>
      <Intro isDown={introIsDown} setIsDown={setIntroIsDown} />
      <div class="App">
        <Header />
        <div class="main">
          <PullIntro isDown={introIsDown} setIsDown={setIntroIsDown} />
          <Routes>
            <Route path="/" component={HomePage} />
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/*" component={NotFoundPage} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
