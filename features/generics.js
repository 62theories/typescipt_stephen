var ArrayOfNumbers = /** @class */ (function () {
    function ArrayOfNumbers(collection) {
        this.collection = collection;
    }
    ArrayOfNumbers.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfNumbers;
}());
var ArrayOfStrings = /** @class */ (function () {
    function ArrayOfStrings(collection) {
        this.collection = collection;
    }
    ArrayOfStrings.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfStrings;
}());
var ArrayOfAnything = /** @class */ (function () {
    function ArrayOfAnything(collection) {
        this.collection = collection;
    }
    ArrayOfAnything.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfAnything;
}());
var arr1 = new ArrayOfAnything(["a", "b", "c"]);
var arr2 = new ArrayOfAnything(["a", "b", "c"]);
function printAnything(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
printAnything(["a", "b", "c"]);
