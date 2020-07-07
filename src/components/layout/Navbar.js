import React from 'react';
import PropTypes from 'prop-types';

const Navbar = (props) => {
    return (
        <div className="navbar bg-primary">
            <h3>
                {props.title}
            </h3>
        </div>
    )
}

Navbar.defaultProps = {
    title: "Github Finder",
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Navbar;