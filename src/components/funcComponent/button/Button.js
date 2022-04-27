import React from "react";
// css 
import "./Button.scss";

// import proptypes 
import PropTypes from "prop-types";


function Button(props) {
    function send(e) {
        props.callback(e)
    }
    return (
        <button
            className={props.cssCustom}
            onClick={send}
            type={props.type}
        >
            {props.nameBtn}
        </button>

    )
}

// default props 

Button.defaultProps = {
    type: 'submit'
}

// propTypes 
Button.propTypes = {
    callback: PropTypes.func,
    type: PropTypes.string.isRequired,
    nameBtn: PropTypes.string.isRequired,
    cssCustom: PropTypes.string
}
export default Button;