
abstract class baseObject {
    constructor(public width:number, public length:number){
    }  
    abstract calcSize(): number;
}

class Rectangle extends baseObject {
    calcSize(): number {
        return this.width * this.length;
    }
}

var rectangle = new Rectangle(5,2);

console.log(rectangle.calcSize());
console.log("===============================================");

