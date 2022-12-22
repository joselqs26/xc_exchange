import { useEffect , useState } from 'react'

const useSymbols = () => {
    const [symbols, setSymbols] = useState('');

    useEffect( () => {
        fetch("https://api.exchangerate.host/symbols")
            .then(response => response.json())
            .then(result => setSymbols(result.symbols))
            .catch(error => console.log('error', error));

        console.log('effect');
    }, []);

    return symbols;
}

export { useSymbols };