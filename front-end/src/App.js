import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Signup from './components/Signup';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>

        <Route element={<PrivateComponent/>}>
        <Route path='/' element={<h1>Product Listing Component</h1>}/>
        <Route path='/add' element={<AddProduct />}/>
        <Route path='/update' element={<h1>Update Product Componet</h1>}/>
        <Route path='/logout' element={<h1>Logout Component</h1>}/>
        <Route path='/profile' element={<h1>Profile Component</h1>}/>
        </Route>
        
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>} />
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
