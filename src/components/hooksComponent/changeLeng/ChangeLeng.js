import React,{useState} from "react";

// css 
import './ChangeLeng.scss';

import i18n from "../../../i18n";


const ChangeLeng = () => {
    const [state, setState] = useState({
        len: 'it'
    })
    const changeLanguage = (ln) => {
        const obj = { ...state }
        return () => {
            if (obj.len === 'en') {
                obj.len = 'it'
            } else {
                obj.len = 'en'
            }
            setState(obj)
            i18n.changeLanguage(ln)
            console.log(`lingua cambiata in ${ln}`);
        };
    };
    return (
        <div className="box_language">
            <img className="flag_img" src={state.len === 'en' ? 'https://www.citypng.com/public/uploads/preview/hd-round-uk-united-kingdom-flag-icon-png-141630249476icrrix8inj.png' : 'https://image.shutterstock.com/image-vector/italy-national-circle-button-flag-260nw-761977876.jpg'} onClick={changeLanguage(state.len)} />
        </div>

    )
}

export default ChangeLeng