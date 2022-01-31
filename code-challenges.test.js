// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest
// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest



// describe("areYouHungry", () => {
//   it("returns eat food or keep working based on input", () => {
//     expect(areYouHungry("yes")).toEqual("eat food")
//     expect(areYouHungry("no")).toEqual("keep working")
//   })
// })

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("occuPerson", () => {

  const people = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" }
  ]
  let output= ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {

    expect(occuPerson(people)).toEqual(output)
  
  })
})

// const people = [
//   { name: "ford prefect", occupation: "a hitchhiker" },
//   { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
//   { name: "arthur dent", occupation: "a radio employee" }
// ]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
// b) Create the function that makes the test pass.


// ReferenceError: occuPerson is not defined
// We have an array of objects each object key value pair
// My output is an array with with strings,
// first letter in the name must be capitalized.
    //start by using high order function and look at the value and index

const occuPerson = array=>{
  endGame = []
  array.forEach(value =>{  
    //find a way to separate the first name and last name
    let lName = value.name.charAt(value.name.indexOf(' ')+1).toUpperCase() + value.name.substring(value.name.indexOf(' ')+2)

    let wholeName = (value.name.charAt(0).toUpperCase() + value.name.substring(1,(value.name.indexOf(' '))) +" "+ lName)

    endGame.push(`${wholeName} is ${value.occupation}.`)
  })
  return endGame
}



















// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("justNums", () => {
  const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
  let output1= [ 2, 0, -1, 0 ]
  const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
  let output2= [ 2, 1, -1 ]
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    expect(justNums(hodgepodge1)).toEqual(output1)
    expect(justNums(hodgepodge2)).toEqual(output2)
  })
})

// const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// // Expected output: [ 2, 0, -1, 0 ]
// const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// // Expected output: [ 2, 1, -1 ]


// b) Create the function that makes the test pass.
// first we need to seperate just the numbers and push them to their own array...
// second we will need to use the module to get the remainder of the  
      //how are we going to get the remainder only?

const justNums = (array) => {
  numsDiv3=[]
  array.filter(value =>{
    if (typeof value === "number")
    numsDiv3.push(value%3)
  })
return numsDiv3
}
















// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.
describe("cubedSum", () => {
  const cubeAndSum1 = [2, 3, 4]
  let output1= 99
  const cubeAndSum2 = [0, 5, 10]
  let output2= 1125
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    expect(cubedSum(cubeAndSum1)).toEqual(output1)
    expect(cubedSum(cubeAndSum2)).toEqual(output2)
  })
})

// a) Create a test with an expect statement using the variables provided.
// const cubeAndSum1 = [2, 3, 4]
// // Expected output: 99
// const cubeAndSum2 = [0, 5, 10]
// // Expected output: 1125


// b) Create the function that makes the test pass.

// The first thing will to get each number at its index and cube it     **3
//after they are cubed push into a new array.
// sum the new array and return the number out of an array....
//this is not ruby so I might have to forLoop to add the number back up...
// const cubedSum = (array)=>{

const cubedSum = (array)=>{
  temp=[]

  // try math.sum(args)
  for (let i = 0; i < array.length; i++) {
      temp.push((array[i]**3))  
    }
  return temp.reduce((previousValue, currentValue) => {return previousValue + currentValue})
}