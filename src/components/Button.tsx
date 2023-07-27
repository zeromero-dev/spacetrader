'use client'

import { getStatus } from "./getData"

const Button = () => {
    return (
        <button onClick={getStatus}>
            Click me!
        </button>
    )
    console.log(getStatus)

}

export default Button