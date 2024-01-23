import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from './pages/Login/Login';
import Neighbour from './pages/Neighbour/neighbour';
import Home from './pages/Home/Home';
import Dormitory from './pages/Dormitory/Dormitory';
import './App.css'
import ApartsForm from './pages/Neighbour/ApartsForm/ApartsForm';
import RentFlats from './pages/RentFlats/RentFlats';
import MainRentFlats from './pages/MainRentFlats/MainRentFlats';
import Private_domitory from './pages/MainRentFlats/PrivateDomitory/PrivateDomitory';
import FindNeighbour from './pages/Neighbour/FindNeighbour/FindNeighbour';
import BuyFlats from './pages/MainRentFlats/BuyFlats/BuyFlats';
import ArendaHouse from './pages/MainRentFlats/ArendaHouse/ArendaHouse';
import DormitoryForm from './pages/Dormitory/DormitoryForm/DormitoryForm';



export default function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Login/>}/>        
        <Route path="/" element={<Home/>}/>
        <Route path="/dormitory" element={<Dormitory/>}/>
        <Route path="/dormitory/form" element={<DormitoryForm/>} />
        <Route path="/neighbour_start" element={<Neighbour/>}/>
        <Route path="/neighbour" element={<FindNeighbour/>} />
        <Route path="/neighbour/form" element={<ApartsForm/>} />
        <Route path="/rent_flats" element={<MainRentFlats/>} />  
        <Route path="/rent_flats/private_domitory" element={<Private_domitory/>}/>
        <Route path="/rent_flats/rent_house" element={<RentFlats/>} /> 
        <Route path="/rent_flats/buy_flats" element={<BuyFlats/>} />
        <Route path="/rent_flats/to_rent_flats" element={<ArendaHouse/>} />
      </Routes>
    </Router>
  )
}





