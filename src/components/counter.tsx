import React, {useState} from "react";
import '../App.css';

import { useLocalStorage } from "usehooks-ts";


export function Counter () {
    const [counter, setCounter] = useLocalStorage('counter-value', 0)
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