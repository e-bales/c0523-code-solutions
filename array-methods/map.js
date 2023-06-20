const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

console.log(
  'Fire Sale baby!: ',
  prices.map((x) => ({ price: x, salePrice: x / 2 }))
);
console.log(
  'Formatted prices: ',
  prices.map((x) => '$' + x.toFixed(2))
);
