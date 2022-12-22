import '../style/CurrencySelect.css'
import React from 'react'
import { useSymbols } from '../hooks/useSymbols';

const CurrencySelect = ( {name, setSelected , currency} ) => {
    
  const symbols = useSymbols();

  const handleChange = event => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };


  return (
    <select 
        name={name} 
        id={name}
        value={currency}
        onChange={handleChange}
        className='currencySelecter-select'
    >
        {Object.keys(symbols).map( symbol_name => (
        <option
            key={symbol_name} 
            value={symbol_name}
        >
            {symbol_name} - {symbols[symbol_name].description}
        </option>
        ))}
    </select>
  )
}

export {CurrencySelect};