let arr =["a","b","c","b","c","d","k"]

let result3 = arr.reduce((acc,cur)=>
 {return ({...acc,[cur]:((acc[cur] || 0)+1)})  }
,{});

console.log(result3);


// let obj ={};
// for(char of arr){

//     obj[char] = (obj[char] || 0) + 1;

// }

// console.log(obj);

// let arr2 = [2,4,6,80,70,10];
//  // ((cur < 40) ? acc + cur : acc);
// let result = arr2.reduce((acc,cur)=> ((cur < 40) ? acc + cur : acc),0);
// console.log(result);