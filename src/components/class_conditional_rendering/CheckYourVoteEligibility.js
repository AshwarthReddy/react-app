import React from 'react';

class CheckYourVoteEligibility extends React.Component {

    constructor() {
        super();
        this.inputText = null;
        this.state = {
            isEligible: false
        }
        this.setInputTextRef = this.setInputTextRef.bind(this);
        this.validateAge = this.validateAge.bind(this);

    }

    setInputTextRef(element) {
        this.inputText = element;
        console.log("****", this.inputText);
    }

    validateAge() {
        if (this.inputText.value > 18) {
            this.setState({
                isEligible: true
            });
        } else {
            this.setState({
                isEligible: false
            });
        }
    }


    render() {
        return (
            <div>
                <input type="number" ref={this.setInputTextRef}/>
                <button onClick={this.validateAge}>Validate Vote For Age</button>
                <h1>{this.state.isEligible ? "Eligible for Vote.. ": "Not Eligible For Vote"}</h1>
            </div>
        );
    }
}

export default CheckYourVoteEligibility;