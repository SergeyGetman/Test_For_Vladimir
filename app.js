//**********************TASK 1*******************************//





const task1 = (a, b, c) => a + b + c;
task1(1, 2, 3);

//**********************TASK 2*******************************//

//вернуть сумму чисел, но надо учесть что аргументы могут быть не только числами, использовать оператор typeof в связке с if-else


const task2 = (a, b, c) => {
   
    if(typeof a !== 'number' && typeof b != "number") return c;
    if(typeof a !== 'number' && typeof c !== "number") return b;
    if(typeof b !== 'number' && typeof c !== "number") return a;
    if(typeof a !== "number") return  b + c;
    if(typeof b !== "number") return  a + c;
    if(typeof c !== "number") return  a + b;
    return a + b + c;

}

task2(4, "2", "2");


//**********************TASK 3*******************************//

// const max = (b, x, ...maximal) => Math.max.apply(null, maximal);

// console.log(max(2,3,4));

//**********************TASK 4*******************************//

const min = (a, b, ...minimal) => Math.min(minimal);


console.log(min(2,3,4));