function score(num){
 if (num === undefined){
   return "後日受験";
 } else if (isNaN(num) || num < 0 || num > 100) {
   return "0以上100未満の数字を入れてください";
 } else if ( num >=80 && num <=100) {
   return "合格"
 } else if ( num >=60 && num <80) {
   return "追試"
 } else (num >=0 && num <60) {
   return "不合格"
 }
}
  
  
   
  

module.exports = { score };
