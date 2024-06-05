const typeOF = require("../tools/typeOF");

arr1 = ["hello1", "hello2"];
arr2 = ["hello3", "hello4"];

//còn là mảng
console.log("Kiểu mảng");
console.log(arr1);
console.log(typeOF(arr1));
console.log("Kiểu Stringg");
//đã thành string
console.log(...arr1);
console.log(typeOF(...arr1));

//
console.log("nối 2 mảng arr1 arr2:");
arr3 = [...arr1, ...arr2];
console.log(arr3);
