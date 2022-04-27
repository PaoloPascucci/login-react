import React from "react";

//STYLE
import "./InputBox.scss";
// import proptypes 
import PropTypes from "prop-types";

function InputBox(props) {
    const changeValue = (e) => {
        props.callback(e.target.value)
    }
    return (
        <div className={props.box_inputCustom}>
            <label className={props.cssCustomLabel}>{props.labelName}</label>
            <div className="input_mod_content">
                <div className="content_input">
                {props.content}
                </div>
                <input type={props.type} className={props.cssCustonInput} onChange={changeValue} placeholder={props.placeholder} />

            </div>
            {/* <span className={props.focusSpan}></span> */}
        </div>
    )
}

// default props 

InputBox.defaultProps = {

}

// propTypes 
InputBox.propTypes = {
    callback: PropTypes.func,
    type: PropTypes.string.isRequired,
    cssCustomLabel: PropTypes.string,
    labelName: PropTypes.string,
    cssCustonInput: PropTypes.string,
    placeholder: PropTypes.string,
    box_inputCustom: PropTypes.string,
}

export default InputBox;