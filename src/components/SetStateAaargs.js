import React from "react";

class SetStateArgs extends React.Component{

    state = {
        count : 0
    }

      caluclateCount = () => {
            this.setState({
              count: this.state.count+1
            }, () => console.log("call back total count is: ", this.state.count))

            console.log("count is: ", this.state.count)
    }






    render(){
        return(
            <div>
            <button onClick= {this.caluclateCount}>Count</button>
           <h2>COunt is : {this.state.count}</h2>
            </div>
        );
    }

}

export default SetStateArgs;