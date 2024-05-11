import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Converter: React.FC = () => {
  const [currencyRates, setCurrencyRates] = useState<any>(null);
  const [amount, setAmount] = useState<number>(0);
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);

  useEffect(() => {
    // Fetch currency rates from an API
    const fetchData = async () => {
      try {
        const response = await fetch();//API key goes in parenthesis
        if (!response.ok) {
          throw new Error('Failed to fetch currency rates');
        }
        const data = await response.json();
        setCurrencyRates(data);
      } catch (error) {
        console.error('Error fetching currency rates:', error);
      }
    };

    fetchData();
  }, []);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = parseFloat(e.target.value);
    setAmount(newAmount);
  };

  useEffect(() => {
    if (currencyRates && amount !== 0) {
      const eurRate = currencyRates.rates.EUR;
      setConvertedAmount(amount * eurRate);
    }
  }, [currencyRates, amount]);

  return (
    <div>
      <h1>Currency Converter: USD to EUR</h1>
      <label>
        Enter amount in USD:
        <input type="number" value={amount} onChange={handleAmountChange} />
      </label>
      <p>{amount} USD is equal to {convertedAmount ? convertedAmount.toFixed(2) : '...'} EUR</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Converter;
