// const API_USER = "https://random.com";
// const API_USER_POST = "https://jsonplaceholder.typicode.com/posts";
// const API_COMMENT = "https://jsonplaceholder.typicode.com/comments";


// const user = fetch(API_USER);

// const post = fetch(API_USER_POST);

// const comment = fetch(API_COMMENT);

// Promise.any([user,post,comment]).then( (data)=>{
       
//     console.log(data);
// }).catch((err) => {
//     console.log(err)
// })


// async function fetchUsers(){
//  await fetch(API_USER).then( async function(data){
//     const json_value = await data.json();
//     console.log(json_value);
//    return await fetch(API_USER_POST);
// }).then(async function(data){
//     const json_value = await data.json();
//     console.log(json_value);
//     return await fetch(API_COMMENT);
// }).then(async function(data){
//     const json_value = await data.json();
//     console.log(json_value);
// })

// }

// fetchUsers()

//console.log(a);  //undefined
//console.log(b) //reference error: can't access 'b' before initialization
//console.log(c) //reference error: can't access 'c' before initialization
//var a = 10; // this is stored global storage
//let b; // this is stored separate storage
//console.log(b) //undefined
//b = 20;
//let b = 20 //syntax error: identifier 'b' has been already declared
//const c  = 30;  // this is stored separate storage
//const d; // syntax error: missing initializer const declaration
//const c =25 //syntax error: identifier 'c' has been already declared
   // c = 25; // Typeerror: Assignment to constant variable

//Block
// {
//     var a = 20 //shadow
//     let b = 30
//     const c = 40;
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }

// function test() {
//     var a = 22;
//     let b = 44;
//     const c = 33;
//     test2();
//     function test2() {
//         test3();
//        function test3() {
//             console.log(a)
//             console.log(b)
//             console.log(c)
//        }
//     }
// }
// test();

// for(var i =1; i<=5; i++){
//     function close(x){
//         setTimeout(function(){
//             console.log(x);
//         },x*1000)
//     }
//     close(i);    
// }

// function outest(){
//     var c = 20
//     function outer(b) {    
//         function inner(){
//             console.log(a, b,c)
//         }
//         //let a = 10;
//         return inner;
//     }
//     return outer;
// }
// let a = 100;


// var close = (outest())("hellow world");
// close()

//****Advantages of closure ****
//*** Data Hiding****

// function counter(){
//     var count = 0;
//     return function incrementCounter(){
//         count++
//         console.log(count);
//     }
// }
// var counter1 = counter();
// counter1();
// counter1();
// counter1();

// var counter2 = counter();
// counter2();
// counter2();
// counter2();
// counter2();
// counter2();

//*** construct function use for increment and decrement */
// function Counter() {
//     var count = 0;
//     var c = 10;
//      this.incrementCounter = function (){
//         count++;
//         console.log(count);
//     }
//      this.decrementCounter = function (){
//         count--;
//         console.log(count);
//     }
// }

// var counter = new Counter();

// counter.incrementCounter();
// counter.incrementCounter();
// counter.incrementCounter();

// //decrment
// counter.decrementCounter();
// counter.decrementCounter();


// b();
// var b = function () {
//     console.log("b called");
// }

/****Asynronus Javascript and Event Loop */

// console.log('start');
// setTimeout(function db(){
//     console.log('call back')
// }, 5000);
// console.log('end');

// let startDate = new Date().getTime();
// let endDate = startDate;
// while(endDate <= startDate + 10000){
//     endDate = new Date().getTime();
// }

// console.log("Date expired");

/***High order function */

// const radius = [3,2,1,4];
// //const a= 10;
// const area = function(r){
//     return Math.PI * r * r
// }

// const circumference = function(r){
//     return 2 * Math.PI * r;
// }

// const diameter = function(r){
//     return 2 * r;
// }
 

// function calculate(logic) {
//     const output = [];
//     const a =10;
//     for (let i=0; i<radius.length; i++){
//         output.push(logic(radius[i]))
        
//     }
//     return output;
// }

// console.log(calculate(area));

