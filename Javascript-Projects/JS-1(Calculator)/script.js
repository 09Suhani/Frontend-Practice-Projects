let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button =>{
   button.addEventListener('click',(e =>{ 

     if(e.target.innerHTML == '='){
      string = eval(string);
      input.value = string;
     }
     else if(e.target.innerHTML == 'AC'){
      string = "";
      input.value = string
     }
     else if (e.target.innerHTML == 'DEL'){
      string = string.substring(0, string.length-1);
      input.value = string;
     }
     else{
      string += e.target.innerHTML;
      input.value = string;
     }

   }))
})



// Theory Part for JS :---
// 1. In JavaScript, the forEach loop is used to iterate over elements of an array and execute a specified function once for each element in the array.

// 2. console.log(5 == '5'); // true (type coercion happens) // console.log(5 === '5'); // false (strict comparison)
// console.log(5 != '5'); // false (type coercion happens)
// console.log(5 !== '5'); // true (strict comparison)
 
// 3. In JavaScript, eval() is a global function that evaluates a string of JavaScript code and executes it within the current lexical scope. It can take a string as an argument, which represents a block of JavaScript code, and executes it.




