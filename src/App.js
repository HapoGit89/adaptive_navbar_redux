import logo from './logo.svg';
import './App.css';
import MyNavBar from './Components/MyNavBar/MyNavBar';
import { Routes, Route } from 'react-router-dom';
import Contact from './Components/Contact/Contact';
import Live from './Components/Live/Live';
import Home from './Components/Home/Home';
import Studio from './Components/Studio/Studio'
import Coops from './Components/Coops/Coops';
import Media from './Components/Media/Media';


function App() {
  return (
    <div className="App">
      <MyNavBar></MyNavBar>
      <Routes>
        <Route exact path="/home" element={<Home></Home>}></Route>
        <Route exact path="/contact" element={<Contact></Contact>}></Route>
        <Route exact path="/live" element={<Live></Live>}></Route>
        <Route exact path="/studio" element={<Studio></Studio>}></Route>
        <Route exact path="/cooperation" element={<Coops></Coops>}></Route>
        <Route exact path="/media" element={<Media></Media>}></Route>
      </Routes>
    </div>
  );
}

export default App;
