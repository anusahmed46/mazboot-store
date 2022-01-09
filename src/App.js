import './App.css';
import Home from './component/Home';
import Product from './component/Product';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Header from './component/Header';
import About from './component/About';
import Contact from './component/Contact';
import ProductDetail from './component/ProductDetail';
import Footer from './component/Footer';
import Cart from './component/Cart';




function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route  path='/' element={<Home /> }/>
        <Route  path='/product' element={<Product/> }/>
        <Route  path='/products/:id' element={<ProductDetail/> }/>
        <Route  path='/about' element={<About/> }/>
        <Route  path='/contact' element={<Contact/> }/>
        <Route  path='/cart' element={<Cart/> }/>
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;
