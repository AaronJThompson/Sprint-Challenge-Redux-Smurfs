import React from "react";

export default function Smurf(props) {
    const { name, age, height } = props.smurf;

    return (
        <li>
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>Height: {height}</p>
        </li>
    )
}