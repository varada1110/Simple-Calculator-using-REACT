import React, { Component } from 'react';
import "./App.css";
import KeyPad from "./components/KeyPad";
import Output from "./components/Output";


class App extends Component{
    state={
        result:''
    };


    buttonPressed = (buttonName) => {
        if(buttonName === "="){
            this.calculate();
        }else if(buttonName === "Clear") {
            this.reset();
        }else
        this.setState({
            result: this.state.result + buttonName
        });
    };

    reset = () =>{
        this.setState({
            result:''
        })
    }

    calculate = () =>{
        this.setState({
            result:eval(this.state.result)
        });
    };

    render(){
        return(
            <div className="App">
                <Output result={this.state.result}/>
                <KeyPad buttonPressed={this.buttonPressed}/>
            </div>
        );
    }
}
export default App;
