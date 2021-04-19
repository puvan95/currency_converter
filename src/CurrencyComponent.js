import React from 'react'

function CurrencyComponent(props){

    const{
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount
    } = props

    return(
        <div className = "CurrencyConverter">
            <input className = "input"
                type = "number"
                name = "input_text"
                value = {amount}
                onChange = {onChangeAmount}
            />
            <select value={selectedCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map(option=>(
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}

export default CurrencyComponent