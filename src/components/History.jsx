import React from 'react'
import { useHistory } from '../hooks/useHistory'
import '../style/History.css'

const History = ( {baseCurrency , exCurrency} ) => {
    const history = useHistory(baseCurrency , exCurrency);

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    console.log(history);

    return (
        <>
            <h2>Historial:</h2>
            <div className='history-container'>
                <table>
                    <tr>
                        <th>Fecha</th>
                        <th>Cotización</th>
                    </tr>
                    {
                        Object.keys(history).map( (dateStr) =>
                            <tr key={dateStr}>
                                <td>{ new Date(dateStr).toLocaleDateString('es',options) }</td>
                                <td>{Math.round(history[dateStr] * 1000) / 1000} {baseCurrency}</td>
                            </tr>
                        )
                    }
                </table>
            </div>
        </>
    )
}

export {History};