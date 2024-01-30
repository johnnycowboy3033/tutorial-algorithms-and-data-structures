export class CanvasModel {

    private _nameCanvas :string;
    private _width :number;
    private _height :number;

    public _canvas! :HTMLCanvasElement;
    public _ctx!:CanvasRenderingContext2D;

    constructor(nameCanvas: string, width:number, height:number) {
        this._nameCanvas = nameCanvas;
        this._width = width;
        this._height = height;

        this.buildCanvas();
    }

    buildCanvas(){
        this._canvas = <HTMLCanvasElement> document.getElementById(this._nameCanvas)!;

        if( typeof this._canvas === "object"){
            if(this._ctx !== null){
                this._ctx = this._canvas.getContext("2d") as CanvasRenderingContext2D;
            }
        }

        if( typeof $("#"+this._nameCanvas).attr("width") !== "undefined"){
            $("#"+this._nameCanvas).attr("width", this._width);
        }

        if( typeof $("#"+this._nameCanvas).attr("height") !== "undefined"){
             $("#"+this._nameCanvas).attr("height", this._height);
        }
    }

    get nameCanvas(): string {return this._nameCanvas;}
    set nameCanvas(value: string) {this._nameCanvas = value;}

    get width(): number {return this._width;}
    set width(value: number) {this._width = value;}

    get height(): number {return this._height;}
    set height(value: number) {this._height = value;}

    get canvas(): HTMLCanvasElement {return this._canvas;}
    set canvas(value: HTMLCanvasElement) {this._canvas = value;}

    get ctx(): CanvasRenderingContext2D {return this._ctx;}
    set ctx(value: CanvasRenderingContext2D) {this._ctx = value;}
}
