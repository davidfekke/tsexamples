interface IAnimal {
	Name: string;
	Legs: number;
	description(): string;
}

class Dog implements IAnimal {
	Name: string;
	Legs: number;
	Tail: bool;
	
	constructor(name: string, legs: number, tail?: bool) {
		this.Name = name;
		this.Legs = legs;
		this.Tail = tail;
	}
	
	description(): string {
		return "This dogs name is " + this.Name;
	}
}

var myDog = new Dog("Rover", 4);
document.write(myDog.description());