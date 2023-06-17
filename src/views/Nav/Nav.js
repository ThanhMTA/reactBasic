import React from "react";
import './Nav.scss';
import {

    Link,
    NavLink
} from "react-router-dom";
class Nav extends React.Component {
    render() {
        return (
            <>
                {/* dung link de chan hanh dong reload lai trang  */}
                <div className="topnav">
                    <NavLink to="/" activeclassName="active" exact={true}>Home</NavLink>
                    <NavLink to="/todo" activeclassName="active">ToDo</NavLink>
                    <NavLink to="/about" activeclassName="active">About</NavLink>
                    <NavLink to="/user" activeclassName="active">User</NavLink>

                </div>

            </>
        )
    }
}
export default Nav;