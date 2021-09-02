// //  ***********
// //  * This    *
// //  * string  *
// //  * will    *
// //  * be      *
// //  * printed *
// //  * in      *
// //  * frame   *
// //  * *********























// // let str = 'This string will be printed in frame';
// // let sumbol = "*"

// // function printInFrame(srcString, ch) {
// //     srcString = srcString.split(" ");
// //     let counterLength = srcString.reduce((a, b) => a.length > b.length ? a : b).length;
// //     let width = srcString.reduce((a, b) => a.length > b.length ? a : b).length + 4;
// //     let height = srcString.length + 2;
// //     let res = "";

// //     for (let i = 0; i < width; i++) {
// //         res += "*";
// //     }
// //     res += "\n";

// //     for (let i = 0; i < width - 4; i++) {
// //         let spaces = counterLength - srcString[i].length;

// //         res += "* " + srcString[i];

// //         for (let j = 0; j < spaces; j++) {
// //             res += " ";
// //         }
// //         res += " *"
// //         res += "\n";
// //     }

// //     for (let i = 0; i < width; i++) {
// //         res += "*";

// //     }
// //         res + "\n"

// //     return res
// // }

// // console.log(printInFrame(str, sumbol));

//  // первый способ самый быстрый или второй, такой как ты скажешь переделать )) LOL )) 
// let st = "adabc";

// function reverseString(str) {
//     return str.split("").reverse().join("");
// }

// function reverseString(str) {
//     let res = "";

//     for(let i = 0; i < str.length; i++){
//         res += str[str.length - 1 - i];
//     }
//     return res;
// }
// console.log(reverseString(st));


// // или точно так-же как цикл сверху 
// let num = 123456;
//  function reverseNumber(n) {
//         n = n + "";
//         return n.split("").reverse().join("");
//     }
//     console.log(reverseNumber(num));


//     let str = 'this string will be capitalized';

//     function capitalizeWords(str) {
//             function upper (letter){
//                 return letter.toUpperCase();
//             } 
//             return str.replace(/\b[a-z](?=[a-z]{2})/gi, upper)

//         }



//     function capitalizeWords(str) {
//         return str.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ') ;
//     }

//     console.log(capitalizeWords(str));


// // или как ты меня постоянно правишь 

// let str2 = 'this string will be capitalized';

// function capitalizeWords(str) {
//         str = str.split(" ");
//     let res = "";

//     for(let i = 0; i <= str.length - 1; i++){
//         let name = str[i];
//         let first = name.substring(0,1).toUpperCase();
//         let lastLett = name.substring(1, name.length);
//         res += first + lastLett + " ";

//     }
//     return res;
// }
// console.log(capitalizeWords(str2));


// let a = 7;


// console.log(a);


// let b = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve(a = 99);
//     }, 2000)
// });
// b.then((value) => console.log(value));


// замыкание LOL 


// function one (){
//     const oneWorld = "я начинаюсь сверху, то есть я первая";

//   function two() {
//         const twoWorld = "ну и что, я всё равно тоже функция, несмотря что и у тебя внутри";
//         console.log("2-я функция" + twoWorld);
//         console.log("1-я функция" + oneWorld);
//     }
//     return two;
// }
// const twoFn = one();
// console.log(twoFn());







// let num = 16;
// let num2 = 942;

// let num4 = 56789;


// let num3 = 456;

// let newSumm = 0;

// function razrez(param) {
//     param = param.toString().split("").map(Number).reduce((a,b) => a + b);

//     return param > 9 ? razrez(param) : param
// }
// console.log(razrez(num4));

// class Shark extends Animal {
//     constructor(name, age, status) {
//       super(name, age, 0, "shark", status);
//     }
//   }

//   class Cat extends Animal {
//     constructor(name, age, status) {
//       super(name, age, 4, "cat", status);
//     }
//     introduce() {
//       return super.introduce() + "  Meow meow!";
//     }
//   }

