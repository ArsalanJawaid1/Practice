 
                    
                        // let,var and constant
// var Name = "Arsalan";

// document.write(Name + " Jawaid")
// document.write(`${Name} Jawaid`)

                    // TEMPLATE  Literals


// let Name = "sufyan";
// let Name = 'Arsalan'
// document.write(`${Name} Jawaid akhter `)
// console.log(`${Name} jawaid`)

// var Pets = document.getElementById("Get").innerHTML;
// document.getElementById('poo').innerHTML = Pets ;

// function Variable(){
//     var Get = document.getElementById('Get')
//     Get.innerHTML = "hello Kuyytt"
//     // var Name = document.createTextNode('hello world');
//     // var firstName = document.createElement('p');

// let First = document.createElement("p");
//  let firstText = document.createTextNode("Hello my name is arsalan jawaid");
//  First.appendChild(firstText);
//  document.write(First.innerHTML)
   
// }
// Variable();

// Inner = ()=> { 
    // var Person = document.createElement("div")
    // var Person_Text = document.createTextNode("Hello, How Are you doing Write now")
    // Person.appendChild(Person_Text);
    // document.body.append(Person)
//     Person.append('aheolm')
// }
// Inner()


// SPREAD OPERATORS  (Concat)

// var Student1 = ["arsalan","Sufyan"];
// var student2 = ["ali","Umer"];

// var merge = Student1.concat(student2);
// console.log(merge)


 //  OR

 //  var third = ["umer",'hasan']
//  var Student1 = ["arsalan","Sufyan"];
//  var student2 = [ ...Student1,...third,"ali","Umer"];

//  console.log(student2)

              // OBJECT DESTRUCTURING

// var student = {
//     Name: "Arsalan",
//     School: "Green Land Academy",
//     RollNo: 46922
// }

// var Teacher = {
//     Name:"kamran",
//     Gender:"Male",
//     Subject:"Math"
// }

// let {Name,Gender,Subject} = Teacher
// console.log(Name,Gender,Subject)

// console.log(Teacher.Name,Teacher.Gender)
// console.log(student.School)
 
///////// OR

// let {Name,School,RollNo} = student
 
// console.log(Name)
// console.log(School)



                   /////  ARRAY DESTRUCTURING


// let arr = ['arsalan',"ali","Sufyan"];
// console.log(arr[1])
// let Name1 = arr[0];
// let Name2 = arr[1];

// console.log(Name2);

// let [Name1,Name2] = arr;
// console.log(Name1,Name2)

// let [Name0 , Name1,] = arr;
// console.log(Name0)
// console.log(Name1)



            /////// TERNARY OPERATOR

// if(age > 10){
    //     console.log("10 is less than ")
    // }else{
        //     console.log("10 is greater than 20")
        // }


    // let age = 22;
    // var check = age < 20 ? "Arsalan is less then 20" : "Arsalan is greater than 22";
    // console.log(check) 
    // let age = 22;
    // var check = age < 20 ? "arsalan is cute" : "arsalan is very cute";
    // console.log(check) 

///// SYNCHROUNUS   ASYNCHRONUS (take a time to run the code)





////////        PROMISE

// let Firebase = new Promise(function(resolve,reject){
//     let Data = 'Known';
//      Data === 'Knxown' ? resolve ("Resolve ") : reject( "Reject");

// })

// Firebase.then(function(Para){
//     console.log(`Result is ${Para}`)
// })

// .catch(function(err){
// console.log(`Result is ${err}`)
// })
// let Firebase = new Promise(function(resolve,reject){
//     let Data = "Got Collected";
//     if(Data === "Got Collected"){
//         resolve("Data is Save")
//     }else{
//         reject("Data is Loss")
//     }
// })

// Firebase.then(function(Data){
//     console.log("Your", Data)
// })
// .catch(function(Error){
//     console.log("Your",Error)
// })




      ///// function EXPRESSION


// function foo(){
//     console.log("Hello World") 
// }
// foo();

//     OR 


//  example = function(){
//     console.log("Hello")
// }
// example()


// let foo = function(){
//     console.log("hellow World")
// }
// foo()

////      ARROW function


// arrowFunc = () =>{
//     console.log("helo");
// }
// arrowFunc()


// arrowFunc = (Name,Also) =>{
//     console.log(`Hello ${Name} ${Also}`);
// }
// arrowFunc('Arsalan', "Kesy ho");


// arrowFun = () => {
//     return 'Arsalan'
// }
// console.log (arrowFun());


//   Hello = (Friend) => console.log(`${Friend} is my best friend`)
// Hello("Huzaifa")

// returnExamp = (nam)=> {
//     return ` ${nam} arsalan`
// }
//  console.log( returnExamp("the"))


//////////// CALLBACK function

// let getData = (render_data)=>{
//     setTimeout(()=>{
//       render_data("Ghous")
//     },3000)
// }
// let render_data = (Name)=>{
//     console.log(Name)
// }

// getData(render_data)

       //// Higher order function

//  A function receive a parameter,
//and the parameter is a also a 
//function and gave an output to
// this parameter(function) known as Higher order function

   

     //////   ARRAY function (Higher 0rder function) 

 //// Filter

// let arr = [{Name: "arsalan", Age:20},{Name: "sufyan",Age:30}]
// let filter =  arr.filter((a)=>a.Age > 10)
// console.log(filter)



/////   startsWith  OR   endswith

// let Person = "Arsalan";
// let search = "A";

// if(Person.startsWith(search)){;
// console.log(Person)
// }



////    ///       Array Map

// let arr = [2,3,4,5]

// let Multiply = arr.map(a => a*2)
// console.log(Multiply)

// let arr = [{Name:"arsalan", Age:20}];
// console.log(arr)
// let update = arr.map( a =>  a.Name='Sufyan');


     /// ES6 Classes

////  Javascript Contructor Method

// function Student(name,email){
//     this.name = name;
//     this.email = email
// }
// let student1 = new Student('Ghous', "arsaljaved100@gmail,com")

                     /// ES6 classes contructor  Method 

// class Student{
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//     }
// }

// /////      This is for, 'join two contructor'


// class School extends Student{
//     constructor(name,email,school){
//         super(name,email)
//         this.school = school;
//     }
// }

// let student1 = new School ("Arsalan","arsaljaved100@gmail.com","sylani")
// console.log(student1)












