//  var b = 10;
//  c = 50;
//  d = c + b;
// alert(d);

// PROMPT:
// is basically to get the value from user

// var a = +prompt ("Enter First Number", "First"); 
// var b = +prompt( "Enter second number", "second");
// c = a + b;
// alert(c);

// a = 20;
// b = 00;
// c = a + b;

// if (c > 30){
//     alert("You are bigg");
// }
// else if(c ==30 ){
//     alert("yor are eqaual");
// }
// else{
//     alert("yor are less");
// }

// a = +prompt("Enter yor Obtained Number" ,"Enter" );
// b = +prompt("Enter yor Total Number" ,"Enter" );
// c = a + b;
// alert (c);

// var age = +prompt("Enter your age");                                                    vaar age = 30;                                                       
// var Gender = prompt("Enter your gender");                                                 var Gender = "male";
// if( age > 18 || Gender == "male"){                                                       if (age === 30 && Gender === 'male'){}
//     alert("you are allowed")
// }
// else{
//     alert("you are not alloe")
// }

// var age = +prompt("Enter your age");
// var Gender = prompt("Enter your Gender");
// if( age == 18 || Gender == "male"){
//     if( age > 18 && Gender == "male"){ if (age > 18 || Gender = "Male"){
//         alert("Best")                      alert("Hello World")
//     }                                       }
//     else {
//         alert("not best");
//     }
// } 
// else{
//     alert("bhag")
// }


// ARRRAYSSS !!!

// var arr = ["gaous","ali", "umer"];

// document.write(arr[1]) << Ali document.write(arr[2])

// var Names = [""];
// Names[0] = "ali" name[3] = "arsa"
// Names[1] = "Ussman"
// document.write(Names)


//students.pop(); // delete the last value  
//students.push("Arsalan","Jawiad"); // add in the last

// var students = ["ali","usman","dauwod",'ARSALAN'];

// var copyStudents =students.slice(1,4); 
// document.write(copyStudents);

//students.splice(1,1,"arsalan")

//students.shift(); // removing first value
//students.unshift("Sufyan") adding in the first

// var animal = ["Cat","Dog","Goat","Lion","Tiger"];
// animal.unshift("Elephant","Ant");
// document.write(animal); 

           // LOOPSSS !!!

//for (initialization.condition,increment/ decrement){
    //}
// for ( i = 0; i > 10; i++){
    // alert(hello)
//}

// for (i = 1; i <= 10; i++){
//     document.write("2" + "x" + i + "=" + 2*i + "<br>") 
// }


//  for( i = 0; i < arr.length; i++){
    //      document.write(arr[i] + "<br>" );
    //  }
    
//     var arr = ["ali","umer","saad","Hasan"];

//     for ( i=0; i < arr.length; i++){
//    document.write (arr[i] + "<br>");
// }

// var country =  ["Karachi","lahore","islamabad","peshawar"];

// for ( var i = 0; i < country.length; i++){     for (var i = 0; i < country.length; i++){
//     if( country[i] === "peshawar" ){             if (country[i] === isalmabad){
//         alert(country[i] + " is the best city");           alert (country[i] + "is th best city")
//     }
// }

// NESTED LOOPS

// var firstNames = ["Arsalan","Sufyan","Osama","Huzaifa"];
// var lastNames = ["Jawaid"];

// for ( i = 0; i < firstNames.length; i++){
//     for( j = 0; j < lastNames.length; j++ ){
//         alert( firstNames[i] + " " + lastNames[j] );
//     }
// }

// var word = prompt("Enter your word");
// for ( i = word.length - 1; i >= 0; ){
//     document.write(word[i]);
// }
 
// var Name = "arsalan";

// name = Name.toLocaleUpperCase();
// // console.log(name);


// var word = "Apple and orange";

// console.log(word.indexOf("o"));

// var val1= prompt("Enter the first value")
// var sign= prompt("Enter the Operator value");
// var val2= prompt("Enter the Second value");

// if ( sign === "+" ){
//     alert( (+val1)+(+val2))
// }
// else if(sign === "-"){
//     alert(val1-val2)
// }
// else if (sign === "*"){
//     alert(val1*val2)
// }
// else if ( sign === "/"){ 
//     alert(val1/val2)
// } else if( sign === "%"){
//     alert(val1/val2*100 + "%")
// }

// var city = prompt("Enter your city name");
// city = city.toLowerCase();
// var arr = ["karachi","sindh", "quetta", "lahore"];

// for ( var i = 0; i< arr.length; i++){
//     if ( arr[i] === city){
//         alert( "city has found")
//     } 
//       else { alert("city was not found")}   
// }

