import {GraphModel} from './models/graph-model.js';
console.log('App is running!');

//To install jquery locally run "npm i --save-dev @types/jquery"

$(function(){

     let setMessage = function(message:string){
          $("#message").text(message);
     }


     let setArrows = function(){
          graph.drawHoriPointer(head, "green", "Head");
          graph.drawHoriPointer(tail, "red", "Tail");
          graph.drawHoriPointer(mid, "purple", "Middle");
          console.log("Head: " + head +" Tail: "+ tail +" Middle: "+ mid);
     }

     let createArray = function(){

          target= $("#target").val();
          console.log("Target: " + target);

          initArray= $("#initArray").val();
          initArray = JSON.parse(initArray);
          console.log("Array: [" + initArray + "]");

          heightCanvas = 80 + initArray.length * 120;

          graph = new GraphModel("graph-canvas", 500, heightCanvas);
          graph.drawManyHoriRec(40, 40, initArray, 120, 120, "brown");

     };

     let target: any | undefined = 0;
     let initArray: any | undefined = [];
     let heightCanvas:number = 0;
     let graph = new GraphModel("graph-canvas", 500, 500);

     createArray();

     setMessage("Welcome to Binary Search Application!");


     let head:number = 0;
     let tail:number =0;
     let mid:number = 0;

     tail = graph.elementRec.length -1;
     mid = head + Math.floor((tail - head)/2);

     setArrows();

     $('#submit').on('click' , function(){

          createArray();

          tail = graph.elementRec.length -1;
          mid = head + Math.floor((tail - head)/2);

          setArrows();

     });


     $('#next').on('click' , function(){

          createArray();


          setArrows();
     });



});
