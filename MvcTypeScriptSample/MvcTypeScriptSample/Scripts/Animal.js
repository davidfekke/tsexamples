var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Animal = (function () {
    function Animal(Name, Legs) {
        this.Name = Name;
        this.Legs = Legs;
    }
    Animal.prototype.Description = function () {
        document.write("This animals name is " + this.Name + " and it has " + this.Legs + " legs.");
    };
    return Animal;
})();
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        _super.apply(this, arguments);

    }
    Dog.prototype.Description = function () {
        document.write("This Dogs name is " + this.Name + " and it has " + this.Legs + " legs.");
    };
    return Dog;
})(Animal);
var Car = (function () {
    function Car() { }
    return Car;
})();
var AutoDescriber = (function () {
    function AutoDescriber(aCar) {
        this.CurCar = aCar;
    }
    AutoDescriber.prototype.getDescription = function () {
        return "This car is  is a " + this.CurCar.Make + " " + this.CurCar.Model + " and seats " + this.CurCar.Seats;
    };
    return AutoDescriber;
})();
$(function () {
    var myCar = {
        Make: "Dodge",
        Model: "Charger",
        Seats: 5
    };
    var Desc = new AutoDescriber(myCar);
    var description = Desc.getDescription();
    alert(description);
});
