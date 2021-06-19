import React from 'react';
import "../styles/Header.css";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <header className="header-mine">
                <nav>
                    <ul>
                        <li>
                            <Link className="header-link" to="/">List Members</Link>
                        </li>
                        <li>
                            <Link className="header-link" to="/add-member">Add Member</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header
