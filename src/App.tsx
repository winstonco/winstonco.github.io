import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

const App = () => {
  return (
    <>
      <Header />
      <div className="App">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default App;
