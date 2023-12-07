import React from "react";
import '../Game.css';  //specify the route of the style file to import

/* Object de-structuring properties
{id} => just for calling the atribute you want
{children} => a special React property for calling the components from inside a class
Arrow function () => - it gets the properties from the class without running the function userClick()
*/

const GameCircle = ({id, children, className, onCircleClicked}) => {

    /*Pass the parameters from the event to the function*/
    /*className -> Javascript template = 1 base class {gameCircle} and select between 2 clases in a condition*/
    /*When user clicks a circle, makes a callback to 'onCircleClicked' with the id of the circle*/

    return(
        <div className={`gameCircle ${className}`} onClick={() => onCircleClicked(id)}>  
            {children}
        </div>
    )
}

export default GameCircle;