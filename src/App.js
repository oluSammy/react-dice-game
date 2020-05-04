import React from 'react';
import './App.css';

import ScoreBoard from './components/score-board/score-board.components';
import PlayerPanel from './components/player-panel/player-panel.components';
import BtnRoll from './components/btn-roll/btn-roll.component';
import BtnRestart from './components/btn-restart/btn-restart.component'; 

class App extends React.Component{

  state= {
    currentScore:{
      player: 0,
      computer: 0
    },
   player:{
     won: 0,
     lost: 0,
   },
   computer:{
    won: 0,
    lost: 0
   },
   drawn: 0,
   round: 0
  }

  handleRoll = () => {
    let currentScore = {
      player: Math.floor(Math.random() * 6) + 1,
      computer: Math.floor(Math.random() * 6) + 1
    }
    
    this.setState({currentScore});
    this.updateScoreBoard(currentScore.player, currentScore.computer);
    
  }

  handleRestart = ()=>{
    this.setState({
      currentScore:{
        player: 0,
        computer: 0
      },
     player:{
       won: 0,
       lost: 0,
     },
     computer:{
      won: 0,
      lost: 0
     },
     drawn: 0,
     round: 0
    })
  }

  updateScoreBoard = (player, computer)=>{

    //increment round
    this.setState({round: this.state.round + 1});

    //check round winner, looser or draw and update state accordingly
    if(player > computer){
      this.setState(
        {player: {won: this.state.player.won + 1, lost: this.state.player.lost}, 
        computer: {won: this.state.computer.won ,lost: this.state.computer.lost + 1}})
    } 
    else if(computer > player){
      this.setState(
        {player: {won: this.state.player.won , lost: this.state.player.lost + 1}, 
        computer: {won: this.state.computer.won + 1, lost: this.state.computer.lost}});
    }
    else{
      this.setState({drawn: this.state.drawn + 1});
    }


  }

  render(){
    return (
      <div className="App">
        <div className="container">
            <ScoreBoard scores={this.state}/>
            <PlayerPanel currentScore={this.state.currentScore}/>
            <BtnRoll handleRoll= {this.handleRoll}/>
            <BtnRestart restart={this.handleRestart}/>
        </div>
      </div>
    );
  }
  
}

export default App;
