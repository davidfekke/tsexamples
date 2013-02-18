///<reference path="jquery.d.ts" />
///<reference path='jqueryui.d.ts' />

//interface
interface IAnimal {
    Name: string;
    Legs: number;
}

// Class
class Animal implements IAnimal {
    constructor(public Name: string, public Legs: number) { }

    Description(): void {
        document.write("This animals name is " + this.Name + " and it has " + this.Legs + " legs.");
    }
}

class Dog extends Animal {
    Tail: bool;

    Description(): void {
        document.write("This Dogs name is " + this.Name + " and it has " + this.Legs + " legs.");
    }
}

class Car {
    Make: string;
    Model: string;
    Seats: number;
}

class AutoDescriber {
    CurCar: Car;
    private _description: string;
    constructor(aCar: Car) {
        this.CurCar = aCar;
    }
    getDescription(): string {
        return "This car is  is a " +
            this.CurCar.Make + " " + this.CurCar.Model +
            " and seats " + this.CurCar.Seats;
    }
}

$(() => {
    var myCar: Car = <Car>{ Make: "Dodge", Model: "Charger", Seats: 5 };
    var Desc: AutoDescriber = new AutoDescriber(myCar);
    var description: string = Desc.getDescription();
    alert(description);
});