//   class Dog extends Animal {
//     constructor(name, age, status, master) {
//       super(name, age, 4, "dog", status);
//       this.master = master;
//     }
//     greetMaster() {
//       return `Hello ${this.master}`;
//     }
//   }


// class Animal {
//     constructor(name, age, legs, species, status) {
//         this.name = name;
//         this.age = age;
//         this.legs = legs;
//         this.species = species;
//         this.status = status;
//     }
//     introduce() {
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }
// }


// class Shark extends Animal {
//     constructor(name, age, status) {
//         super(name, age, status);
//         this.species = "shark";
//         this.legs = 0;
//     }
//     introduce() {
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }
// }

// class Cat extends Animal {
//     constructor(name, age, status) {
//         super(name, age, status)
//         this.leg = 4;
//         this.status = "Meow meow!";

//     }
//     introduce() {
//         return `Hello, my name is ${this.name} and I am ${this.age} years old. ${this.status}`;
//     }
// }

// class Dog extends Animal {
//     constructor(name, age, status,master){
//         super(name, age, status)
//         this.legs = 4;
//         this.master = "Serving his master";
//         this.species = "dog"
//     }

//     introduce(){
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }
// }

// let doggy = new Dog("Doug", 12, "Serving his master", "Eliza");
// console.log(doggy.introduce())


// let billy = new Shark("Billy", 3, "Alive and well");
// console.log(billy.species)

// let exam = new Cat("Example", 10, "Happy")
// console.log(exam.introduce())




// let counter = (function(){
//     let initValue = 0
//     return function(){
//       initValue++;
//       return initValue
//     }
//   })()

//   console.log();


// const sorted = (array) => array.reduce((elem, item) => elem !== 0 && item >= elem && item, 1) ? true : false;





// function isSorted(array) {
//     if(array.length === 0) return true;
//     return array.reduce((accum, item) => accum !== false && item >= accum && item) ? true : false;
// }


// let str = "ab"

// function isAplphabet([...letters]) {
//     for (let i = 0; i < letters.length - 1; i++) {
//         if (letters[i].charCodeAt() > letters[i + 1].charCodeAt()) return false;
//     }

//     return true;
// }

// console.log(isAplphabet(str));

// function whoIsOnline(friends) {
//     console.log(friends)

//     let online = [];
//     let offline = [];
//     let away = []

//     for (let friend of friends) {

//         if (friend.status === "offline") {
//             offline.push(friend.username)
//         }
//         if (friend.status === "online" && friend.lastActivity > 10) {
//             away.push(friend.username);
//         } else if (friend.status === "online") {
//             online.push(friend.username)
//         }
//     }



//     let newObj = {
//         online,
//         offline,
//         away
//     }

//     if (newObj.online.length === 0) {
//         delete newObj.online;
//     }
//     if (newObj.offline.length === 0) {
//         delete newObj.offline;
//     }
//     if (newObj.away.length === 0) {
//         delete newObj.away;
//     }
//     return newObj;

// }



// let obj = [{
//     username: 'Alice',
//     status: 'online',
//     lastActivity: 10
// }, {
//     username: 'Lucy',
//     status: 'offline',
//     lastActivity: 22
// }, {
//     username: 'Bob',
//     status: 'online',
//     lastActivity: 104
// }]


// {
//     online: ['Alice'],
//     offline: ['Lucy'],
//     away: ['Bob']
//   }



// function whoIsOnline(friends) {
//      let online = [], offline = [], away = [];

//    let value = Object.entries(friends);
//    for(let [keys, friend] of value){
//     if (friend.status === "offline") 
//         offline.push(friend.username)     
//     if (friend.status === "online" && friend.lastActivity > 10)
//         away.push(friend.username);
//      else if (friend.status === "online") {
//         online.push(friend.username)
//     }
//    }

