import React, { createContext, useContext, useState, useCallback } from "react";

const CountContext = createContext();

export default function CountProvider({ children }) {
    const [count, setCount] = useState(0);

    const saveOnLocalStorage = useCallback(() =>{
        const save = async () => {
            await localStorage.setItem("count", count);
        };
        save();
    },[count]);

    const deleteOnLocalStorage = useCallback(() =>{
        const save = async () => {
            if (localStorage.getItem("count")) {
                await localStorage.removeItem("count");   
            }
        };
        save();
    },[]);

    return (
        <CountContext.Provider value={{
            count,
            setCount,
            saveOnLocalStorage,
            deleteOnLocalStorage
        }}>
            {children}
        </CountContext.Provider>
    );
}

export function useCount() {
    const context = useContext(CountContext);
    const { count, setCount } = context;
    return { count, setCount }; 
}

export function useStorage() {
    const context = useContext(CountContext);
    const { saveOnLocalStorage, deleteOnLocalStorage }  = context;
    return { saveOnLocalStorage, deleteOnLocalStorage };
}