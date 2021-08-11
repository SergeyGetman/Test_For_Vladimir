// вернуть максимальное число
function max(a, b, c) {
    if (a > c && a > b) return a;
    if (a < b && b > c) return b;
    if (b < c) return c;


}

console.log(max(6, 3, 1));

//вернуть минимальное число
function min(a, b, c) {
    if (a < c && a < b) return a;
    if (a > b && b < c) return b;
    if (b > c) return c;
}

console.log(min(1, 3, 4));