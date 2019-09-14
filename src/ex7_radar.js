import React from "react";

class SpeedChecker extends React.Component {
    constructor (props){
        super(props);
        this.state ={
            summaryControl: "",
            speedValue: 0,
            limitValue: 50
        };
    }

    handleInputChange = (event) => {
        /*const name = event.target.name;
        const val = parseInt(event.target.value);*/
        const {name, value} = event.target;
        console.log("state avant ajout => " + this.state.speedValue);
        this.setState(state => ({ [name]: value })  );
        console.log(value +" mis dans le state ... " + this.state.speedValue);
        if(this.state.speedValue <= this.state.limitValue){
            this.setState(state => ({ summaryControl: "Tout est bon." }) );
        }
        else{
            let speedRet = this.state.speedValue - Math.trunc(0.08 * this.state.limitValue);
            let pointPer = (speedRet < this.state.limitValue ) ? 0
                : (speedRet - this.state.limitValue < 20) ? 1
                : (speedRet - this.state.limitValue < 30) ? 2
                : (speedRet - this.state.limitValue < 40) ? 3
                : (speedRet - this.state.limitValue < 50) ? 4
                : 6 ;

            this.setState(state => ({ summaryControl: "Vous etes en exces de vitesse !\n" +
                    "La vitesse mesurée est " + this.state.speedValue + ", et la vitesse retenu est " + speedRet + ".\n" +
                    "Vous allez perdre " + pointPer + "point(s)" }) );
        }
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <SpeedForm
                    speed={this.state.speedValue}
                    limit={this.state.limitValue}
                    handleChange={this.handleInputChange}
                />
                <SpeedSummary control={this.state.summaryControl} />
            </div>
        );
    }
}

class SpeedForm extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <label>Vitesse :</label>
                    <input type="number" name="speedValue" value={this.props.speed} onChange={this.props.handleChange} />
                    <label>Limitation :</label>
                    <input type="number" name="limitValue" value={this.props.limit} onChange={this.props.handleChange} />
                </form>
            </div>
        );
    }
}

class SpeedSummary extends React.Component {
    render() {
        return (
            <div>
                {this.props.control}
            </div>
        );
    }
}

export default SpeedChecker;