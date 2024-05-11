// api.ts

// Function to fetch currency exchange rates from an API
export async function fetchCurrencyExchangeRates(baseCurrency: string): Promise<any> {
    try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching currency exchange rates:', error);
        throw error;
    }
}

// Example usage:
// fetchCurrencyExchangeRates('USD').then(data => console.log(data));