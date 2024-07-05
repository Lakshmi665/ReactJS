import { useParams } from "react-router-dom";

export function PassParams() {
    let {name,place,animal,thing} = useParams();
    return ( 
        <>
        <p>Name: <b>{name}</b></p>
        <p>Place: <b>{place}</b></p>
        <p>Animal: <b>{animal}</b></p>
        <p>Thing: <b>{thing}</b></p>
        </>
    )
}