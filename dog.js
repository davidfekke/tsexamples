var Dog = (function () {
    function Dog(name, legs, tail) {
        this.Name = name;
        this.Legs = legs;
        this.Tail = tail;
    }
    Dog.prototype.description = function () {
        return "This dogs name is " + this.Name;
    };
    return Dog;
})();
var myDog = new Dog("Rover", 4);
document.write(myDog.description());
