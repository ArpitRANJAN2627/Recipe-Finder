import logo from './logo.svg';
import './App.css';
import MainPage from './component/MainPage';
import {Route,Routes} from 'react-router-dom'
import Mealinfo from './component/Mealinfo';

function App() {
  return (
   
  //  <MainPage/>

   <Routes>
    <Route path="/" element={<MainPage/>}/>
    <Route path="/:mealid" element={<Mealinfo/>}/>

   </Routes>
   
   
  );
}

export default App;
