import logo from './logo.svg';
import './App.css';
import Home from './Home';
import MyNavBar from './MyNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <>
      <MyNavBar />
      <section id='home'>
        <Home />
      </section>
      <section id='about'>
        <About />
      </section>

      <section id='contact'>
        <Contact />
      </section>
    </>
  );
}

export default App;
