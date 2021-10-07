import React, {useState} from 'react';


const StateTutorial = () => {
    const [counter, setCounter] = useState(1);
    const increment = () =>{
        setCounter(counter + 1);

    };
    return (
    <div>

        <h3> USE STATE </h3>
        {counter}
        <br />
        <button onClick={increment}>Increment</button>

    </div>
    ); 
}

export default StateTutorial;