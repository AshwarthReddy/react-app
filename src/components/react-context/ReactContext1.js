import React from 'react';


const context = React.createContext();
class ReactContext1 extends React.Component{

    render(){

       const msg =  "How are you child component";
        return (
                 <div>
                     <context.Provider value = {msg}>
                <Parent />
                </context.Provider>
                </div>
            
        );
    }
}

export const Parent = () => (<Child />);


export const Child = () =>   {
    return (
        <h1><context.Consumer>{(data) => data }</context.Consumer></h1>
    );
};



export default ReactContext1;