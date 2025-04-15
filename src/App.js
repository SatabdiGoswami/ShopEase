import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import Explore from './Components/Explore';
import ExploreCatagory from './Components/ExploreCatagory';
import Deal from './Components/Deal';
import Mycart from './Components/Mycart';
import Profile from './Components/Profile';
function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Explore' element={<Explore/>} />
          <Route path='/Explore/:catagory' element={<ExploreCatagory/>} />
          <Route path='/deals' element={<Deal/>} />
          <Route path='/mycart' element={<Mycart/>} />
          <Route path='/Profile' element={<Profile/>} />
      </Routes>
    </Router>
  );
}

export default App;
