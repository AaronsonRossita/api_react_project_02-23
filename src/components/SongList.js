import React from "react";
import "./SongList.css"
import { Song } from "./Song";

export function SongList(props){

    return(
        <ul className="song-list">
            {props.songs.map( (song) => {
                return(
                    <Song title={song.name}/>
                )
            })}
        </ul>
    )
}