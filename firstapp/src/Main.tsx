import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { FormValidator } from "./FormValidator.component";
import { HttpOperations } from "./HttpOperations";
import { PassParams } from "./PassParams";
import { StickyNote } from "./StickyNoteComponents/StickyNote";

export function Main() {
    console.log(localStorage.getItem('user'))
    return (
        <BrowserRouter>
              <Routes>
                <Route path='/login' element={<FormValidator />} />
                <Route path='/http' 
                element = {(localStorage.getItem('user') == undefined) ? <Navigate to='/login'/> : <HttpOperations/>} />
                <Route path='/params/:name/:place/:animal/:thing' element={<PassParams />} />
                <Route path='/stickynotes' element={(localStorage.getItem('user') == undefined) ? <FormValidator /> : <StickyNote />} />
                
                <Route path="*" element={<>Snap! Something broken contact admin..</>} />
              </Routes>
        </BrowserRouter>
    )
}