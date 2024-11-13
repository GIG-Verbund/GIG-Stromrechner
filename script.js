
// Price scaling based on the first two digits of the postal code
const priceFactors = {
    "00": 0.5,
    "10": 0.6,
    "20": 0.7,
    "30": 0.8,
    "40": 0.9,
    "50": 1.0,
    "60": 1.1,
    "70": 1.2,
    "80": 1.3,
    "90": 1.4
};

// Function to calculate price based on the first two digits of the postal code
function calculatePrice() {
    // Retrieve input values
    const zipCode = document.getElementById("zip-code").value.trim();
    const consumption = parseFloat(document.getElementById("consumption").value);

    // Check if postal code input has at least 2 digits
    if (zipCode.length < 2) {
        document.getElementById("result").innerHTML = "Please enter a valid postal code with at least two digits.";
        return;
    }

    // Determine factor based on first two digits of postal code
    const zipPrefix = zipCode.substring(0, 2);
    const priceFactor = priceFactors[zipPrefix];

    // Check if the factor exists and if consumption input is valid
    if (priceFactor && consumption > 0) {
        const monthlyCost = priceFactor * consumption;
        document.getElementById("result").innerHTML = `Monthly cost: ${monthlyCost.toFixed(2)} €`;
    } else if (!priceFactor) {
        document.getElementById("result").innerHTML = "The entered postal code is not in the pricing range.";
    } else {
        document.getElementById("result").innerHTML = "Please enter a valid power consumption.";
    }
}