//     let newObj = {  online, offline, away }
//     let status = Object.entries(newObj);

//     for(let [stat, arrays] of status){   
//         arrays.length === 0 ? arrays.pop() : arrays;
//     }
//     return newObj;

// }


// console.log(whoIsOnline(obj));



// let str = "kolia param parest link"

// str = str.split(/\s+/).map((elem) => elem[0].toUpperCase() + elem.substring(1)).join(" ");
// str



// let arr = [1,2,3,4,5,6,7,8,9]


// const rigthReduce2 = (params) =>  {
//     return {
//         method : function push(params) {
//             let res = [];
//             for(let i = params.length - 1; i >= 0; i--){
//                 res.push(params[i])
//             }
//             return res;
//         },
//         method2 : function counters(params) {
//             let count = 0;
//             for(let i = params.length - 1; i >= 0; i--){
//                 count += params[i];
//             }
//             return count
//         }, 
//         method3 : function concatenations(params) {
//             let concat = "";
//             for(let i = params.length - 1; i >= 0; i--){
//                 concat += params[i];
//             }
//             return concat;
//         }
//     }

//   console.log(rigthReduce2().method(arr));
// letter = new RegExp(letter, "g")
// let str = "";
// for(let elem of string){    
// str += elem.replace(letter, "")
// }
// return str

// * аргументы:
// * url - адрес сервера
// * params - объект, в котором хранятся параметры для запроса
// * этот объект должен быть преобразован в строку и добавлен к url после символа '?'
// * callback - ф-ция которая будет вызвана после того как запрос выполнен и данные удачно распарсились
// * callback должен вызываться так:
// * если случилась какая-то ошибка то callback(error), если ошибки не было то callback(null, data);
// * использовать XmlHttpRequest 
// * https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest



// function httpGetRequest(url, params, callback) {
//     params = fetch(url).then(response => response.json()).then((json) => console.log(json));

//     return  params;

// }

// console.log(httpGetRequest('https://jsonplaceholder.typicode.com/users'));

// let str2 = 'abdefgjklop';
// let str3 = "mnpq"
// let str4 = "xyz"


// const isAlphabet = (letters) => letters === letters.split(" ").reduce((a, b) => 
// (a.charCodeAt() < b.charCodeAt()))

// let str = "abLcde";

// function orderedWords([...stroka]) {

//     for (let i = 0; i < stroka.length - 1; i++) {
//       console.log(stroka[i + 1].charCodeAt())
//       if(stroka[i + 1].charCodeAt() > stroka[i].charCodeAt() ) {
//           return true;
//       }
//     }
//     return false;
// }

// console.log(orderedWords(str));



// let str = "abc";

// const isAlphabet = (letters) => {
//     for (let i = 0; i < letters.length - 1; i++) {
//         if (letters[i + 1].charCodeAt() - letters[i].charCodeAt() != 1) return false;
//     }
//     return true
// }

// const isAlphabet = ([...letters]) => letters.map((elem) => elem.charCodeAt()).reverse()

// console.log(isAlphabet(str));

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

// let stroka = "din"
// let stroka2 = "recede"

// const changeString = (str) =>  str.replace(/[^aueyu]/g, "(")

// console.log(changeString(stroka2));

// const result = "I am learning JavaScript"
// function getString(word) {
//     return word
// }
// console.log(getString(result));



// let arr = [3,4,5,6,7];

// for(let i = 0; i < 5; i++){
//     arr[i] = arr[i] * 2;
// }
// arr;

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// Examples:
// "din"      =>  "((("
// "recede"   =>  "()()()"

// "(( @"     =>  "))(("


//to do tolowerCase()
//считаем количество букв, заносим в обьект
// и если в обьекте будет больше одной буквы, мы делаем ей replace "(" если один раз, если два ")"

// let str = "din";
// let str2 = "recede"
// let str3 = "Succes"

// "Success"  =>  ")())())"

