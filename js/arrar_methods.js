//1.array method map
{console.log("***************************ARRAY METHOD MAP******************************")
    let a=[1,2,3,4,5]
    let b=a.map((a,b) => {
        console.log(a,b)  //map function return value and index

        return a+5        //we can modify 
    })

    console.log(a,b)
 
}

//2.array method forEach
{console.log("***************************ARRAY METHOD FOREACH******************************")
    let a=[1,2,3,4,5]
    let b=a.forEach((a,b) => {
        console.log(a,b)  //forEach function return value and index

        return a+5        //we cannot modify
    })

    console.log(a,b)
}

//3.array method filter
{console.log("***************************ARRAY METHOD FILTER******************************")
    let a=[1,2,3,4,5]
    let b=a.filter((a,b) => {
        console.log(a,b)  //filter function return value and index

        return a>1       //we cannot modify
    })

    console.log(a,b)
}

//4.array method find
{console.log("***************************ARRAY METHOD FIND******************************")
    let a=[1,2,3,4,5]
    let b=a.find((a,b) => {
        console.log(a,b)  //when the condition satisfies the find function return the first value of the array 

        return a>3       //we cannot modify
    })

    console.log(a,b)
}

//5.array method every
{console.log("***************************ARRAY METHOD EVERY******************************")
    let a=[1,2,3,4,5]

    //EX::(AND) operator

    let b=a.every((a,b) => {
        console.log(a,b)  //EVERY method return the value and index.if the output is true it will print all the values and index
 
        return a<6       //we cannot modify
    })

    console.log(a,b)
}

//6.array method findLast
{console.log("***************************ARRAY METHOD FINDLAST******************************")
    let a=[1,2,3,4,5]
    let b=a.findLast((a,b) => {
        console.log(a,b)  // 
 
        return a<6       //we cannot modify
    })
    console.log(a,b)
}

//7.array method findIndex
{console.log("***************************ARRAY METHOD FINDINDEX******************************")
    let a=[1,2,3,4,5]
    let b=a.findIndex((a,b) => {
        console.log(a,b)  //FINDINDEX method return the value and index. 
 
        return a>1       //we cannot modify
    })

    console.log(a,b)
}

//8.array method findLastIndex
{console.log("***************************ARRAY METHOD FINDLASTINDEX******************************")
    let a=[1,2,3,4,5]
    let b=a.findLastIndex((a,b) => {
        console.log(a,b)  //FINDLASTINDEX method return the value and index. 

        return a      //we cannot modify
    })

    console.log(a,b)
}

//9.array method CONCAT
{console.log("***************************ARRAY METHOD CONCAT******************************")
    let a=[1,2,3,4,5]
    let b=[6,7,8,9,10]
    let c=[11,22,33,44,55]

    let array=a.concat(b,c) //we need to store the merged arrays in a variable 

    //hint:without storing in variable we cannot console 

    //we can merge more than one array in single line

    console.log(array)
}

//10.array method JOIN
{console.log("***************************ARRAY METHOD JOIN******************************")
    let a=[1,2,3,4,5]

    let array=a.join() //without giving argument it will print with comma
    let array1=a.join("") //with empty string it will delete the whitespace and print the array
    let array2=a.join("-") 

    console.log(array,array1,array2)
}

//11.array method ISARRAY
{console.log("***************************ARRAY METHOD ISARRAY******************************")
    let a=[1,2,3,4,5]

    let array=Array.isArray(a) 
    
    //Array is a name
    // we are going to chech whether variable A is array or not

    console.log(array)
}

//12.array method POP
{console.log("***************************ARRAY METHOD POP******************************")
    let a=[1,2,3,4,5]

    let array=a.pop() //pop method delete the last value in an array
    //we can't able to pass value

    console.log(array,a)
}

//13.array method SHIFT
{console.log("***************************ARRAY METHOD SHIFT******************************")
    let a=[1,2,3,4,5]

    let array=a.shift() //shift method delete the first value in an array
    //we can't able to pass value
    console.log(array,a)
}

//14.array method PUSH
{console.log("***************************ARRAY METHOD PUSH******************************")
    let a=[1,2,3,4,5]

    let array=a.push("Krishna") //shift method delete the first value in an array

    console.log(array,a)
}

//15.array method SPLICE
{console.log("***************************ARRAY METHOD SPLICE******************************")
    let a=[1,2,3,4,5]

    //splice method is used to replace the value in array
    let array=a.splice(3,1,"krishna") //splice method affect the array
    let array2=a.splice(3,2,"krishna")

    console.log(a,array)
    console.log(a,array2)
}

