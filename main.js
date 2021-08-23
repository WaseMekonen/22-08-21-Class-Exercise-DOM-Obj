// Exercise 1:

// var messions = [
//   {
//     name: "homeWork",
//     isCompleted: false,
//   },
//   {
//     name: "cleanHouse",
//     isCompleted: true,
//   },
//   {
//     name: "driveLicense",
//     isCompleted: false,
//   },
//   {
//     name: "cooking",
//     isCompleted: true,
//   },
//   {
//     name: "shoping",
//     isCompleted: false,
//   },
// ];

// // A:

// var listOfMissions = document.getElementById("listOfMissions");

// for (let i = 0; i < messions.length; i++) {
//   document.write(`<p class="redBg">${messions[i].name}</p> <br>`);
// }

// // B:
// var button1 = document.getElementById("button1");
// var input1 = document.getElementById("input1");

// button1.addEventListener("click", function () {
//   var newObj = { name: input1.value, isCompleted: false };
//   // C:
//   messions.push(newObj);
//   // D:
//   listOfMissions.innerHTML += `${newObj.name}`;
// });

// // E:
// var redBg = document.getElementsByClassName("redBg");
// for (let i = 0; i < messions.length; i++) {
//   messions[i].id = Math.floor(Math.random() * 2000 + 1);
//   // F:
//   if (messions[i].isCompleted == true) {
//     redBg[i].style.background = "red";
//   }
// }

// Exercise 2:

// var movies = [
//   {
//     name:"City of God",
//     actor:"Alexandre Rodrigues",
//     img:"https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
//   },
//   {
//     name:"Gladiator",
//     actor:"Russell Crowe",
//     img:"https://i.pinimg.com/originals/46/a3/39/46a339ce62f36d331d3484f6dff97630.jpg"
//   },
//   {
//     name:"The Shawshank Redemption",
//     actor:"Morgan Freeman",
//     img:"https://ae01.alicdn.com/kf/HTB1mWWMXuGSBuNjSspbq6AiipXaH/The-Shawshank-Redemption-Retro-Vintage-Classic-Movie-Poster-Canvas-Painting-Wall-Sticker-Home-Art-Home-Decoration.jpg"
//   }
// ];


// for(var i=0; i < movies.length; i++){
//   document.write(`<h1>${movies[i].name}</h1>`);
//   document.write(`<h2>${movies[i].actor}</h2>`);
//   document.write(`<img src="${movies[i].img}"</img>`);
// }


// Exercise 3:
// var input2= document.getElementById("input2");
// var button2 = document.getElementById("button2");
// var countainer = document.getElementById("countainer");

// button2.onclick=function(){
//    // document.write(`<h1>${input2.value}</h1>`);
//    countainer.innerHTML+=input2.value;
// };

// Exercise 4: //

// var btn = document.getElementById("btn1");
// var input1 = document.getElementById("inp1");
// var input2 = document.getElementById("inp2");

// var newObj=[];

// btn.onclick=function(){
//    newObj.push({input1:input1.value, input2:input2.value});
   
// }

// Exercise 5: //

// var nameInput=document.getElementById("fName");
// var mailInput=document.getElementById("uMail");
// var ageInput=document.getElementById("uAge");
// var sendButton=document.getElementById("userFormBtn");
// var objCountainer = document.getElementById("objCon");

// var newObj = [];

// sendButton.onclick = function(){
//    newObj.push({name:nameInput.value, mail:mailInput.value, age:ageInput.value,});
//    for(var i=0; i<newObj.length; i++){
//       objCountainer.innerHTML=`name:${newObj[i].name} mail:${newObj[i].mail} age:${newObj[i].age}`
//    }
// }


// Exercise 6: //

// var firstName =document.getElementById("fName");
// var lastName =document.getElementById("lName");
// var button=document.getElementById("btn6");

// var person=[];

// button.onclick=function(){
//    person.push({name:firstName.value,lastName:lastName.value});
// };

// Exercise 7: //

// var container=document.getElementById("con7");

// for(var i=0; i<10; i++){
//    container.innerHTML+=`<p>${i}<p>`; 
// }

// Exercise 8: //

// var userMail = document.getElementById("userMail");
// var checkBtn = document.getElementById("btn6");
// var container = document.getElementById("div8"); 

// var mailArr = ["errd@gam.com","ersk@add.com","weaa@gmail.com","opsd@sda.com"];

// checkBtn.onclick=function(){
//    for(var i=0; i<mailArr.length; i++){
//       if(userMail.value == mailArr[i]){
//          container.innerHTML+=`<p>mail is exist</p>`
//          break;
//       }
//       else{
//          container.innerHTML+=`<p>mail is not exist</p>`
//          break;
//       }

//    }
// }

// Exercise 9: //

// var userInput =document.getElementById("input9");
// var button = document.getElementById("btn9");
// var container =document.getElementById("div9");

// button.onclick=function(){
//    container.innerHTML+=`<p>string:${userInput.value} length:${userInput.value.length}</p>`
// }

// Exercise 10: //
// var fullName = document.getElementById("fullname");
// var country = document.getElementById("country");
// var flag = document.getElementById("flagImg");
// var age = document.getElementById("age10");
// var button =document.getElementById("btn10");
// var container =document.getElementById("con10");

// button.onclick=function(){
//    var person={fullname:fullName.value,country:country.value,flag:flag.value,age:age.value};
//    // for(var i=0;i<person.length; i++){
//       container.innerHTML+=(`<p> <h1>${person.fullname}</h1> <h2>${person.country}</h2> <img src="${person.flag}"> <h2>${person.age}</h2> </p>`);
//    // }
// }





























