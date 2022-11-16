import React, {useState} from "react";
import '../App.css';

export function Counter () {
    const [counter, setCounter] = useState(0)
    return (
        <div>
            <button
                className="circle"
                onClick={() => setCounter(counter + 1)}
            >
                {counter}
            </button>
        </div>
    )
}