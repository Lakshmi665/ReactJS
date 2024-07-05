import { useState } from 'react'
import './Notebook.css'
export function NoteBook(props : any) {
    return (<>
    <h1>{props.bookName}</h1>
    <hr/>
    {props.bookName} has total of {props.totalPages} pages.
    <Page content="This is content from page 5"/>
    <Page content="This is content from page 5"/>
    </>)
}
export function Page(props : any) {
    useState()
    function addStyles(value : boolean) : React.CSSProperties {
        if(value) {
            return {color: 'red'}
        } else {
            return { color: 'green'}
        }
    }
    let pageStyle={
        color:'blue',
        // borderStyle: 'groove',
        // backgroundColor: 'beige',
        // padding: '10px'
    }
    return (<><p className="page-bg" style={addStyles(false)}>{props.content} </p></>)
}