import { useState } from "react";

type ToggleReturnType = [boolean, ()=>void]
export function useToggle(initialValue : boolean = false) : ToggleReturnType{
    let [value, setValue] = useState(initialValue);

    const togglefunction = ():void => {
        setValue(!value);
    }
    return [value, togglefunction];
}