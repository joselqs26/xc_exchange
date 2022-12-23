import { useEffect , useState } from 'react'

const useBasicInfo = ( baseCurrency , exCurrency ) => {
    const [basicInfo, setBasicInfo] = useState('');

    useEffect( () => {        
        const today = new Date().toJSON().slice(0, 10);
        
        const yesterdayDate = new Date();
        yesterdayDate.setDate(yesterdayDate.getDate() - 1);
        const yesterday = yesterdayDate.toJSON().slice(0, 10);

        fetch(`https://api.exchangerate.host/fluctuation?start_date=${yesterday}&end_date=${today}&base=${exCurrency}&symbols=${baseCurrency}`)
            .then(response => response.json())
            .then(result => setBasicInfo(result.rates[baseCurrency]))
            .catch(error => console.log('error', error));
    }, [baseCurrency , exCurrency]);

    return basicInfo;
}

export { useBasicInfo };