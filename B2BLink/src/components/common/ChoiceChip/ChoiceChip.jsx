import React, { useEffect, useState } from 'react'
import styles from './choiceChip.module.css'
import PropTypes from 'prop-types'
import Select from 'react-select';
import { useLocale, useTranslations } from 'next-intl';


const choiceChip = props => {
    const locale = useLocale()
    const t = useTranslations()
    const [selectedOption, setSelectedOption] = useState(null);
    const [options, setOptions] = useState([])

    useEffect(() => {
        let opts = [{label: t("Common.all"), value: 0}]
        for (let i = 0; i < props.options.valeurs.length; i++) {
            const chip = props.options.valeurs[i];
            let tmp = {
                label: chip.translations[locale] ?? chip.value,
                value: chip.id
            }
            opts.push(tmp)
        }
        setOptions(opts)
    }, [props.options])


    const handleChange = (selectedOption) => {
        if (props.onChipChange) props.onChipChange(props.options, selectedOption)
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

choiceChip.propTypes = {}


export default choiceChip