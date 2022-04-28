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
                <input type={props.type} className={props.cssCustomInput} onChange={changeValue} placeholder={props.placeholder} />
                <div className="content_input">
                    {props.content}
                </div>
                <div className="focus_border"></div>
                {props.children}
            </div>
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
    cssCustomInput: PropTypes.string,
    placeholder: PropTypes.string,
    box_inputCustom: PropTypes.string,
}

export default InputBox;