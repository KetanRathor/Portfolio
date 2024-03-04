import './App.css';
import AboutMe from './Protfolio/AboutMe';
import Contact from './Protfolio/Contact';
import Home from './Protfolio/Home';
import Skills from './Protfolio/Skills';

import { BrowserRouter  } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
import Resume from './Protfolio/Resume';



function App() {
  return (
    <>
  <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/aboutMe' element={<AboutMe/>}/>
    <Route path='/skills' element={<Skills/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/resume' element={<Resume/>}/>


   
   
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
