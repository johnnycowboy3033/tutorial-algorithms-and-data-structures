import {CanvasModel} from './canvas-model.js';

export class GraphModel extends CanvasModel {
    constructor(nameCanvas: string, width:number, height:number) {
        super(nameCanvas, width, height);
    }

    drawManyHoriRec(x:number, y:number, element:number[], width:number, height:number, color:string) {

        let yOffset = y;

        for (let i = 0; i < element.length; i++) {
            this._ctx.beginPath();
            this._ctx.lineWidth = 2;
            this._ctx.strokeStyle = color;
            this._ctx.rect(x, yOffset, width, height);
            this._ctx.stroke();

            this._ctx.font = "30px Arial";
            this._ctx.fillText(""+element[i]+"", x + width/3, yOffset+ width/3);

            this._ctx.font = "30px Arial";
            this._ctx.fillText("["+i+"]", x + (2 * width)/3, yOffset+ (2 * width)/3);

            yOffset += height;
        }
    }


    drawHoriPointer(x:number,y:number,color:string,label?:string){

        // the triangle
        this._ctx.beginPath();
        this._ctx.moveTo(x, y);
        this._ctx.lineTo(x + 50, y + 10);
        this._ctx.lineTo(x + 50, y - 10);
        this._ctx.closePath();

        this._ctx.fillStyle = color;
        this._ctx.fill();

        //Line
        this.ctx.beginPath();
        this.ctx.moveTo(x + 50, y);
        this. ctx.lineTo(x+ 150, y);
        this.ctx.lineWidth = 5;

        this._ctx.strokeStyle = color;
        this. ctx.stroke();

        //Label
        if(typeof label !== "undefined"){
            this._ctx.font = "30px Arial";
            this._ctx.fillText(label, x + 160 , y);
        }



    }







}
