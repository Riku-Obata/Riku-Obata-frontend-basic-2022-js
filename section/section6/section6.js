function sum(num1,num2) {
  let sum =0;
  const start = Math.min(num1, num2);
  const end = Math.max(num1, num2);
  for (let i=start ; i <= end ; i++) {
    sum +=i;
  }
  return sum;
}

module.exports = { sum };
