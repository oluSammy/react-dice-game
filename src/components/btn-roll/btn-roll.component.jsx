import React from 'react';

import './btn-roll.styles.css';

const BtnRoll = (props)=>{
    return(
        <button className="btn-roll btn" onClick={props.handleRoll}>ROLL</button>
    )
};

export default BtnRoll;