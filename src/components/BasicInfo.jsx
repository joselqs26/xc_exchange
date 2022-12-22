import '../style/BasicInfo.css'
import React from 'react'
import { useBasicInfo } from '../hooks/useBasicInfo';

const BasicInfo = ( {baseCurrency , exCurrency} ) => {
    
    const basicInfo = useBasicInfo( baseCurrency , exCurrency );

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    return (
        <>
        <h2>Información básica:</h2>
        <div className='infoBase-container'>
            <span className='label'>Hoy {new Date().toLocaleDateString('es',options) }:</span>
            <span className='label-featured'>1 {exCurrency} = <span>{((basicInfo.change_pct * 100) <= 0) ? '↑' : '↓'}</span> {Math.round(basicInfo.end_rate * 1000) / 1000} {baseCurrency}</span>
            <span className='label'>Precio ayer: {Math.round(basicInfo.start_rate * 1000) / 1000} {baseCurrency}</span>
        </div>
        </>
    )
}

export {BasicInfo};