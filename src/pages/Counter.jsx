import { useState } from 'react'

function Counter(){
    console.log("Enter Counter")
    const [count, setCount] = useState(0);

    function increment() {
        setCount(prev=>prev+1);
    }

    function decrement() {
        if(count>0){
            setCount(prev=>prev-1);
        }
    }

    return(
        <>
            <div>
                <h2>Counter Program</h2>
                <p>{count}</p>
                <div>
                    <button type="button" onClick={()=>increment()}>+</button>
                    <button type="button" onClick={()=>decrement()}>-</button>
                    <button type="button" onClick={()=>setCount(0)}>Reset</button>
                </div>
            </div>
        </>
    )
}
export default Counter;