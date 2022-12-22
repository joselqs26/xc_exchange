import { useState } from 'react'

const useConverter = () => {
    const [amountConverted, setAmountConverted] = useState(0);

    const convertAmount = ( amount, currencyFrom, currencyTo ) => {
        fetch(`https://api.exchangerate.host/convert?from=${currencyFrom}&to=${currencyTo}&amount=${amount}`)
            .then(response => response.json())
            .then(result => setAmountConverted(result.result))
            .catch(error => console.log('error', error));
    };

    const undefinedCurrency = () => {
        setAmountConverted('');
    };

    return {amountConverted, undefinedCurrency, convertAmount};
}

export { useConverter };