import "../Styles/Navbar.css";
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1>Nature's Wrath</h1>
      <div className="links">
        <a href="/Home">Home</a>
        <a href="/Types">Types of Disasters</a>                
        <a href="/Major">Major Disasters</a>
        <a href="/InfoDisc">Information Disclaimer</a>
          
      </div>
    </nav>

  );
}
 
export default Navbar;