import {Link} from "react-router-dom";
import "./NavLinks.css"





function NavLinks( {to, text}){




    return (
        <div className="nav-class">
            <ul>
                <li className="nav-list">
                    <Link to={to} >
                        <div>{text}</div>
                    </Link>
                </li>
            </ul>
        </div>
    )

}

export default NavLinks