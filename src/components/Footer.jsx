import '../styles/Style.scss'
import logo from '../images/LOGOFOOTER.svg'
 
function Footer() {
    return (
        <div className='styleFooter'>
            <img src={logo} alt='Logo du footer'/>
            <h2>© 2020 Kasa. All rights reserved</h2>
        </div>
    )
}

export default Footer