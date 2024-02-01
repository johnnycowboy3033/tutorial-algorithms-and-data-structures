import {GraphModel} from './models/graph-model.js';
console.log('App is running!');

//To install jquery locally run "npm i --save-dev @types/jquery"

$(function(){

     let initArray: any | undefined = [];
     let heightCanvas:number = 0;
     let graph = new GraphModel("graph-canvas", 500, 500);

     let setMessage = function(message:string){
          $("#message").text(message);
     }

     let setArrows = function(){

          for( let i = 0; i < initArray.length; i++){
               graph.drawHoriPointer(i, "green", ""+ i + "");
          }

          
     };

     let createArray = function(){

          initArray= $("#initArray").val();
          initArray = JSON.parse(initArray);
          console.log("Array: [" + initArray + "]");

          heightCanvas = 80 + initArray.length * 120;

          graph = new GraphModel("graph-canvas", 500, heightCanvas);
          graph.drawManyHoriRec(40, 40, initArray, 120, 120, "brown");

     };

     createArray();
     setArrows();
     setMessage("Welcome to Application!");


     $('#submit').on('click' , function(){

          createArray();
          setArrows();

     });

     $('#next').on('click' , function(){

          setMessage("The Next Button was clicked!");

 
     });



});
