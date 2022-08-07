
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import About from "./About/About";
import Cart from "./Cart/Cart";
import SingleItem from "./SingleItem/SingleItem";
import Products from "./Products/Products";
import Navbar from "./Navbar/Navbar";
import {Routes} from "react-router";
import {Provider} from "react-redux";
import store from "./store";
import {useState} from "react";

const App = (props) => {
    const [loading,setLoading]=useState(false)

return(
    <BrowserRouter>
        <Provider store={store}>
        <div className="App">
            <Navbar />
            <Routes>
                <Route path='/' element={<Products loading={loading} setLoading={setLoading}/>} />
                <Route path='/about' element={<About />} />
                <Route path='/:id' element={<SingleItem loading={loading} setLoading={setLoading} />} />
                <Route path='/cart' element={<Cart/>} />
                <Route
                    path='*'
                    element={
                        <div>
                            <h2>404 Page not found</h2>
                        </div>
                    }
                />
            </Routes>
        </div>
            </Provider>
    </BrowserRouter>

)
}

export default App;
