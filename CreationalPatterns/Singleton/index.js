"use strict";
var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        if (this.instance === null) {
            this.instance = new Singleton();
        }
        return this.instance;
    };
    return Singleton;
}());
var instance1 = Singleton.getInstance();
var instance2 = Singleton.getInstance();
console.log(instance1 === instance2); // Expected to be True
