import React from 'react';

import './player-panel.styles.css';

const PlayerPanel = (props)=>{

    const {player, computer} = props.currentScore;
    return(
        <div className="player-panel">
            <h3>CURRENT SCORE</h3>

            <div className="box-container">
                <div className="player-box">
                    <div className="dice-box">
                        <div className="player-name">YOU</div>
                        <div className="dice">
                            {
                                props.currentScore.player ? <img src={require(`./img/dice-${player}.jpg`)} alt="dice" className="dice-img"/>

                                : ''
                            }
                            
                        </div>
                    </div>
                    <div className="dice-number">{props.currentScore.player}</div>
                </div>

                <div className="round-btn">
                    {btnType(player, computer)}
                </div>

                <div className="player-box">
                    <div className="dice-box">
                        <div className="player-name">COMPUTER</div>
                        <div className="dice">
                        {
                                props.currentScore.player ? <img src={require(`./img/dice-${computer}.jpg`)} alt="dice" className="dice-img"/>

                                : ''
                            }
                        </div>
                    </div>
                    <div className="dice-number">{props.currentScore.computer}</div>
                </div>
            </div>
        </div>
    )
};

const btnType = (player, computer)=>{
    if(player > computer){
        return <button className="outcome win"> YOU WON</button>
    }
    else if(player < computer){
        return <button className="outcome loose"> YOU LOST</button>
    }
    else
        return <button className="outcome draw"> DRAW</button>
}

export default PlayerPanel;