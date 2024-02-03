import React from "react";
import { useMyContext } from "./ContextProvider";

const ContextChild = () => {
    const {value,setValue} = useMyContext();
    return(
        <div>
            <p>Value from context storage:{value}</p>
            <button onClick={() => setValue(["deekshamma",21,"amc"])}>update context value</button>
        </div>
    )
}

export default ContextChild;