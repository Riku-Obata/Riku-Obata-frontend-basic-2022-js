function firstIndex(array)  {
  const firstItem = array[0];
  return firstItem;
};

function countArrayLength(array) {
 if (!Array.isArray(array)){
   return "これは配列ではありません";
 }else if (array.length === 0){
   return "この配列は空配列です";
 }else {
   return "この配列は" +array.length+ "個のデータを持っています";
};

function extractArray(array){
  if (array.length >= 2){
    if(array.length >= 3 {
      return [array[1],array[2]];
    } else {
      return [array[1]];
    }
  }
  else{
    return [];
  }
};

function makeMark(mark,number) {
  const result = [];
  for (let i = 0; i < number; i++) {
     result.push(mark);
  }
  return result
};

function onlyString(array) {
  return array.filter((element) => typeof element === "string");
};

function addNumber(array) {
  const newArray = [];
  for(let i=0; i<array.length; i++) {
    const newString = `${i+1}: ${array[i]}`;
    newArray.push(newString);
  }
  return newArray;
}

module.exports = {
  firstIndex,
  countArrayLength,
  extractArray,
  makeMark,
  onlyString,
  addNumber,
};
