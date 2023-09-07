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
      <MyNavBar/>
      <Home/>
      <About/>
      <Contact/>
    </>
  );
}

export default App;
