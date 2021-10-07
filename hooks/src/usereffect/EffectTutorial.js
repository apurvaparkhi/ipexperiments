import React, { useEffect, useState } from "react";


function EffectTutorial() {
    
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = 'You clicked ${count} times'
    });

    return (
        <div>
            <h3>USE EFFECT</h3>
            
            <h1>{count}</h1>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Click
            </button>
        </div>
    );
}

export default EffectTutorial;
