/*
	Shallow Copy: 
		When a reference variable is copied into a new reference variable 
		using the assignment operator, a shallow copy of the referenced object
		is created. In simple words, a reference variable mainly stores the address 
		of the object it refers to. When a new reference variable is assigned the
		value of the old reference variable, the address stored in the old reference
		variable is copied into the new one. This means both the old and new reference 
		variable point to the same object in memory. As a result, if the state of the 
		object changes through any of the reference variables it is reflected for both.
		 Let us take an example to understand it better.
*/


/*
	Deep Copy: 
		Unlike the shallow copy, deep copy makes a copy of all the members of the old 
		object, allocates a separate memory location for the new object, and then assigns
		 the copied members to the new object. In this way, both the objects are independent 
		 of each other and in case of any modification to either one, the other is not 
		 affected. Also, if one of the objects is deleted the other still remains in the 
		 memory. Now to create a deep copy of an object in JavaScript we use JSON.parse() 
		 and JSON.stringify() methods. Let us take an example to understand it better.
*/


var array = {
    id: 1,
    name: "krishna"
}

function print_shallow() {

    var printShallow = document.getElementById("originalShallow")
    printShallow.innerHTML = array.id + ',' + array.name

    var shallowCopyAssign = array

    var assign = document.getElementById("assign")
    assign.innerHTML = shallowCopyAssign.id + ',' + shallowCopyAssign.name

    shallowCopyAssign.id = "123"
    var originalShallow1 = document.getElementById("originalShallow1")
    originalShallow1.innerHTML = array.id + ',' + array.name

    var Shallowcopy = document.getElementById("modified")

    console.log(array)
    Shallowcopy.innerHTML = shallowCopyAssign.id + ',' + shallowCopyAssign.name

}

let arrayDeep = {
    id: 1,
    name: "krishna"
}
let arrayObjectAssign = {
    car: "Mercedes",
    color: "white"
}
let arraySpread = {
    empid: "001",
    name: "employee1"
}

function print_deep() {
    //json parse and json stringify
    var printShallow = document.getElementById("originalDeep")
    printShallow.innerHTML = arrayDeep.id + ',' + arrayDeep.name

    let deepCopyAssign = JSON.parse(JSON.stringify(arrayDeep));

    var assign = document.getElementById("assignDeep")
    assign.innerHTML = deepCopyAssign.id + ',' + deepCopyAssign.name

    deepCopyAssign.id = "123"
    var originalDeep1 = document.getElementById("originalDeep1")
    originalDeep1.innerHTML = arrayDeep.id + ',' + arrayDeep.name

    var modifiedDeep = document.getElementById("modifiedDeep")

    modifiedDeep.innerHTML = deepCopyAssign.id + ',' + deepCopyAssign.name

    //object assign
    var printObjectAssign = document.getElementById("originalObjectAssign")
    printObjectAssign.innerHTML = arrayObjectAssign.car + ',' + arrayObjectAssign.color

    let deepObjectAssign = Object.assign({}, arrayObjectAssign)

    var ObjectAssign = document.getElementById("ObjectAssign")
    ObjectAssign.innerHTML = deepObjectAssign.car + ',' + deepObjectAssign.color

    deepObjectAssign.color = "red"
    var originalObjectAssign1 = document.getElementById("originalObjectAssign1")
    originalObjectAssign1.innerHTML = arrayObjectAssign.car + ',' + arrayObjectAssign.color

    var modifiedObjectAssign = document.getElementById("modifiedObjectAssign")

    modifiedObjectAssign.innerHTML = deepObjectAssign.car + ',' + deepObjectAssign.color

    //spread operator
    var printSpread = document.getElementById("originalSpread")
    printSpread.innerHTML = arraySpread.empid + ',' + arraySpread.name

    let deepSpread = {
        ...arraySpread
    }

    var ObjectSpread = document.getElementById("ObjectSpread")
    ObjectSpread.innerHTML = deepSpread.empid + ',' + deepSpread.name

    deepSpread.empid = "002"
    var originalSpread1 = document.getElementById("originalSpread1")
    originalSpread1.innerHTML = arraySpread.empid + ',' + arraySpread.name

    var modifiedSpread = document.getElementById("modifiedSpread")

    modifiedSpread.innerHTML = deepSpread.empid + ',' + deepSpread.name

}



//shallow copy vs deep copy

{ //shallow copy in primitive data type(string,numbers,boolean)
    let x = 3
    y = x // x is copied into y 
    y++ // y is incremented 
    console.log(y) // now 4 
    console.log(x) // still 3
}

{ //shallow copy in non-primitive data type(array,object)

    /*with non-primitive data types like arrays and objects, 
    only a reference to the values is passed. 
    So when the copy is mutated, the original also gets mutated.
     This is also known as shallow copying.*/

    { //OBJECT
        let adam = {
            name: "Adam"
        };
        let jason = adam;
        jason.name = "Jason";
        console.log(adam.name); // outputs "Jason" 
        console.log(jason.name); // outputs "Jason"
    } { //ARRAY
        let adam = [{
            name: "Adam"
        }];
        let jason = adam;
        jason.name = "Jason";
        console.log(adam.name); // outputs "Jason" 
        console.log(jason.name); // outputs "Jason"
    }
}

{ //Shallow Copy an Object by Assignment
    const user = {
        name: "Kingsley",
        age: 28,
        job: "Web Developer"
    }
    const clone = user
    console.log(user)
    console.log(clone)

    clone.age = 30
    console.log(user)
    console.log(clone)
}

{ //Copy an Object With JSON.stringify() and JSON.parse()
    const user = {
        name: "Kingsley",
        age: 28,
        job: "Web Developer"
    }
    let clone = JSON.parse(JSON.stringify(user))
    console.log(user)
    console.log(clone)

    clone.age = 32
    console.log(user)
    console.log(clone)
}

{ //Copy an Object With Object.assign()
    { //Example = 1
        const user = {
            name: "Kingsley",
            age: 28,
            job: "Web Developer",
            incrementAge: function () {
                this.age++
            }
        }
        let clone = Object.assign({}, user) // Copies user into clone

        clone.age = 32
        console.log(user)
        console.log(clone)
    } { //Example = 2
        const user = {
            name: "Kingsley",
            age: 28,
            job: "Web Developer",
            location: {
                city: "Lagos",
            }
        }
        const clone = Object.assign({}, user)

        clone.age = 32
        clone.location.city = "New York"
        console.log(user)
        console.log(clone)
    }
}

{ //The Spread Operator
    { //Example = 1
        const user = {
            name: "Kingsley",
            age: 28,
            job: "Web Developer"
        }
        const clone = {
            ...user
        }
        console.log(clone);
    } { //Example = 2
        let user = {
            name: "Kingsley",
            age: 28,
            job: "Web Developer",
            location: {
                city: "Lagos",
            }
        }
        let clone = {
            ...user
        }
        clone = {
            ...clone,
            age: 32,
            location: {
                ...clone.location,
                city: "New York"
            }
        }
        console.log(user)
        console.log(clone)
    }
}

console.log("this is")
