import {Link} from "react-router-dom"
const Header = () => {
  return (
    
    <header className="header">
 <nav className="navbar">
  <Link to="/login">Login</Link>
  <Link to="/welcome">Welcome</Link>
  <Link to="/hero">Hero</Link>
 </nav>
    </header>
  )
}

export default Header