// const changeLett = (stroka) => {

//     stroka = stroka.toLowerCase().split("");

//     let counter = {};
//     stroka.reduce((accum, elem) => {
//         counter[elem] = (counter[elem] || 0) + 1;

//     }, 0)
//     counter
//     let strNew = "";
//     let keysObj = Object.entries(counter);
//     for(let [letters, keys] of keysObj){
//         console.log(letters);
//         console.log(keys);
//         let rega = new RegExp(letters, "g");
//         if(keys > 1) strNew += letters.replace(rega, ")");
//         else  strNew += letters.replace(rega, "(");
//     }
//     return strNew; 
// }
// console.log(changeLett(str3));

// "Success"  =>  ")())())"
// "din"      =>  "((("
// "recede"   =>  "()()()"

// "(( @"     =>  "))(("
// let books = ["s", "u", "c", "c", "e", "s"]
// let double = 
// let newStr = "";
// for (let i = 0; i <= books.length - 1; i++){
//     let rage = new RegExp(books[i], "g");
//     if(books[i] == books[i + 1]) newStr += books[i].replace(rage, "(")
//     else newStr += books[i].replace(rage, ")")
// }
// newStr

// console.log(res);

// books.some(elem => elem)

// let str = "din";
// let str2 = "recede"
// let str3 = "Success"
// // "Success"  =>  ")())())"

// const allwors = (letter) => {
//   let newWord = "";
//   for(let i = 0; i < letter.length; i++){
//     let thisWord = letter[i];
//     let newReg = new RegExp(thisWord, "g");
//     newWord += letter[i].replace(newReg, "(")
//   }
//   return newWord;
// }
// function duoble(params) {
//   params = params.toLowerCase("").split("")
//   let uniq = [...new Set(params)].join("")
//   let replayLetter = params.filter((elem, index, array) => array.indexOf(elem) != index).join("|")
//     if(replayLetter === "") return allwors(params)
//   let rega = new RegExp(replayLetter, "g")
//   let newStr = "";

//   newStr = params.join("").replace(rega, ")")


//   return newStr.replace(/[a-z]/g, "(")
// }
// console.log(duoble(str3));


// let arr = [1,2,3,4,5]
// let arr2 = [3,4,5]

// arr.map(elem => arr2.includes(elem))
// arr




// let str = "din";
// let str2 = "recede"
// let str3 = "Success"
// //    =>  ")())())"


// const word = "Success".toLowerCase(); // S != s

// const chars = word.split("").reduce((accum, ch) => {
//   accum[ch] = accum[ch] ? ")" : "(";
//   return accum;
// }, {}); //?

// const b = word
//   .split("")
//   .map((ch) => chars[ch])
//   .join(""); //?


// let obj = {a: 2, b: 4};

// function sumObjects(...objects) { 
//   const result = {}; 

//   for (let i = 0; i < objects.length; i++) { 
//     for (const object in objects[i]) { 
//       if (result[object] === undefined) { 
//         result[object] = objects[i][object]; 
//       } else { 
//         result[object] += objects[i][object]; 
//       } 
//     } 
//   } 

//   return result; 
// }


// let newObj = [{
//     "a": 1
// }, {
//     "b": 2
// }]
//{0 : {a : 1}, 1: {b : 2}}
// function sumObjects(...param) {
//   console.log(param)
//   let object3 = {};

//   for (let i = 0; i < param.length; i++) {

//     for (let key in param[i]) {
//       console.log(key);
//       if (object3[key] == undefined) {
//         object3[key] = param[i][key];
//       } else {
//         object3[key] = parseFloat(object3[key]) + parseFloat(param[i][key]);
//       };
//     };
//   };

//   return object3;
// }
// console.log(sumObjects(newObj));



//{0 : {a : 1}, 1: {b : 2}}


// let newObj = [{
//     "a": 1
// }, {
//     "b": 2
// }]

