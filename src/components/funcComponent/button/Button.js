import React from "react";
// css 
import "./UiButton.scss";

// import proptypes 
import PropTypes from "prop-types";


function UiButton(props) {
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

UiButton.defaultProps = {
    type: 'submit'
}

// propTypes 
UiButton.propTypes = {
    callback: PropTypes.func,
    type: PropTypes.string.isRequired,
    nameBtn: PropTypes.string.isRequired,
    cssCustom: PropTypes.string
}
export default UiButton;