import {GraphModel} from './models/graph-model.js';
console.log('App is running!');

//To install jquery locally run "npm i --save-dev @types/jquery"

$(function(){

     let graph = new GraphModel("graph-canvas", 500, 700);

     graph.drawManyHoriRec(40, 40, [-5,2,4,6,10], 120, 120, "red");

     graph.drawHoriPointer(160, 100, "green", "Head");

     graph.drawHoriPointer(160, 500, "red", "Tail");


});
