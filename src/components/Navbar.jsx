import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
return(
    <header>
        <div className="wrapper">
            <h1>
                <Link to="/">DevAcademy</Link>
            </h1>
            <nav>
                <ul>
                    <li>
                    </li>
                    <li>
                        <Link to="/academy">Academie</Link>

                    </li>
                    <li>
                        <Link to="/programmes">Programmes</Link>

                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>

                    </li>
                </ul>
            </nav>
        </div>
    </header>
)

}

export default Navbar;