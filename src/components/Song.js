import React from "react";
import "./Song.css";

export function Song(props){

    return (
        <li className="song">
            <h2>{props.title}</h2>
        </li>
    );
}