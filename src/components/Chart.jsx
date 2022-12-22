import React from 'react';
import {
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    BarChart,
} from 'recharts';
import { useHistory } from '../hooks/useHistory';

const Chart = ( {baseCurrency , exCurrency} ) => {

    const history = useHistory(baseCurrency , exCurrency);
    const data_h = Object.keys(history).map( (dateStr) => {
        return {
            'date' : dateStr,
            'Valor' : history[dateStr]
        }
    })

    console.log(history);

    return (
        <>
        <h2>Gráfico histórico:</h2>
        <div className='chart-container'>
        <ResponsiveContainer className='chart' width='80%' aspect={4/3} minWidth='240px' >
            <BarChart
                data={data_h}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid  strokeDasharray="3 3" stroke="#1B4332" />
                <XAxis stroke='#95D5B2' label={{ value: 'Últimos 10 días', position: 'insideBottom', fill:'#D8F3DC', offset:-5 }} dataKey="date" />
                <YAxis stroke='#95D5B2' label={{ value: baseCurrency, angle: -90, position: 'left', fill:'#D8F3DC', offset:15  }} ticks={data_h.map( obj => ( Math.round(obj.Valor * 10) / 10) )} domain={[dataMin => (dataMin - dataMin*0.001), dataMax => (dataMax + dataMax*0.001)]} />
                <Tooltip />
                <Legend align='right' verticalAlign='top' height={20} />
                <Bar dataKey="Valor" fill="#39FF14" />
            </BarChart>
        </ResponsiveContainer>
        </div>
        </>
    );
}

export { Chart }