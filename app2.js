//написать логику для подсчета суммы от 1 до n
function sumFromOneToN(n) {
    let summ = 0;
    for (let i = 0; i <= n; i++) {
        summ += i;
    }
    return summ;
}

console.log(sumFromOneToN(5));


//на входе массив объектов, среди которых могут быть числа
//вернуть сумму всех чисел, что есть в массиве, если чисел нет - вернуть 0

let arr = [{}, {}, 1, 2, 3, [], function () {}, Boolean, 3, 4, 1];

function totalSum(array) {
    if (array.length === 0) return 0;
    array = array.filter((elem) => typeof elem === "number");
    return array.reduce((a, b) => a + b);
}
console.log(totalSum(arr))



//ф-ция должна возвращать true, если элемент elem присутствует в массиве, иначе false
let arr2 = [1, 2, 3, 4,, "234", 8, false];

function includ(array, elem) {
    let res = [];

    for(let elem of array){
        if(typeof elem === 'number') res.push(elem);
    }
    return res;
    
}

console.log(includ(arr2, true));


//на входе 2 массива, вернуть массив, в котором будут элементы из этих 2х массивов

let arr3 = [1, "23", 3, 4, 5]
let arr4 = [1, "44", 3, 4, 5]

function conArrays(array1, array2) {
            let res = [];
        for(let i = 0; i < array1.length; i++){
            res.push(array1[i],array2[i]); 
        }
    return res
}
console.log(conArrays(arr3, arr4));



    /*написать ф-цию объеденения 2х массивов в 1 таким образом, что сначала  идут первые элемент, потом вторые элементы и тд
    если массивы содержать разное кол-во элементов, то все элементы, после одинакового кол-ва просто дописать в конец результирующего массива
    combine([1, 2, 3], ['a', 'b', 'c', 'd'])
    [1, 'a', 2, 'b', 3, 'c', 'd']
     */

    let arr5 = [1, 2, 3];
    let arr6 = ['a', 'b', 'c', 'd'];

     function comboArrays (array1, array2) {
        let res = [];
  
            for(let i = 0; i <= array2.length - 1; i++){
                res.push(array1[i], array2[i])
            
            }
        return res.filter((elem) => elem !== undefined)
    }

    console.log(comboArrays(arr5, arr6));




