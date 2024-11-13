
// Preisstaffelung basierend auf Ranges für die ersten beiden Ziffern der PLZ
const priceRanges = [
    { min: 0, max: 10, factor: 0.5 },
    { min: 10, max: 20, factor: 0.6 },
    { min: 20, max: 30, factor: 0.7 },
    { min: 30, max: 40, factor: 0.8 },
    { min: 40, max: 50, factor: 0.9 },
    { min: 50, max: 60, factor: 1.0 },
    { min: 60, max: 70, factor: 1.1 },
    { min: 70, max: 80, factor: 1.2 },
    { min: 80, max: 90, factor: 1.3 },
    { min: 90, max: 100, factor: 1.4 }
];

// Funktion zur Berechnung des Preises basierend auf dem PLZ-Bereich
function calculatePrice() {
    // Eingabewerte erfassen
    const zipCode = document.getElementById("zip-code").value.trim();
    const consumption = parseFloat(document.getElementById("consumption").value);

    // Überprüfen, ob die Eingabe für die PLZ mindestens 2 Ziffern enthält
    if (zipCode.length < 2) {
        document.getElementById("result").innerHTML = "Bitte gib eine gültige PLZ ein, die mindestens zwei Ziffern enthält.";
        return;
    }

    // Ermittlung der ersten zwei Ziffern der PLZ als Ganzzahl
    const zipPrefix = parseInt(zipCode.substring(0, 2), 10);

    // Passenden Faktor basierend auf dem Bereich finden
    const priceFactor = priceRanges.find(range => zipPrefix >= range.min && zipPrefix < range.max)?.factor;

    // Überprüfung, ob der Faktor existiert und der Verbrauch korrekt ist
    if (priceFactor && consumption > 0) {
        const monthlyCost = priceFactor * consumption;
        document.getElementById("result").innerHTML = `Monatlicher Preis: ${monthlyCost.toFixed(2)} €`;
    } else if (!priceFactor) {
        document.getElementById("result").innerHTML = "Die eingegebene PLZ liegt außerhalb der verfügbaren Tarifbereiche.";
    } else {
        document.getElementById("result").innerHTML = "Bitte gib einen gültigen Stromverbrauch ein.";
    }
}
