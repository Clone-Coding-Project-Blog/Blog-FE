import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
    return (
      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
        </Routes>
        <Footer />
      </Router>
    );
}

export default App;
