import { Link, NavLink } from "react-router-dom"
import spiderMan from "../assets/spider-man-into-the-spider-verse.img.jpg"

function Header(){
    return (
        <header>
            <Link to="/">
                <img src={spiderMan} alt="photo" />
            </Link>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/meteo">Météo</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header