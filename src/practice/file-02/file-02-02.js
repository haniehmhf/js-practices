// Solve the problem below such that bio() could log My name is John Doe

var person = {
    name : 'John Doe',
    age : 42,
    gender : 'male',
    bio : function(){
        console.log("My name is " + this.name)
    }
}

person.bio()
var bio = person.bio
bio.call(person)