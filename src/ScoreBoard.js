import React, {useState} from 'react'
import TeamScore from './TeamScore'
import './style.css'

function ScoreBoard({name}){
    const[teamName, setTeamName] = useState(name);

    const changeTeamName = () => {
        const newTeamName = prompt('Enter new team name:')
        if (newTeamName){
            setTeamName(newTeamName)
        }
    }



    return(
        <div className="scoreboard">
            <h1> {teamName}</h1>
            <button className="change-button" onClick={changeTeamName}>Change name</button>
            <TeamScore name={teamName}/>
        </div>
    )
}
export default ScoreBoard;