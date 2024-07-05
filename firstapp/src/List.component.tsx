import { useRef, useState } from "react"
import { Page } from "./NoteBookComponent/NoteBook.component"

export function List() {
    let arr:any[] = [{key : 100, value: "First Item", style: {backgroundColor: 'gray'}},
        {key : 101, value: "Second Item", style: {backgroundColor: 'blue'}},
        {key : 102, value: "Third Item", style: {backgroundColor: 'yellow'}},
        {key : 103, value: "Fourth Item", style: {backgroundColor: 'green'}}
    ]

    function addNew() {
        arr.push({key: Math.random(), value: "A new Item", style : {backgroundColor: 'red'}})
        console.log(arr)
    }
    return (
        <>
        <button onClick={() => addNew()}>Add New Item</button>
        <ul>
            {arr.map((item) => {
                return (<li key={item.key} style={item.style}>{item.value}</li>)
            })}
        </ul>
        </>
    )
}

export function UseSpreadOpr() {
    let [contentArr,setContentArr] = useState<string[]>([]);
    let textRef : any= useRef();

    function addItem() : void {
        let newContent = textRef.current.value;
        setContentArr([...contentArr, newContent]);

    }

    return (
        <>
        <input type="text" placeholder="Enter the content" ref={textRef}/>
        <button onClick={() => addItem()}>Add Item</button>
        {
            contentArr.map((item) => {
                return(<Page key={item} content={item}/>)
            })
        }
        </>
    )
}