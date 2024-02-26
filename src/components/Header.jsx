import { NavLink } from 'react-router-dom'
import logo from '../images/LOGO.png'
import '../styles/Style.scss'
 
function Header() {
    return (
        <div className='styleHeader'>
            <img src={logo} alt='Logo du site'/>
        <nav className='styleNav, active'>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/About">A Propos</NavLink>
        </nav>
        </div>
    )
}

export default Header