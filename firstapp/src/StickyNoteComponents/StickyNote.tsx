import { useState } from "react"

export function StickyNote(props: any) {
    let [clickCount, setClickCount] = useState(0);
    let [text, setText] = useState('');
    return (<>
    <div style={{height: '200px', width: '200px', backgroundColor: 'lightyellow', color: 'black', margin: '30px', padding: '10px'}}>
    <h5>{props.title}</h5>
    <input type="text" value={text} onChange={(e) => setText(e.target.value)}/><br/>
    <button onClick={() => setClickCount(++clickCount)}>OK</button>
    <p>Edited {clickCount} times.</p>
    </div>
    </>)
}