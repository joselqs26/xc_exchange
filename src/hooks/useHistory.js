import { useEffect , useState } from 'react'

const useHistory = ( baseCurrency , exCurrency ) => {
    const [history, setHistory] = useState('');

    useEffect( () => {        
        const today = new Date().toJSON().slice(0, 10);
        
        const pastDate = new Date();
        pastDate.setDate(pastDate.getDate() - 9);
        const past = pastDate.toJSON().slice(0, 10);

        fetch(`https://api.exchangerate.host/timeseries?start_date=${past}&end_date=${today}&base=${exCurrency}&symbols=${baseCurrency}`)
            .then(response => response.json())
            .then(result => {
                const cleanResult = {};

                Object.keys(result.rates).forEach(function(key) {
                    cleanResult[key] = result.rates[key][baseCurrency]
                });

                setHistory(cleanResult)
            })
            .catch(error => console.log('error', error));

        console.log('effect');
        console.log(history);
    }, [baseCurrency , exCurrency]);

    return history;
}

export { useHistory };