// console.log(calculate(circumference));
// console.log(calculate(diameter));

/****** map(), filter(), reduce() */
//map
//Transformation array using map
//const arr = [5,1,3,2,6];
//Double    
// function double(i){
//     return i*2;
// }
// const output = arr.map(double);
// console.log(output);

//Trible
// function trible(i){
//     return i*3;
// }

// const output = arr.map(trible);
// console.log(output);

//Binary
// function binary(i){
//     return i.toString(2);
// }
// const output = arr.map(binary);
// console.log(output)

// const output = arr.map((x) => x.toString(2));
// console.log(output)

//filter()
//const arr = [5,1,3,2,6];
// function isOdd(i){
//     return i%2;
// }
// const output = arr.filter(isOdd)
// console.log(output);

// function  isEven(i){
//     return i%2 === 0;
// }
// const output = arr.filter(isEven);
// console.log(output);

// function greaterThan4(i){
//     return i > 4
// }

// const output = arr.filter(greaterThan4);

// console.log(output);

//Reducer()
//const arr = [5,1,3,2,6];
//sum
// function findSum(arr){
//     let sum = 0;
//     for(let i=0; i<arr.length; i++){
//         sum = sum+arr[i]
//     }
//     return sum;
// }

// console.log(findSum(arr));

// const output = arr.reduce(function(acc,curr){
//     acc= acc +curr;
//     return acc;
// },0)

// console.log(output);
//Find Maximum value in the array

// function findMax(arr){
//     let max = 0;
//     for(let i=0; i<arr.length; i++){
//         if(max <arr[i]){
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(findMax(arr));

// const output = arr.reduce(function(max,curr){
//     if( max < curr) max = curr;
//     return max
// },0)
//console.log(output);
/*** Another Example for map() */
// const users = [
//     {firstName:"Rajesh", lastName:"Kumar",age:"32"},
//     {firstName:"Vijay", lastName:"Prakash",age:"29"},
//     {firstName:"Surya", lastName:"Kumar",age:"32"},
//     {firstName:"Chandra", lastName:"Sekar",age:"29"},
//     {firstName:"Santhosh", lastName:"Kumar",age:"27"}
// ]
//Fetch firstname lastname
// const output = users.map( (x) => x.firstName +" "+x.lastName)
// console.log(output);
// Fetch count based on age
//output is object {32:2,29:2,27:1}

// function basedOnAge(users) {
//     const result = {};
//     for(let i=0; i<users.length; i++){
//         if(result[users[i].age] ){
//             result[users[i].age] = ++result[users[i].age];
//         }else {          
//            result[users[i].age]=1 
//             //result.users[i].age = 1;
//         }
//     }
//     return result;
// }
// console.log(basedOnAge(users));

// const output = users.reduce(function(acc,curr){

//     if(acc[curr.age]){
//         acc[curr.age] = ++acc[curr.age];
//     }else {
//         acc[curr.age] = 1;
//     }
//     return acc;

// },{})

// console.log(output)

//fetch firstname of all the users age less than 30

// const output = users.filter((x) => x.age < 30).map((x) => x.firstName);
// console.log(output);

// const output = users.reduce(function(acc,curr){
//     if(curr.age < 30){       
//        acc.push(curr.firstName)
//     }
//     return acc;
// },[])
// console.log(output);

/****** Callback hell and inversion of control*/

// const cart = ["shoe","pant","shirt"];

// api.createOrder(cart,function(){
//     api.proceedToPayment(function(){
//         api.ShowOrderSummary(function(){
//             api.updateWallet()
//         })
//     })
// })

/***** Promise callback function */
// createOrder(cart)
// .then(function(orderId){
//    return proceedToPayment(orderID)
// })
// .then(function(paymentInfo){
//    return showOrderSummary(paymentInfo)
// })
// then(function(paymentInfo){
//    return updateWallet()
// })

// const cart = ["shoes","pants","shirts"];

