import React from 'react';

import './btn-restart.styles.css';

const BtnRestart = (props)=>{
    return(
        <button className="btn-restart" onClick={props.restart}>RESTART</button>
    )
};

export default BtnRestart;