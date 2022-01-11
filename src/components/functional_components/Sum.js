

import { useRef, useState } from "react";

function SumExample(){

    const num1 = useRef(null);
    const num2 = useRef(null);
    const [ result, setResult ] = useState(0);


      const  caluclateSum = () => {
          let result = Number(num1.current.value) + Number(num2.current.value);
          console.log("result is: ", result);
          setResult(result);
        }



    return (

        <div>
            <span>First Num: </span>
                <input type = "number" ref = {num1}/>
                <span>Second Num: </span>
                <input type = "number" ref= {num2}/>
                <input type = "button" value = "Caluclate Sum" onClick = {caluclateSum}/>
                <h2>Total Sum of Result is: {result}</h2>
        </div>
        
    );
}

export default SumExample;