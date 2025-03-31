// One euro is:
let oneEuroIs = {
"JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * (oneEuroIs.JPY / oneEuroIs.USD);
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen * (oneEuroIs.GBP / oneEuroIs.JPY);
    return valueInPound;
}

// We include all functions here as well because they need to be exported
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound , oneEuroIs };