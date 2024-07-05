import { useState } from "react";
import { StickyNote } from "./StickyNote";


function App() {
  let [noteContent, setNoteContent] = useState('');
  let [stickyNotes, setStickyNotes] = useState<object []>([]);

  //et stickyNotes =[{key: 100, content: 'Sticky Note Title'}];
  function addStickyNote() {
    setStickyNotes([...stickyNotes, {key: Math.random(), content: noteContent}]);
  }
  return (
    <>
    <input type="text" value={noteContent} placeholder='Enter Note Content' onChange={(e) => setNoteContent(e.target.value)}/>
    <button onClick={() => addStickyNote()}>+</button>
    <div style={{display : 'flex'}}>
    {stickyNotes.map((item : any) => {
      return (<StickyNote title={item.content}/>)
    } )}
    </div>
    </>
  );
}

export default App;
