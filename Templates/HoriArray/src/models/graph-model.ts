import {CanvasModel} from './canvas-model.js';

export class GraphModel extends CanvasModel {


    private _xRec:number = 0;
    private _yRec:number = 0;
    private _elementRec:number[] = [];
    private _widthRec:number = 0;
    private _heightRec:number = 0;
    private _colorRec:string = "";

    constructor(nameCanvas: string, width:number, height:number) {
        super(nameCanvas, width, height);
    }


    get xRec(): number {return this._xRec;}
    set xRec(value: number) {this._xRec = value;}

    get yRec(): number {return this._yRec;}
    set yRec(value: number) {this._yRec = value;}

    get elementRec(): number[] {return this._elementRec;}
    set elementRec(value: number[]) {this._elementRec = value;}

    get widthRec(): number {return this._widthRec;}
    set widthRec(value: number) {this._widthRec = value;}

    get heightRec(): number {return this._heightRec;}
    set heightRec(value: number) {this._heightRec = value;}

    get colorRec(): string {return this._colorRec;}
    set colorRec(value: string) {this._colorRec = value;}

    drawManyHoriRec(x:number, y:number, element:number[], width:number, height:number, color:string) {

        this._xRec = x;
        this._yRec = y;
        this._elementRec = element;
        this._widthRec = width;
        this._heightRec= height;
        this._colorRec = color;

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


    drawHoriPointer(index:number,color:string,label?:string){

        let x = this._xRec + this._widthRec;
        let y = this._yRec + (index * this._heightRec) + (this._heightRec/2);

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