// var city = prompt("Enter your city name");
// firstChar = city.slice(0,1);
// otherChar = city.slice(1);

// firstChar = firstChar.toUpperCase();
// otherChar = otherChar.toLowercase();

// var city = firstChar + otherChar;

// var arr = ["karachi","Lahore","Islamabad","Pindi"];

// for( i = 0; i< arr.length; i++){
//     if (city === arr[i] ){
//         alert("city was found");
//         break;
//     }
//     else alert("city was not found")
// }

// var word = "kara  chi";
// var numChar = word.length;
// for ( i = 0 ; i < numChar; i++){
//     if (word.slice(i, i + 2 ) === "  "){
//         alert("Double space was found");
//     }
// }

                   // FINDING SEGMENTS !!!!!!!!

// var text = "the New york magazine doesnot effct the people World War II. the only thing"
// var indexNum = text.indexOf("World War II");
// var firstText = text.slice(0,indexNum);
// var replacingText = "The Second World War";
// var thirdText = text.slice(indexNum+12);
// console.log( firstText + replacingText + thirdText)

// indeOf !!! Find the start value

// LastIndexof !! Find the last one

    // charAt
//  var app = "arsalan";
//  var ans = app.charAt(1)
// console.log(ans); 

     // replace

// var para = "This is text";
 
// var para1 = para.replace("text","Example");
// console.log(para1)

// replace / /g

  
// var para = "this is text , this is another text"
// var para1 = para.replace(/text/g,"Example");
// console.log(para1)

// Math.round(3.5) << 4 ans Near one
// Math.ceil(3.2) << 4 ans  Forward
// Math.floor(3.7) << 3 ans  back

// parseInt() convrtng into string
// number () into nunber
// tofixed(3) into 0.789998 << 0.789

// var dayNames = ["Sunday", "Monday","tuesday","Wednesday"];
// var now = new Date();
// var todayDay = now.getDay();
// var nameOfToday = dayNames(todayDay);
// console.log(nameOfToday)

// var dob = new Date(prompt("Enter your DateOf Birth","Dec 1, 2000"));
// var dobmilli = dob.getTime();
// var today = new Date();
// var todaymilli = today.getTime();
// var diff = todaymilli - dobmilli;
// var accage = math.floor(diff/ 1000*60);
// document.write(accage); 

               // FUNCTION

// function first(){
//     alert("hello World!");
// }
// first();
// first();
// first();
// first();  five time run

// function first(call){
//     return (call);
// }
//  var a = first("Jello")
//  console.log(a)

// function Let(a,b){
//     alert(a);
//     alert(b)
// }
// Let(6,5);

// function first(a,b){
//     return 'HELLO'
// }
// console.log(first(8,7));

// function calc (num1,opr,num2){
//     if(opr === "+"){
//        return num1 + num2
//     }
//     else if( opr === "-"){
//         return num1 - num2
//     }
//     else {
//         return "Incorrect Operator"
//     }

// }

// var result = calc(8,"+",6);
// var result1 = calc(8,"-",6);
// var result2 = calc(8,"$",6);
// console.log(result,result1,result2);

  /// OR

// console.log(calc(8, "+", 6), calc(7,"-",2) );


// var a = "Arsalan";
// function Name(){
//  return "Ali"
// }
// console.log( Name());
 
    // SWITCH CASE!!!!!
// var Person = "Arsalan";
// switch (Person){
//     case "Arsalan" :
//         console.log("hello");
//         case "Sufyan" :
//             console.log("Hello Sufi");
//             break;
//             default :
//             console.log("Hello Everyone");
// }

// function Practice(a){
    
//     alert(a);
// }

// function foo(){
//     var a = document.getElementById("name")
//     alert(a.value);

//     a.value = ""
// }

// function setName(){
//     var a = document.getElementById("name");
//     a.value = "Arsalan"
//     var b = document.getElementById("para")
//     b.innerHTML = "Hello";
// }
    
    // var para = document.getElementById("para")
    // para.innerHTML = "hello"
//  setName()

// function big(){
// var a = '<div> <p> Hello </p></div>'; /////// We can also used html and css in java
// var b = document.getElementById("para");
// b.innerHTML = a;
// }
//  big()

// function Delete(){
//     var img = document.getElementById('img');
//     img.className += ' hidden' ////// for both classes
// }

// function changeImage(){
//     var carImage = document.getElementById('img'); var carImage = document.getElementbyId('img');
//      carImage.src = ""
//     carImage.src = 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
// }
    // function changeImage2(){
  //     var a = document.getElementById('img');
  //     a.src = "https://image.shutterstock.com/image-illustration/modern-cars-studio-room-3d-260nw-735402217.jpg"
   // }
                ////  OR

