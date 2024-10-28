console.log(`runningCode.ts connected`)


const button = document.getElementById("button")! as HTMLButtonElement;
const input1 = document.getElementById("name")! as HTMLInputElement;
const input2 = document.getElementById("age")! as HTMLInputElement;
const input3 = document.getElementById("city")! as HTMLInputElement;
const input4 = document.getElementById("state")! as HTMLInputElement;



function addName (name : string, age : string, city : string, state : string) {
    return name + age + city + state
}

button.addEventListener("click", function() {
    console.log(addName(input1.value, input2.value, input3.value, input4.value));
})


///////////////////////////



// alert("Hello, World!")

// console.error("Uh Oh!")


let day = 1

// if (day === 1) {                 /// not very easy to read
//     console.log("Monday")
// }
// else if (day === 2) {
//     console.log(`Tuesday`)
// }
// else if (day === 3) {
//     console.log(`Wednesday`)
// }
// else if (day === 4) {
//     console.log(`Thursday`)
// }
// else if (day === 5) {
//     console.log(`Friday`)
// }
// else if (day === 6) {
//     console.log(`Saturday`)
// }
// else if (day === 7) {
//     console.log(`Sunday`)
// }

day = 4

// switch(day) {                       /// easier to read
//     case 1:
//         console.log("Monday")
//         break
//     case 2:
//         console.log("Tuesday")
//         break
//     case 3:
//         console.log("Wednesday")
//         break
//     case 4:
//         console.log("Thrusday")
//         break
//     case 5:
//         console.log("Friday")
//         break
//     case 6:
//         console.log("Saturday")
//         break
//     case 7:
//         console.log("Sunday")
//         break
//     default:
//         console.log("Invalid day")
// }


/// Ternary Operators:

day = 5

// day === 5 ? console.log("TGIF") : console.log("I miss Fridays")

//////////////////////////////


// let stat = 5

// let color = (stat === 0 ? "RED" : "GREEN")

// console.log(color)


// function fibonachi(n:number) {
//     let fibo = [0, 1]
    
//     if(n === 0) return [0]
//     if(n === 1) return [0,1]
        
//     for(let i = 2; i <= n; i++){
//         let next = fibo[i-1] + fibo[i-2]
//         fibo.push(next)
//     }
//     fibo.splice(1,1)
//     return fibo
// }

// console.log(fibonachi(10))

function add(n1:number, n2: number, showResult : boolean) {
    if (showResult) {
        console.log("If True: ", n1 + n2)
    } else {
        return n1 + n2
    }
}


let ifFalse = add(2,4.5, false)

console.log("if False: ", ifFalse)


///////////////////////////////////////////////////////////


const family = {
    father: {
        name: "Derrick",
        age: 40,
        location: "Lehi",
        state: "Utah"
    },
    mother: {
        name: "Sedina",
        age: 37,
        location: "Lehi",
        state: "Utah"
    },
    son: {
        name: "Daylan",
        age: 7,
        location: "Lehi",
        state: "Utah"
    },
    daughter: {
        name: "Hana",
        age: 5,
        location: "Lehi",
        state: "Utah"
    }
};

console.log(family.mother.name)