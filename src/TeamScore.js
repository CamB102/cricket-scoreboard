import {Component} from 'react'
import './style.css';

class TeamScore extends Component{
    state = {
        runs: 0,
        wickets: 0,
        showButton: true
    }

    doRunCount = () =>{
        this.setState((prevState) => ({
            runs: prevState.runs +1
        }))
    }

    do4RunsCount = () =>{
        this.setState((prevState) => ({
            runs: prevState.runs +4
        }))
    }

    do6RunsCount = () => {
        this.setState((prevState) => ({
            runs: prevState.runs +6
        }))
    
    }

    doWicketCount = () =>{
        this.setState((prevState) => ({
            wickets: prevState.wickets +1,
        }),
        () => {
            if (this.state.wickets >= 10){
                this.setState({
                    showButton: false,
                })
            }
        }

        )
    }

    render(){
        const {runs, wickets, showButton} = this.state
        let messageWicket =''

        if (wickets >= 10){
            messageWicket = 'All out'

        }

        return(
            <div className="scoreDisplay">
            <p class="score-display">Runs {runs} - {wickets} Wickets</p>
            <p>{messageWicket}</p>

            {showButton && <button onClick={this.doRunCount}>1 Run</button>}

            {showButton && <button onClick={this.do4RunsCount}>4 Runs</button>}

            {showButton && <button onClick={this.do6RunsCount}>6 Runs</button>}

            {showButton && <button onClick={this.doWicketCount}>1 Wicket</button>}
            </div>
        )

    }
}
export default TeamScore