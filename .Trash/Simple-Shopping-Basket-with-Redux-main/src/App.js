import { connect } from 'react-redux';
import Products from './components/Products';
import  './styles.css'
import Cart from './components/Cart';
import { BrowserRouter, Route,Routes } from 'react-router-dom';


const App = (props) => {
  
  return (
    <div className="App">
    
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Products/>} />
              <Route path="/cart" element={<Cart/>} /> 
          </Routes>
        </BrowserRouter>
      
      
       
  
     
      
    </div>
  );
}

const mapStateToProps = state => {
  return{
    bookList:state.bookList
  };
};
export default connect(mapStateToProps)(App);
