import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import RegisterForm from './components/register/RegisterForm';
import Categories from './components/category/Categories';
import MainComp from './components/register/MainComp';
import UserDetails from './components/userInterface/UserDetails';
import UserDetailsTwo from './components/userInterface/UserDetailsTwo';
import Entertainment from './components/userInterface/Entertainment';

function App() {
  return (
    <>
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainComp/>}/>
        <Route path="/category" element={<Categories/>}/>
        <Route path="/user-details" element={<UserDetails/>}/>
        <Route path="/user-details-count-down" element={<UserDetailsTwo/>}/>
        <Route path="/entertainment" element={<Entertainment/>}/>
      </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
