// Function to fetch currency exchange rates from the API
async function fetchExchangeRates() {
    try {
        const response = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json');
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Failed to fetch exchange rates: ' + error.message);
    }
}

// Function to iterate through the exchange rates and find INR rate using a for loop
async function findINRRate() {
    try {
        // Fetch exchange rates
        const exchangeRates = await fetchExchangeRates();

        // Iterate through the exchange rates
        for (const [currencyCode, rate] of Object.entries(exchangeRates)) {
            // Check if the current currency code is INR
            if (currencyCode.toUpperCase() === 'INR') {
                // Log the INR exchange rate
                console.log(`1 USD = ${rate} ${currencyCode}`);
                break; // Stop the loop once INR rate is found
            }
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to find the INR exchange rate
findINRRate().value;