// const counterObjet = (param) => {
//   let val = Object.entries(param)
//   let counter = {}
//   for (let [key, values] of val) {
//     counter[key] = (counter[key] || {}) 
//     counter[key] = values
//   }
//   return counter
// }

// console.log(counterObjet(newObj));


// const sumObjects = (object) => Object.fromEntries(Object.entries(object))
// console.log(sumObjects(newObj));


// let arr = [1,2,3,4,5]


// arr.reduceRight((accum, currentvalue, index, array) => {
//   console.log(accum);
//   console.log(currentvalue);
//   console.log(index);
//   console.log(array.indexOf(currentvalue) + array.indexOf(accum) != -1);
// })


// function reduce(array, callback, initial) {
//   let accum = initial || array.pop()

//   for(let i = array.length - 1; i >= 0; i--){
//     accum = callback(accum, array[i], i, array)
//   }
//   return accum;
// }

// console.log(reduce(arr, function(acc, curr){
//   return acc + curr;
// }));


// let arr = [1, 2, 3, 4, 5]


// function reduce(array, calback, initial) {

//   let accum = initial || array.pop();

//   for (let i = array.length - 1; i >= 0; i--) {
//     accum = calback(accum, array[i], i, array)
//   }

//   return accum;

// }

// console.log(reduce(arr, function summ (a, b){
//   a.push(b * 2)
//   return a
// }, []));




//{0 : {a : 1}, 1: {b : 2}}

// let newObj = [{
//   "a": 1
// }, {
//   "b": 2
// }]

//   let counter = {};

//   for(let i = 0; i < 2; i++){
//     counter[i] = {a : 1};
//     counter[i] = {b : 2};

//   }

//   counter


// const sumObjects = (...param) => {
//   return param.reduce((object3, elem) => {
//     for (let key in elem) {
//       object3[key] == undefined ? object3[key] = elem[key] :
//         object3[key] = parseFloat(object3[key]) + parseFloat(elem[key]);
//     }
//     return object3;
//   }, {})
// }

// console.log(sumObjects(newObj));




// let arr = [1,2,3,4,5];


// function reduce(array, callback, initial) {

//   let accum = initial ?? array[array.length - 1];

//   for(let i = array.length - (initial !== undefined ? 1 : 2); i >= 0; i--){
//     accum = callback(accum, array[i], i, array)
//   }
//   return accum;

// }

// console.log(reduce(arr, function sum(a, b){

//   return a * b;
// },0));


// const isEven = (number) => number % 2 === 0;

// console.log(isEven(3));

// if(adultsCount === 0 || childrenCount === 1){
//   return false;

// }else if(adultsCount + childrenCount >= 8){
//   return false;

// }else if(adultsCount >= 9){
//   return false;

// } else{
//   return true;
// }


// url - адрес куда делать запрос
// params - объект с параметрами запроса, параметры должны преобразовываться в строку
// callback - ф-ция, которая будет вызываться после того как запрос выполнился или “упал” с ошибкой
// если получилось выполнить запрос то вызвать callback(null, response), если случилась ошибка - callback(error)

// сделать ф-цию httpGetRequest(url, params, callback)
// url - адрес куда делать запрос
// params - объект с параметрами запроса, параметры должны преобразовываться в строку
// callback - ф-ция, которая будет вызываться после того как запрос выполнился или “упал” с ошибкой
// если получилось выполнить запрос то вызвать callback(null, response), если случилась ошибка - callback(error)

// после того как эта ф-ция будет готова использовать её для получения данных из https://jsonplaceholder.typicode.com/

// задача следующая:
// используя свой httpGetRequest
// загрузить список постов и отобразить на странице
// в виде небольшого превью из нескольких слов и кнопочки “Comments”
// по клику на этой кнопочке надо загрузить все комментарии для поста по postId
// и после того как подгрузятся отобразить под постом


// let obj = {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
// }