//16.array method SLICE
{console.log("***************************ARRAY METHOD SLICE******************************")
    let a=["b","a","and","bye"]

    //slice method works with index (start) or  (start end)
    let array=a.slice(1)
    let array1=a.slice(1,3)
    console.log(a,array)
    console.log(a,array1)
}

//17.array method SORT
{console.log("***************************ARRAY METHOD SORT******************************")
    let a=["b","a","and","bye"]

    let array=a.sort() //sort method does not affect the array
    //the original has been changed into new array

    console.log(a,array)
}

//18.array method REVERSE
{console.log("***************************ARRAY METHOD REVERSE******************************")
    let a=["b","a","and","bye"]

    let array=a.reverse()
    
    console.log(a,array)
}

//19.array method INCLUDES
{console.log("***************************ARRAY METHOD INCLUDES******************************")
    let a=["b","a","and","bye"]

    //INCLUDES method returns true or false only
    let array=a.includes("a")

    let a2=a.includes("hi")
    
    console.log(array)
    console.log(a2)
}

//20.array method KEYS
{console.log("***************************ARRAY METHOD KEYS******************************")
    let a=["b","a","and","bye"]

    //KEYS method returns the index
    let array=a.keys()
    for(var i of array){
        console.log(i)
    }
}

//21.array method REDUCE
{console.log("***************************ARRAY METHOD REDUCE******************************")
    let a=[1,2,3,4,5]

    //in reduce method we can return the value
    let array=a.reduce((a) =>{
        //console.log(a)
        return a+2
    })

    console.log(array)
}

//22.array method INDEXOF
{console.log("***************************ARRAY METHOD INDEXOF******************************")
    let a=[1,2,3,4,5]

    //indexOf method return the index of value
    let array=a.indexOf(4)

    console.log(array)
}

//23.array method LASTINDEXOF
{console.log("***************************ARRAY METHOD LASTINDEXOF******************************")
    let a=[1,2,3,4,5]

    //LASTINDEXOF method return the index of value
    let array=a.lastIndexOf(4)

    console.log(array)
}

//24.array method SOME
{console.log("***************************ARRAY METHOD SOME******************************")
    let a=[1,2,3,4,5]

    //In SOME method if any one of the valur is true it return true
    //some return true or fasle only
    let array=a.some((a,b) => {
        console.log(a,b)

        return a<2
    })

    console.log(array)
}


//25.array method SOME
{console.log("***************************ARRAY METHOD SOME******************************")
    let a=[1,2,3,4,5]

    //In SOME method if any one of the valur is true it return true

    //EX::(OR) operator

    //some return true or fasle only
    let array=a.some((a,b) => {
        console.log(a,b)

        return a<2
    })
    console.log(array)
}

//26.array method UNSHIFT
{console.log("***************************ARRAY METHOD UNSHIFT******************************")
    let a=[1,2,3,4,5]

    //UNSHIFT method add the value from index strating
    let array=a.unshift("krishna")

    console.log(array,a)
}


//27.array method VALUES
{console.log("***************************ARRAY METHOD VALUES******************************")
    let a=[1,2,3,4,5]

    //VALUES method add the value from index strating
    let array=a.values()

    for(i of array){
        console.log(i)
    }
}

//array of object =1
{
    var employee=[{name:"krishna",id:1,position:"full stack developer"},
        {name:"jegan",id:2,position:"front-end developer"},
        {name:"sree",id:3,position:"front-end developer"}
    ]

    //adding new object in array of object
    let a=employee.map((a)=>{
        return a.name=="sree" ?{...a,name:"hi"}:a
    })
    console.log(a)
}

//array of object =2
{
    var employee=[{name:"emp1",id:1,position:"full stack developer",salary:30000},
        {name:"emp2",id:2,position:"front-end developer",salary:10000},
        {name:"emp3",id:3,position:"front-end developer",salary:20000},
        {name:"emp4",id:4,position:"front-end developer",salary:32000},
        {name:"emp5",id:5,position:"front-end developer",salary:48000},
        {name:"emp6",id:6,position:"front-end developer",salary:28000},
        {name:"emp7",id:7,position:"front-end developer",salary:60000},
        {name:"emp8",id:8,position:"front-end developer",salary:18000},
        {name:"emp9",id:9,position:"front-end developer",salary:35000},
        {name:"emp10",id:10,position:"front-end developer",salary:42000}
    ]
    
    let a=employee.sort((a,b)=>{
         return b.salary-a.salary
    })
    console.log(a)
}

 