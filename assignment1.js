
const users= [{name: "Adil", age: 25, gender: "Male"}, {name: "sara", age: 24, gender: "Female"}]


function voting(arr) {

    let arr2 = []
    for (let i=0; i < arr.length; i++) {
    if (arr[i].age >= 18 && arr[i].gender=="Male") {
        arr2.push(arr[i].name)
    }
}
    return arr2
}

const list = voting(users)

console.log(list)

