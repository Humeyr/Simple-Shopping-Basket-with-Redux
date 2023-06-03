import { connect } from 'react-redux';
import Products from './components/Products';
import  './styles.css'
import Cart from './components/Cart';
import { ContextProvider } from './components/Provider';
import { BrowserRouter, Route,Routes } from 'react-router-dom';


const App = (props) => {
  
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Products/>} />
              <Route path="/cart" element={<Cart/>} /> 
          </Routes>
        </BrowserRouter>
      
      </ContextProvider>
      
       
  
     
      
    </div>
  );
}

const mapStateToProps = state => {
  return{
    bookList:state.bookList
  };
};
export default connect(mapStateToProps)(App);
