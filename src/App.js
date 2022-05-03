import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//
import Home from './pages/Home';
import Login from './pages/Login';

//
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Login />} path="/user/login" />
            </Routes>
        <Footer />
</Router>
    );
}

export default App;
