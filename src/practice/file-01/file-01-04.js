// Convert the following typescript segment to ES5
"use strict";

/**
 class SomeClass {
    public static SomeStaticValue = "hello";
    public someMemberValue = 15;
    private somePrivateValue = false;
    constructor(){
        SomeClass.SomeStaticValue = SomeClass.getGoodbye();
        this.someMemberValue = this.getFortyTwo();
        this.somePrivateValue = this.getTrue()
    }

    public static getGoodbye(): string {
        return "goodbye!";
    }

    public getFourtyTwo(): number {
        return 42;
    }
    private getTrue(): boolean {
        return true;
    }
}*/

// answer:

//es5
function SomeClass() {

    let somePrivateValue = this.getTrue();
    this.someMemberValue = this.getFortyTow()
}

SomeClass.prototype.getFortyTow = function () {
    return 42
}

SomeClass.prototype.getTrue = function () {
    return true
}

SomeClass.getGoodbye = function () {
    return 'goodbye'
}

SomeClass.SomeStaticValue = SomeClass.getGoodbye()

console.log(SomeClass.SomeStaticValue)
console.log(new SomeClass())