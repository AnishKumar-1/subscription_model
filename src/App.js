import './App.css';
import {Route,Routes} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Plans from './Plans';
import NavBar from './NabBar';
function App() {

  return (
    <div className="App">
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/plans' element={<Plans/>}/>
      </Routes>
    </div>
  );
}

export default App;