// function changeImage(id,src){
//     var image = document.getElementById(id);
//     image.src = src;
// }

// function changeImage(id,ref){
//     var image = document.getElementById(id);
//     image.src = ref;
// }

// function changeClass(){
//     var para = document.getElementById('para');
//     para.className = 'blue'
// }

// function applycss(){
//     var para = document.getElementsByTagName('p'); var para = document.getelemntbyid('para')
//     para.style.fontSize = '2em';
//  var par = document.get elemnetbyid("para");
/// para.style.fontSize = '2em'
// }
// applycss()

     // setInterval() // it takes 2 value one is function and other one is time in second
 
        // function timer(){    function timer(){
// console.log('hello')       console.log(''Heloo')
// }                              }
// setInterval(timer,2000)      setinterval(timer,2000)

// function timeout(){
//     console.log('stop')
// }


// setTimeout(timeout,2000)

// var count = 0;
// var interval;
// function timer(){   Function timer(){
//     console.log(count) console.log(count)
//     count++;                count++;
// }                                    }
// interval = setInterval(timer,1000);     interval = setinterval(timer,3000)

// function setTime(){            function setTime(){
//     clearInterval(interval)             clearInterval(interval)
// }
//  setTimeout(setTime,6000);            setTimeout(setTime,2000)



////////// DOM (Document Object Model)

// var para1 = document.getElementById("para3");
// para1.innerHTML = 'Hello arsalan';


// var input = document.getElementById('input');
// input.value = "hello"
// var d = document.getElementById("div");
// var p = document.getElementsByTagName("p");
// p[2].innerHTML = "my name is arsalan and my father name is jawaid"

// function readMore(){
//     var a = document.getElementById('para1').innerHTML;
//     var b = document.getElementById('para');
//     b.innerHTML = a;
// }


// function readMore(){
//     var para1 = document.getElementById('para1').innerHTML;
//     var para2 = document.getElementById('para2');
//     para2.innerHTML = para1;
    
// }

//  console.log (document.childNodes[1].childNodes[2].childNodes[1].lastChild);

// var get = document.getElementsByTagName('li');
// console.log(get.length);



// var para = document.getElementById('para');
// console.log( para.attributes[2].nodeValue);
  //hasattribute
// setattribute;
// getattribute;

// var get =document.getElementById('Para1')
// get.getAttribute('class')
// console.log(get)

// var p2 = document.createElement('h1');
// var p = document.createElement('p');
// var input = document.createElement('input');
// var text = document.createTextNode('hello World');
// var text2 = document.createTextNode('Arsalan name is');
// p2.appendChild(text2)
// p.appendChild(text)

// var div = document.getElementById('main')
// div.appendChild(p2)
// div.appendChild(p)

// var firstPara = document.createElement('h1');
// var secondPara = document.createElement('p');
// var firstText = document.createTextNode('DOM');
// var secondText = document.createTextNode('This is very important Chapter');
// firstPara.appendChild(firstText);
// secondPara.appendChild(secondText);

// var createDiv = document.createElement('div');
// createDiv.appendChild(firstPara);
// createDiv.appendChild(secondPara);
// createDiv.insertBefore(firstPara,secondPara)
// console.log(createDiv)


// function sendMessage(){
// var div = document.getElementById('main');
// var val = document.getElementById('val');
// var p = document.createElement('p');
// var text = document.createTextNode(val.value);
// p.appendChild(text)
// div.appendChild(p);
// val.value = ""
// }


    /// OBJECT 

// Names = {
//     abc : 'Arsal',
//     xyz : 'sufi',
// };

// let {abc,xyz} = Names

// console.log(abc)

// var checkVar = "abc" in Names;
// console.log(checkVar)    ///// Answer is True


// for(var checkAllvar in Names){
// console.log(checkAllvar);  //// Answer is abc and xyz
// }
// for(var checkAllvar in Names){
// console.log( checkAllvar, Names[checkAllvar]);  //// Answer is arsal and sufi
 // for both

// var Person = {
//     Firstname : 'Arsalan',
//     LastName : 'jawaid',
//     Man : {
//         names: 'Saamiya',
//     }
// };

// console.log(this.Person.Man)
// console.log(Person)
////


// function colorChange(){
// var head = document.getElementById('div').querySelectorAll("hello");

// head[0].style.backgroundColor ='pink'
// }
// var arr = ["Karachi","Lahore","Islamabad","Faisalabad"];

// for (i = 0; i >=5; i++){

