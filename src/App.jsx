import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Doctors from './pages/Doctors';
import Contact from './pages/contact';
import News from './pages/News';

const App=()=>{
  return(
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/servide' element={<Service/>}/>
          <Route path='/doctors' element={<Doctors/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;