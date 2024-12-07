import "./Navbar.css"
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-element">
        <ul>
            <li>Ana Sayfa
                <Link to="/">
                </Link>
            </li>
            <li>Diziler
                <Link to="/series">
                </Link>
            </li>
            <li>Filmler
                <Link to="/movies">
                </Link>
            </li>
            <li>İzlediklerim
                <Link to="/watched">
                </Link>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
