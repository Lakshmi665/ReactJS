import { useEffect, useState } from "react";

export function Logging(props : any) {
    const [message, setMessage] = useState('');
    const [source, setSource] = useState('');
    useEffect(() => {
        console.log("***********");
        console.log(`Value of message changed to: ${message}`);
        console.log(`Value of Source changed to: ${source}`);
        console.log(`Value of prop changed to: ${props.object}`);
        console.log("*************");
    }, [message,source,props.object])

    function changeMessage(e : any) {
        setMessage(e.target.value);
    }

    function changeSource(e : any) {
        setSource(e.target.value);
    }

    return (
        <>
        <input type="text" onChange={(e) => changeMessage(e)}/><br/><br/>
        <input type="text" onChange={(e) => changeSource(e)}/>
        </>
    )
}