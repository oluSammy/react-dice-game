import React from 'react';
import './score-board.styles.css';

const ScoreBoard = (props) =>{
    // console.log(props);

    const {player, computer, drawn, round} = props.scores;
    // console.log(player, computer, drawn, round);
    return(     
        <div className="score-container">
            <h1>SCORE BOARD</h1>
            <div className="score-header  row">
                <div className="team column">Team</div>
                <div className="header-won column">WON</div>
                <div className="header-lost column">LOST</div>
                <div className="header-drawn column">DRAWN</div>
            </div>
            <div className="player-container row">
                <div className="player-name column">YOU</div>
                <div className="player-won column">{player.won}</div>
                <div className="player-lost column">{player.lost}</div>
                <div className="player-drawn column">{drawn}</div>
            </div>
            <div className="computer-container row">
                <div className="computer-name column">COMPUTER</div>
                <div className="computer-won column">{computer.won}</div>
                <div className="computer-lost column">{computer.lost}</div>
                <div className="computer-drawn column">{drawn}</div>
            </div>

            <div className="round-container row">
                <div className="games column round-column">ROUNDS</div>
                <div className="computer-won total-round">{round}</div>                
            </div>
        </div>   
    )
};

export default ScoreBoard