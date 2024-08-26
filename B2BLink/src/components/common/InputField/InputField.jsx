import React, { useEffect, useState } from 'react'

const InputField = ({ prefix, placeholder, defaultValue }) => {
    const [value, setValue] = useState(defaultValue ?? 0)

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };
    return (
        <div className="min-value">
            {prefix ? (<span>{prefix}</span>) : null}
            <input type="text" className="from"
                defaultValue={value}
                placeholder={placeholder ?? ""} />
        </div>
    )
}

InputField.propTypes = {}


export default InputField