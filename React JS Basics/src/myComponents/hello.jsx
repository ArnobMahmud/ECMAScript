import React, { Component } from "react";

function Hello(props) {
        function functionalButton(a){
            alert(a);
        }
    return (
        <div>
            <button onClick={functionalButton.bind(functionalButton,"Hello World")} >Click Me</button> 
            <h1> I'm {props.name} </h1>
        </div>
    );
}

export default Hello;