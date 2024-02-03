import React from "react";
import { useMyContext } from "./ContextProvider";

export const ContextChildTwo = () => {
    const {value,setValue} = useMyContext();
return(
<div>
    <p>Updating the context from childTwo to see the change in values in child 1</p>
    <button onClick={() => setValue(["Jagan",23,"AITS"])}>Update</button>
</div>
)
}

