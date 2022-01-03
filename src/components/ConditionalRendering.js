import React from "react";
class ConditionalRendering extends React.Component{

    constructor() {
        super();
        this.state = {
           isEnabled : false
        };
    }

    checkDataIsRendered = () => {
        this.setState({
            isEnabled : true
        });
    }

    render(){
        return(
            <button onClick={this.checkDataIsRendered}>Enable Data</button>


        );
    }



}
export default ConditionalRendering;