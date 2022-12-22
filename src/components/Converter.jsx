import '../style/Converter.css'

import {ReactComponent as RotateSVG } from '../icons/rotate-solid.svg';
import {ReactComponent as ActionSVG } from '../icons/forward-solid.svg';

import React, { useState } from 'react'
import { useConverter } from '../hooks/useConverter';

const Converter = ( {baseCurrency , exCurrency} ) => {
    const [diviseList,setDiviseList] = useState([baseCurrency,exCurrency]);
    const [amountToConvert, setAmountToConvert] = useState(0);
    const {amountConverted, undefinedCurrency, convertAmount} = useConverter();

    React.useEffect( () => {
        setAmountToConvert(0);
        setDiviseList([baseCurrency,exCurrency]);
    }, [baseCurrency , exCurrency]);

    React.useEffect( () => {
        undefinedCurrency();
    }, [diviseList]);

    const onSwap = () => {
        setDiviseList( [diviseList[1],diviseList[0]] );
        setAmountToConvert(amountConverted);
    };
    
    const onExchange = () => {
        convertAmount(amountToConvert,diviseList[0],diviseList[1])
    };

    return (
        <>
        <h2>Conversor:</h2>
        <div className='converter-container'>
            <div className='converter'>
                <label className='label' htmlFor="amount_convert">Monto en {diviseList[0]}</label>
                <input
                    className='converter-input'
                    placeholder='0'
                    type="number"
                    name="amount_convert"
                    id="amount_convert"
                    value={amountToConvert} 
                    onChange={ ( e => {
                        setAmountToConvert(e.target.value);
                        undefinedCurrency();
                    } ) }
                />
            </div>
            <div className='buttons'>
                <button onClick={onSwap}><RotateSVG /></button>
                <button onClick={onExchange}> <ActionSVG /> </button>
            </div>
            <div className='converter'>
                <label className='label' htmlFor="amount_converted">Monto en {diviseList[1]}</label>
                <input
                    className='converter-input'
                    placeholder='0'
                    type="number"
                    name="amount_converted"
                    id="amount_converted"  
                    readOnly={true}
                    value={(Math.round(amountConverted * 1000) / 1000)}
                />
            </div>
        </div>
        </>
    )
}

export {Converter}