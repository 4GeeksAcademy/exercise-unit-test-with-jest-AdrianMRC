const { oneEuroIs } = require('./app.js');


test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(expected);
});

test("One dollar should be 146.26 yens", function() {
    const { fromDollarToYen } = require('./app.js');
    const yens = fromDollarToYen(3.5);
    const expected = 3.5 * (oneEuroIs.JPY / oneEuroIs.USD);
    expect(yens).toBe(expected);
});

test("One yen should be 0.005642857142857143 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(3.5);
    const expected = 3.5 * (oneEuroIs.GBP / oneEuroIs.JPY);
    expect(pounds).toBe(expected);
});