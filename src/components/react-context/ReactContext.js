import React from "react";

const context = React.createContext();
class ReactContext extends React.Component {

    constructor() {
        super();
        this.msg = "Hello From Parent Company"
    }
    render() {
        return (
            <div>
                <context.Provider value={this.msg}>
                    <A />
                </context.Provider>
            </div>
        );
    }




}

class A extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <B />
            </div>

        );
    }
}

class B extends React.Component {
    render() {
        return (
            <C />
        );
    }
}

class C extends React.Component {
    render() {
        return (

            <div>
                <h1>
                    <context.Consumer>{(data) => data}</context.Consumer>
                    <D />
                </h1>
            </div>
        );
    }
}

class D extends React.Component {
    render() {
        return (
            <h1>
                {<context.Consumer>{(data) => data}</context.Consumer>}
            </h1>
        );
    }
}

export default ReactContext;