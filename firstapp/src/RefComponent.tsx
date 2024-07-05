import { useEffect, useRef, useState } from "react";
import { Page } from "./NoteBookComponent/NoteBook.component";

export function RefComponent(props : any) {
    let text1Ref: any = useRef();
    let text2Ref: any = useRef();
    let pageRef: any = useRef();

    function handleClick() {
        text1Ref.current.focus();
        text1Ref.current.style.backgroundColor = 'gray';

        text2Ref.current.value="jpmc@mail.com";
        console.log(pageRef.current)
    }

    return( 
        <>
        <input type="text" value="lakshmi" ref={text1Ref}/><br/>
        <input type="email" value="abc@gamil.com" ref={text2Ref}/><br/>
        <Page content="this is a page component" ref={pageRef}/>
        <button onClick={() => handleClick()}>Focus</button>
        </>
    )

}




export function RefL2Antipattern() {
    let previousRef: any = useRef();
    let [currentValue, setCurrentValue] = useState('');

    useEffect(() => {
        previousRef.current.value = currentValue;
    },[currentValue])

    return (
        <>
        <input type="text" value={currentValue} 
        onChange={(e) => setCurrentValue(e.target.value)} ref={previousRef}/>
        <h2>Current Value : {currentValue}</h2>
        <h2>Previous Value: {previousRef}</h2>
        </>
    )
}