
import Navtag from './components/Navbar/Navtag';
import Blogo from './components/Myself/Blogo';
import Acheive from './components/achievements/acheive';
import Inspired from './components/inspire/Inspired';
import Contact from './components/contact/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
     <Navtag/>
     <Blogo/>
     <Acheive />
     <Inspired/>
     <Contact/>
     
    </div>
  );
}

export default App;
