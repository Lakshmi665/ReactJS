import { useToggle } from "./CustomHooks/ToggleHook";

export function UseToggleHookComponent() {
    const [isToggle, setToggle] = useToggle(false)
    return (
        <>
        <center>
        <button onClick={()=>setToggle()}>Toggle</button>
        {isToggle ? <input type="text" style={{backgroundColor: "yellow"}}/> : <input type="text" style={{backgroundColor: "gray"}}/>}
        </center>
        </>
    )
}

export function UseDynamicToggle(props:any) {
    let [isToggle, setIsToggle] = useToggle(false);

    return(
        <>
        <button onClick={() => setIsToggle()}>Conditional load components</button>
        {isToggle ? props.ifCase : props.elseCase}
        </>
    )
}