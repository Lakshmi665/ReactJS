import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import {C1,C2} from './App'
import reportWebVitals from './reportWebVitals';
import {NoteBook, Page} from './NoteBookComponent/NoteBook.component'
import { Reactions } from './LikesComponent/Reactions';
import { StickyNote } from './StickyNoteComponents/StickyNote';
import { Logging } from './LoggerComponent/Logging';
import { UseDynamicToggle, UseToggleHookComponent } from './UseToggleHookComponent';
import { RefComponent, RefL2Antipattern } from './RefComponent';
import { List, UseSpreadOpr } from './List.component';
import { FormValidator } from './FormValidator.component';
import { Main } from './Main';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <C1 />
    <C2 />
    <NoteBook bookName='React Book of tactics' totalPages='300'/> */}
    {/* <Reactions /> */}
    {/* <div style={{display: 'flex'}}>
    <StickyNote title='Sticky Note 1'/>
    <StickyNote title='Sticky Note 2'/>
    </div> */}
    {/* <StickyNote title='Sticky Note 3'/> */}
    {/* <Logging object={<Reactions/>}/> */}
    {/* <UseToggleHookComponent /> */}
    {/* <UseDynamicToggle ifCase={<Reactions />} elseCase={<Page content="This is a page to load dynamically....." />} /> */}
     {/* <RefComponent /> */}
     {/* <RefL2Antipattern /> */}
     {/* <List /> */}
     {/* <UseSpreadOpr /> */}
     {/* <FormValidator /> */}
     <Main />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
