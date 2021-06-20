import React from 'react'
import uuid from 'react-uuid'
import { PropTypes } from 'prop-types'
import { useTranslation } from 'react-i18next'

export default function CheckboxFilter({ChangeCheckbox, Checkbox}) {
    const { t } = useTranslation()
    const catagories = t('additem.cat', { returnObjects: true })


    const result = Object.keys(catagories).map(key => catagories[key])
    return (
        <div onChange={ChangeCheckbox} className="flex flex-col">
            <p className=" text-lg font-medium mb-3">Category</p>
            { result.map(category => {
                return (
                    <label htmlFor={category.value} key={uuid()} className="inline-flex items-center mt-3">
                        <input type="checkbox" checked={Checkbox.includes(category.value)} id={category.value} className="h-5 w-5"/><span className="ml-2">{category.value}</span>
                    </label>
                )
            })}
            <hr className="my-4" />
        </div>
    )
}

CheckboxFilter.propTypes = {
    ChangeCheckbox: PropTypes.func,
    Checkbox: PropTypes.arrayOf
}

CheckboxFilter.defaultProps = {
    ChangeCheckbox: () => {},
    Checkbox: []
}