import { Link, NavLink } from "react-router-dom";

import "./style.scss";


const Header = () => {


    return ( 
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__info">
                        <Link to="/" className="header__logo"><span>Marvel</span> information portal</Link>
                    </div>
                    <div className="header__path">
                        <NavLink to="/" end

                        className="header__path--link"
                        >
                            Characters
                        </NavLink>

                        <p>/</p>

                        <NavLink to="/comics" end


                        className="header__path--link"
                        >
                            Comics
                        </NavLink>
                    </div>
                </div>
            </div>
        </header>

     );
}
 
export default Header;