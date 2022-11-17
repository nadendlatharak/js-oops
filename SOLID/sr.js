// car obj
// car properties and a getter and setter

// class is a blueprint
// object is what exactly works

class Car{
    constructor(num,color, chesisNum){
        this.number = num;
        this.color = color;
        this.chesis = chesisNum;        // model----- data  resp1
    }

    getcar(){
        return {
            number: this.number,
            color: this.color,
            chesis: this.chesis         // action performance resp 2
        }
    }

    modifyCar(){
        let theCAr = this.getcar();
        //changes/
    }
}

let c = new Car(232,'red',090909090);

console.log(c.getcar())

//Robert C. Martin

class Car{
    constructor(num,color, chesisNum){
        this.number = num;
        this.color = color;
        this.chesis = chesisNum;        // model----- data  resp1
    }
}

class ExtendedCarProp extends Car{
    constructor(num,color, chesisNum){
        super(num,color, chesisNum);
        this.extProp = "this is extended"; // model---- data resp1
    }
}


class CarAction extends Car{
    getCar(){
            return {
                number: this.number,
                color: this.color,
                chesis: this.chesis         // action performance resp 2
            }
    }
}

class ModifyCarAction{
    constructor(carObj){
        this.carObj = carObj;
    }
    modify(){
        //modification
    }
}

let ma = new ModifyCarAction(new Car(979,'yii',8989));
