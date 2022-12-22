import './App.css';
import { useState } from 'react';
import { CurrencySelect } from './components/CurrencySelect';
import { BasicInfo } from './components/BasicInfo';
import { Converter } from './components/Converter';
import { History } from './components/History';
import { Chart } from './components/Chart';

function App() {
  
  const [baseCurrency, setBaseCurrency] = useState('COP');
  const [exCurrency, setExCurrency] = useState('USD');
  
  return (
    <div className="App">
      <header className='header'><span className='logo-xc'></span></header>
      <div className='currencySelecters-container'>
        <div className='currencySelecter'>
          <label className='label' htmlFor='baseCurrency'>Moneda base:</label>
          <CurrencySelect name='baseCurrency' setSelected={setBaseCurrency} currency={baseCurrency} />
        </div>
        <div className='currencySelecter'>
          <label className='label' htmlFor='exCurrency'>Moneda de intercambio:</label>
          <CurrencySelect name='exCurrency' setSelected={setExCurrency} currency={exCurrency} />
        </div>
      </div>
      <BasicInfo baseCurrency={baseCurrency} exCurrency={exCurrency} />
      <Converter baseCurrency={baseCurrency} exCurrency={exCurrency} />
      <History baseCurrency={baseCurrency} exCurrency={exCurrency} />
      <Chart baseCurrency={baseCurrency} exCurrency={exCurrency} />
    </div>
  );
}

export default App;
