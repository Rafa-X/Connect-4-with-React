import React, {useEffect, useState} from "react";

import {NO_PLAYER, PLAYER_1, PLAYER_2, NUM_CIRCLES, GAME_STATE_PLAYING, GAME_STATE_WIN, GAME_STATE_DRAW} from "../Constants"
import '../Game.css';
import { isWinner, isDraw } from "../helper";

import Header from "./Header";
import Footer from "./Footer";
import GameCircle from "./GameCircle";

const Gameboard = () => {
    //useState -> React hook to keep track of the circles state
    //Deconstruct -> [state variable , function that update the state variable]
    const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));  //player states of circles - create empty array
    const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);   //current player TURN to click
    const [gameState, setGameState] = useState(GAME_STATE_PLAYING);  //current state of the game
    const [winPlayer, setWinPlayer] = useState(NO_PLAYER);  //player that won the game

    useEffect(() => {
        initGame();
    }, []);  //[] -> square brackets states that will run only once, when the component is created

    //set the initial state of the game variables, used when New Game
    const initGame = () => {
        setGameBoard(Array(16).fill(NO_PLAYER));
        setCurrentPlayer(PLAYER_1);
        setGameState(GAME_STATE_PLAYING);
        setWinPlayer(NO_PLAYER);
    }

    const suggestMove = () => {
        
    }

    const initBoard = () => {  //helper function, returns JSX componentes to output
        const circles = [];  //will contain the circles objects from render
        for(let i=0; i< NUM_CIRCLES; i++){
            circles.push(renderCircle(i));  //saves in the array
        }
        return circles; //JSX circles components
    }

    const renderCircle = id => {  //key -> react need this extra indentifier 
        return <GameCircle key={id} id={id} className={`player_${gameBoard[id]}`} onCircleClicked={circleClicked} />
    }

    const circleClicked = (id) => {  //callback function from the parent to the child component

        if(gameBoard[id] != NO_PLAYER) return;  //if one player click on a marked circle this won't allow a second click
        if(gameState != GAME_STATE_PLAYING) return;  //if the game isn't in progress won't allow a click

        //state of circles are updated asynchronously, isolate this function to avoid asynchronous update errors
        //update the state of the gameBoard when a player clicks
        if(isWinner(gameBoard, id, currentPlayer)){
            setGameState(GAME_STATE_WIN);
            setWinPlayer(currentPlayer);  //set the winner before the game header display it
        }
        if(isDraw(gameBoard, id, currentPlayer)){
            setGameState(GAME_STATE_DRAW);
            setWinPlayer(NO_PLAYER);  //sets no one player won
        }

        //prev -> deep array, contains separate arrays in the index positions
        //circle -> circle clicked, pos -> position in the index of the array
        setGameBoard(prev => {
            return prev.map((circle, pos) => {
                if(pos === id) return currentPlayer; //if the index in array matches the id, returns
                return circle; //if no, return the actual elements of the array
            })
        }) 
        
        setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2:PLAYER_1);  //ternary toggle for player turns
    }

    return (
        <>  {/*Standard React fragment to contain several root components*/}
            <Header gameState={gameState} currentPlayer={currentPlayer} winPlayer={winPlayer}/>
            <div className="gameBoard">
                {initBoard()}
            </div>
            <Footer onNewGame={initGame} onSuggest={suggestMove}/>  {/*passed as a parameter because is a callback function*/}
        </>
    )
}

export default Gameboard;