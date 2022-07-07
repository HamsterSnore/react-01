import React from "react";

const InputField = (props) => {
    return (
        <input 
            name={props.name} 
            placeholder={props.placeholder} 
            value={props.value} 
            type={props.type} 
            onChange={props.onChange} 
            className="mb-4 border bg-transparent rounded-md py-1 px-2" />

    )
}

export default InputField;

