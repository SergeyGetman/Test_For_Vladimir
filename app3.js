//  ***********
//  * This    *
//  * string  *
//  * will    *
//  * be      *
//  * printed *
//  * in      *
//  * frame   *
//  * *********

// let str = 'This string will be printed in frame';
// let sumbol = "*"

// function printInFrame(srcString, ch) {
//     srcString = srcString.split(" ");
//     let counterLength = srcString.reduce((a, b) => a.length > b.length ? a : b).length;
//     let width = srcString.reduce((a, b) => a.length > b.length ? a : b).length + 4;
//     let height = srcString.length + 2;
//     let res = "";

//     for (let i = 0; i < width; i++) {
//         res += "*";
//     }
//     res += "\n";

//     for (let i = 0; i < width - 4; i++) {
//         let spaces = counterLength - srcString[i].length;

//         res += "* " + srcString[i];

//         for (let j = 0; j < spaces; j++) {
//             res += " ";
//         }
//         res += " *"
//         res += "\n";
//     }

//     for (let i = 0; i < width; i++) {
//         res += "*";

//     }
//         res + "\n"

//     return res
// }

// console.log(printInFrame(str, sumbol));

 // первый способ самый быстрый или второй, такой как ты скажешь переделать )) LOL )) 
let st = "adabc";

function reverseString(str) {
    return str.split("").reverse().join("");
}

function reverseString(str) {
    let res = "";

    for(let i = 0; i < str.length; i++){
        res += str[str.length - 1 - i];
    }
    return res;
}
console.log(reverseString(st));


// или точно так-же как цикл сверху 
let num = 123456;
 function reverseNumber(n) {
        n = n + "";
        return n.split("").reverse().join("");
    }
    console.log(reverseNumber(num));


    // let str = 'this string will be capitalized';

    // function capitalizeWords(str) {
    //         function upper (letter){
    //             return letter.toUpperCase();
    //         } 
    //         return str.replace(/\b[a-z](?=[a-z]{2})/gi, upper)

    //     }


        
    // function capitalizeWords(str) {
    //     return str.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ') ;
    // }
    
    // console.log(capitalizeWords(str));


// или как ты меня постоянно правишь 

let str2 = 'this string will be capitalized';

function capitalizeWords(...str) {
    
    let res = [];

    for(let i = 0; i <= str.length - 1; i++){

        res.push(str[i].substring(0,1))
    }
    return res;
}
console.log(capitalizeWords(str2));