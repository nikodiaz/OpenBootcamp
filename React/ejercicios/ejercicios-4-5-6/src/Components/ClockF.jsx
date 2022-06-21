import React, { useState, useEffect } from "react";

export function ClockF() {

    const initialState = {
        date: new Date(),
        age: 0,
        name: 'Nicolás',
        last_name: 'Díaz'
    }

    const [user, setUser] = useState(initialState);

    useEffect(() => {
        const interval = setInterval(() =>{
            updateUser()
        }, 1000)
        return () => {
            clearInterval(interval)
        };
    });

    function updateUser(){
        setUser({
            date: new Date(),
            age: user.age + 1,
        })
    }

    return (
        <div>
            <h2>Hora actual: {user.date.toLocaleTimeString()} </h2>
            <h3> {user.nombre} {user.apellido} </h3>
            <h1>Edad: {user.age} </h1>
        </div>
    )
}