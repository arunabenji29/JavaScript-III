/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 

    Window Binding: If there is no object created by the user and if there is anything written outside the object even if created, 
    the 'this' keyword binds to the 'window' object irrespective of whether there is a function or not. Since the 'this' keyword 
    has no object to look into.

* 2. 

    Implicit Binding: If there are a bunch of properties and methods in a object literal, the methods can only access the properties 
    of the object using a 'this' keyword. If 'this' keyword is not provided the properties go undefined, when if called.

* 3. 

    Explicit Binding: These are for functions which has access to the object attributes when called. The this keyword will refer to 
    the object referenced during function invoking. 

* 4. 

    New Binding: You can have one constructor and create instances of it, without having to repeat yourself. You can also create 
    common methods by using those attributes of the instances using 'this' keyword.


*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
    console.log(this)

    //(or)

    function dontDo(name){
        name = 'notPossible'
        return `I am ${this.name}`
    }

    console.log(dontDo('not possible'))

// Principle 2

// code example for Implicit Binding

    const gadget = {
        name:'TV',
        display:'LED',
        size:'46 inch',
        describe: function(){
            return `My ${this.name} is a ${this.size} ${this.display} display`
        }
    }

    console.log(gadget.describe())

// Principle 3

// code example for New Binding

    function Gadgets(props){
        this.mainName = props.name;
        this.mainDisplay = props.display;
        this.mainSize = props.size;
        console.log(this);
    }

    Gadgets.prototype.describe = function(){
        return `My ${this.mainName} is a ${this.mainSize} ${this.mainDisplay} display`
    }

    const gadget1 = new Gadgets({
        name:'TV',
        display:'LED',
        size:'46 inch'
    });

    const gadget2 = new Gadgets({
        name:'IPAD',
        display:'LCD',
        size:'8 inch'
    });

    console.log(gadget1.describe())
    console.log(gadget2.describe())

// Principle 4

// code example for Explicit Binding

const building = {
    name:'House',
    construction:'brick',
    heater:'gas'
}

function operation(){
    return `This infrastructure is a ${this.name} made of ${this.construction} and has a ${this.heater} heater`
}

console.log(operation.call(building))