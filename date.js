console.log(Date.parse("2019-01-01"));
console.log(Date.parse("2019-01-01T00:00:00.000Z"));
console.log(Date.parse("2019-01-01T00:00:00.000+00:00"))

const n = 1546300800000
console.log(n.toUTCString())