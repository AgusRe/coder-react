import React, { useState } from 'react'

const Input = () => {
    const [name, setName] = useState('')

    const inputHandler = (e) => {
        setName(e.target.value)
    }

    return (
        <div>
            <input placeholder='Ingrese su nombre' type='text' name='Nombre completo' onChange={inputHandler}/>
            <p>{name}</p>
        </div>
        
    )
}

export default Input