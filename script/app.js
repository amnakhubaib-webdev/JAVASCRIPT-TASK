//total savings
var totalSavings = prompt("Enter your total savings");
var zakatAmount = (Number( totalSavings)) * 0.025;
//zakat Amount
zakatAmountString = zakatAmount.toFixed(2);
// final value
alert("your Zakat Amount is : RS" + zakatAmountString);