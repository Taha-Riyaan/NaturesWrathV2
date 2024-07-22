import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Types from './components/Types'
import Major from './components/Major';
import InfoDisc from './components/InfoDisc';
import Footer from './components/Footer';




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />

        <Route path="/home" exact element={<Home />} />
        <Route path="/types" exact element={<Types />} />
        <Route path="/major" exact element={<Major />} />
        <Route path="/infodisc" exact element={<InfoDisc />} />
      </Routes>
      <Footer />

    </Router>

    
  );
}

export default App;
