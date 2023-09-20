import logo from './logo.svg';
import './App.css';
import Home from './Home';
import MyNavBar from './MyNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About';
import Contact from './Contact';
import MyNavRouter from './MyNavRouter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <MyNavBar />
      <section id='home'>
        <Home />
      </section>
      <section id='about'>
        <About />
      </section>

      <section id='contact'>
        <Contact />
      </section>
     */}
      <BrowserRouter>
        <MyNavRouter />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
