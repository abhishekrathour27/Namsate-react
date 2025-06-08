import { createContext, useContext, useState } from "react";



const counterContext = createContext(null)

export const useCount = () => {
    const count = useContext(counterContext);
    return count

}

export const CounterProvider = ({ children }) => {
    const [counter, setCounter] = useState(0);


    const increaseCOunt = () => {
        setCounter(counter + 1)
    }
    const decrementCount = () => {
        setCounter(counter -1)
    }
    return (
        <counterContext.Provider value={{counter, increaseCOunt, decrementCount }} >
            {children}
        </counterContext.Provider>
    )
}