import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        // setCounter((prev) => {
        //     return prev + 1;
        // });
        setCounter(prev => prev + 1);
    }

    const handleDecrement = () => {
        if (counter !== 0) {
            setCounter(prev => prev - 1);
        }
    }
    return <div>
        <p style={{ fontSize: "40px" }}>Counter: {counter}</p>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrement}>Increment</button>
    </div>
}


export default Counter;