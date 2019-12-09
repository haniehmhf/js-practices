// Study Shorthand methods in es6, give examples.

// Ben shorthand method u aşağıda yazdığım gibi biliyordum, Araştırdım okudum ama yeni bir sey bulamadım

function person(name, age) {

    return {
        name: name,
        age: age,
        save: function () {
            console.log("saved!")
        }
    }
}

//shorthand methods

function personS(name, age) {

    return {
        name,
        age,
        save() {
            console.log("saved!")
        }
    }
}

let b = personS("hani", 25)
console.log(b) // {name: "hani", age: 25, save: ƒ}