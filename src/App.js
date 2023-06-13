import './App.scss';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./Page/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                {/*<Route path={"/"} element={<Home/>}/>*/}
                {/*<Route path={"/"} element={<Home/>}/>*/}
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
