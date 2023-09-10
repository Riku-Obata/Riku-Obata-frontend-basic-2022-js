function echoDiv (dividend, divisor) {
  const quotient = Math.floor(dividend / divisor);
  const remainder = dividend & divisor;
  return "商: " + quotient + ", 余り: " + remainder;
}

function reply(message) {
  if(message === undefined){
    return "返信なし";
  }
  else{
    return message;
  }
}
    

module.exports = { echoDiv, reply };
