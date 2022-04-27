import React from "react";
import { useNavigate } from "react-router";
import './LinkCustom.scss'

// import proptypes 
import PropTypes from "prop-types";

const LinkCustom = (props) =>{
    const navigate = useNavigate();
    const goTo = () =>{
        navigate(props.paths)
    }
    return (
        <a className={props.cssCustom} onClick={goTo}>{props.nameLink}</a>
    )
}

// default props 

LinkCustom.defaultProps = {
    cssCustom : ''
}

// propTypes 
LinkCustom.propTypes = {
    
    paths : PropTypes.string.isRequired
}

export default LinkCustom