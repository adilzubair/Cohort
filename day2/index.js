function sum(a, b) {
    return a+b
}

console.log(sum("5", 6))

function sum2(n) {
    let sum = 0
    for (let i= 1; i <= n ; i++) {
        sum = sum + i
    }
    return sum
}

console.log(sum2(3))


