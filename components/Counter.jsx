import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0)
    const [isDisabled, setIsDisabled] = useState(false)

    const incrementation = () => {
        setCount(count + 1)
        if (count === 9){
        setIsDisabled(true)
        }
    }

    const decrementation = () => {
        setCount(count - 1)
        setIsDisabled (false)
        if (count === -10){
            setCount(0)
            return 
       }
    }

   
    

    return(
        <> 
            <h2>Compter les Moutons</h2>
            <p>Le nombre de moutons : {count}</p>
            <button onClick={incrementation} disabled={isDisabled}>Ajouter un Moutons</button>
            <button onClick={decrementation}>Enlever un Moutons</button>
        </>
    )
}
export default Counter;