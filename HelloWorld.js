var HelloWorld = (function () {
    function HelloWorld() { }
    HelloWorld.prototype.speak = function () {
        console.log("Hello World!");
    };
    return HelloWorld;
})();
var myObject = new HelloWorld();
myObject.speak();
