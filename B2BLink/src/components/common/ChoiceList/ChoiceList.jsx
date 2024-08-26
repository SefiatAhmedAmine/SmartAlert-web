import React, { useEffect, useState } from 'react'
import styles from './ChoiceList.module.css'
import PropTypes from 'prop-types'
import Select from 'react-select';


const ChoiceList = props => {

    const [selectedOption, setSelectedOption] = useState(null);
    const [options, setOptions] = useState([])

    useEffect(() => {
        setOptions(props.options.valeurs)
        if (props.options.critereon?.label == "model")
            setSelectedOption(null)
    }, [props.options.valeurs])

    const handleChange = (selectedOption) => {
        console.log(props.options, selectedOption);
        if (props.onChoiceChange)
            props.onChoiceChange(null, selectedOption)
        setSelectedOption(selectedOption);
    };
    return (
        <Select
            value={selectedOption}
            onChange={handleChange}
            options={options}
            isSearchable
            placeholder="Select an option..."
        />
    )
}

ChoiceList.propTypes = {}


export default ChoiceList