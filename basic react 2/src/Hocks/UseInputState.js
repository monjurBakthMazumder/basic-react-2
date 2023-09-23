import { useState } from "react"

const UseInputState = (defaultValue=null) => {
    const [value, SetValue] =useState(defaultValue)

    const onChange = e => {
        SetValue(e.target.value);
    }

    // const handleChange = e => {
    //     SetValue(e.target.value);
    // }
    // return [value, handleChange];

    return{
        value,
        onChange,
    }
}

export default UseInputState;