// createOrder(cart)
// .then(function(orderId){
//     console.log(orderId);
//    return proceedToPayment(orderId);
// }).then(function(paymentInfo){
//     console.log(paymentInfo)
//     return showOrderSummary(paymentInfo)
// }).then(function(orderSummary){
//     console.log(orderSummary);
//     return updateWallet(orderSummary)
// }).then(function(status){
//     console.log(status);
// })
// .catch((err)=>{
//     console.log(err.message);
// })

// function createOrder(cart){
//     const pr= new Promise(function(resolve,reject){
//                 if(!validationCart()){
//                     const err = new Error('Cart is not valid')
//                     reject(err);
//                 }
//                 //Create oreder
//                 const orderId = "2131123";
//                 setTimeout(function(){
//                     resolve(orderId);
//                 },5000)
                
//             })
//     return pr;
// }

// function proceedToPayment(orderId){
//     return new Promise(function(resolve,reject){
//         resolve('payment success')
//     })
// }

// function showOrderSummary(paymentinfo){
//     return new Promise(function(resolve,reject){
//         resolve('order summary')
//     })
// }

// function updateWallet(orderSummary){
//     return new Promise(function(resolve,reject){
//         resolve('wallet updated')
//     })
// }


// function validationCart(){
//     return true;
// }

/******** this keyword */
    // "use strict"
    // //this keyword in global space
    // console.log(this); // return  global object
    // //javascript runtime environment
    // //inside the browser global object is different value is window
    // //inside the node js global object is different value is global

    // //this inside a function

    // function x(){
    //     //the value depends on strict and non strict mode
    //     console.log(this)
    // }


    // //this keyword inside non-strict mode - (this substitution) -> if the value of this keyword undefined or null
    // //this keyword will be  replaced with globalObject only in non strict mode

    // //this keyword value depends on how the function is called
    // x(); //return undefined strict mode -> 
    // window.x() // return global object

    // const obj ={
    //     a:10,
    //     x:function(){
    //         console.log(this) // reference this object because obj.function called
    //     }
    // }

    // obj.x();

    // //call, apply, bind methods (sharing method)

    // const student ={
    //     name:"Rajesh",
    //     printName:function(){
    //         console.log(this.name) // reference this object because obj.function called
    //     }
    // }
    // student.printName(); 
    // const student2 ={
    //     name:"Balaji",
    // }
    // student.printName.call(student2);

    // //this keyword inside arrow function
    // //arrow function don't provide their own this binding(this retains the this value of the enclosing lexical context)

    // const obj2 = {
    //     a:10,
    //     x:
    //     function () {
    //     const y =  () => {
    //             console.log(this)
    //         }
    //         y();
    //     }
    
    // }

    // obj2.x();

/****** call(), apply() and bind() method */
//call()

// const name= {
//     firstName:"Rajesh",
//     lastName:"Kumar",
//     printFullName: function(hometown){
//         console.log(this.firstName+" "+this.lastName + " from "+hometown)
//     }
// }
// const name2 = {
//     firstName:"Santhosh",
//     lastName:"Kumar"
// }
// //apply() method
// // bind()

// const objectname = name.printFullName.bind(name2,"test");
// console.log(objectname);

/**** Function currying() */

//Bind() method
// let multiply = function(x,y){
//     console.log(x*y);
// }

// const multiplyTwo = multiply.bind('',2);

// multiplyTwo(10);

// const multiplyThree= multiply.bind('',3);

// multiplyThree(10);

//Closure method
// let multiply = function(x){

//     return function(y){
//         console.log(x*y);
//     }
// }

// const multiplyTwo = multiply(2);
// multiplyTwo(10);

// const multiplyThree = multiply(3);
// multiplyThree(3);

/**** composed function */
// function add(a){
//     return a+5;
//   }
  
//   function multiply(b){
//     return b*2;
//   }
  
//   const result = multiply(add(3));
//   console.log(result);
  
  //add function output pass in multiply function and return the final result this is composed fuuction


/*** concat() method */

const arr1 = ['a','b','c','d'];
const arr2 = ['e','f','g','h'];

const arr3 = arr1.concat(arr2);
console.log(arr3);