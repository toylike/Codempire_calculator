import React, { Component } from 'react'
import Scoreboard from './Scoreboard.js';

export default class Manipulation extends Component {

    constructor(props){
        super(props)

        this.state = {
            result: ' ',
            memory: ' '
          }

        this.buttPassed = this.buttPassed.bind(this)
        this.zeroPassed = this.zeroPassed.bind(this)
        this.dotPassed = this.dotPassed.bind(this)
        this.arOperatorPassed = this.arOperatorPassed.bind(this)
        this.memoryPassed = this.memoryPassed.bind(this)
    }

    dotPassed(e){
        if(this.state.result.indexOf('.') === -1){
            this.setState({
                result: this.state.result + e.target.name
            });
        }
    };

    arOperatorPassed(e){
        if(e.target.name === '-' && isNaN(this.state.result.toString().slice(-1)) !== true){
            this.setState({
                result: this.state.result + e.target.name
            });

        }else if(isNaN(this.state.result.toString().slice(-1)) !== true && this.state.result.toString() !== ' '){
            this.setState({
                result: this.state.result + e.target.name
            });
        }
    };

    zeroPassed(e){
        if(this.state.result !== ' '){
            this.setState({
                result: this.state.result + e.target.name
            });
        }
    };

    buttPassed(e) {
        if(e.target.name === '=' && isNaN(this.state.result.toString().slice(-1)) !== true){
            this.calculate()
        }else if(e.target.name === 'AC'){
            this.setState({
                result: ' '
            });
        }else if(e.target.name === 'CE'){
            this.setState({
                result: this.state.result.toString().slice(0, -1)
            });
        }else if(e.target.name !== '='){
            this.setState({
                result: this.state.result + e.target.name
            });
        }
    };

    memoryPassed(e){
        if(e.target.name === 'mr' && this.state.result.toString() !== ' ' && isNaN(this.state.result.toString()) !== true){
            this.setState({
                memory: this.state.result
            });
        }else if(e.target.name === 'mc'){
            this.setState({
                memory: ' '
            });
        }else if(e.target.name === 'm-' && this.state.memory.toString() !== ' ' && isNaN(this.state.result.toString()) !== true){
            this.setState({
                memory: this.state.memory - this.state.result
            });
        }else if(e.target.name === 'm+' && this.state.memory.toString() !== ' ' && isNaN(this.state.result.toString()) !== true){
            this.setState({
                memory: +this.state.memory + +this.state.result
            });
        }

    };

    calculate(){
        this.setState({
            result: eval(this.state.result)
        });
    };

    render() {
        return (
            <div className='calculator'>
                <Scoreboard result={this.state.result}  memory={this.state.memory}/>
                <div className='calculator_button'>
                <button name="AC" onClick={this.buttPassed}>AC</button>
                <button name="CE" onClick={this.buttPassed}>CE</button>
                <button name="%" onClick={this.arOperatorPassed}>%</button>
                <button name="/" onClick={this.arOperatorPassed}>/</button>
                <button name="mc" onClick={this.memoryPassed}>mc</button>
                <button name="mr" onClick={this.memoryPassed}>mr</button>
                <button name="m-" onClick={this.memoryPassed}>m-</button>
                <button name="m+" onClick={this.memoryPassed}>m+</button>
                <button name="1" onClick={this.buttPassed}>1</button>
                <button name="2" onClick={this.buttPassed}>2</button>
                <button name="3" onClick={this.buttPassed}>3</button>
                <button name="*" onClick={this.arOperatorPassed}>*</button>
                <button name="4" onClick={this.buttPassed}>4</button>
                <button name="5" onClick={this.buttPassed}>5</button>
                <button name="6" onClick={this.buttPassed}>6</button>
                <button name="-" onClick={this.arOperatorPassed}>-</button>
                <button name="7" onClick={this.buttPassed}>7</button>
                <button name="8" onClick={this.buttPassed}>8</button>
                <button name="9" onClick={this.buttPassed}>9</button>
                <button name="+" onClick={this.arOperatorPassed}>+</button>
                <button className="calculator_button-zero" name="0" onClick={this.zeroPassed}>0</button>
                <button name="." onClick={this.dotPassed}>.</button>
                <button name="=" onClick={this.buttPassed}>=</button>
                </div>
            </div>
        )
    }
}
