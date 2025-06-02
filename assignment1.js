
const users= [{name: "Adil", age: 25, gender: "Male"}, {name: "sara", age: 24, gender: "Female"}]


function voting(arr) {
    for (let i=0; i < arr.length; i++) {
    if (arr[i].age >= 18 && arr[i].gender=="Male") {
        console.log(arr[i].name)
    }
}
}

voting(users)

