import './App.css';
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/login"
                        element={
                            <>
                                <Login/>
                            </>
                        }
                    />
                    <Route
                        path="/checkout"
                        element={
                            <>
                                <Header/>
                                <Checkout/>
                            </>
                        }
                    />
                    <Route
                        path="/"
                        element={
                            <>
                                <Header/>
                                <Hero/>
                            </>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

// function App() {
//     return (
//         <div className="App">
//             <Router>
//                 <Routes>
//
//                     <Route path="/checkout">
//                         <Header/>
//                         <Checkout/>
//                     </Route>
//
//                     <Route path="/">
//                         <Header/>
//                         <Hero/>
//                     </Route>
//
//                 </Routes>
//             </Router>
//
//         </div>
//     );
// }

export default App;
