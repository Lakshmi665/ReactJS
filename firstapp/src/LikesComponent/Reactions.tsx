import { useState } from "react"

export function Reactions(props : any) {
    let [likes, setLikes] = useState(0);
    let [shares, setShares] = useState(0);
    let [wows, setWows] = useState(0);
    return (<>
    <div>Props are read-only and can be shared with child components</div>
    <button onClick={() => setLikes(++likes)}>{likes} 👍</button>
    <button onClick={() => setShares(++shares)}>{shares} shares</button>
    <button onClick={() => setWows(++wows)}>{wows} wows</button>
    </>)
}