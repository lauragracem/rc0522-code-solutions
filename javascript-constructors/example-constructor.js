function ExampleConstructor() {

}
console.log(ExampleConstructor.prototype);
console.log('typeof prototype property:', ExampleConstructor.prototype);

var newExCon = new ExampleConstructor();
console.log('new return value:', newExCon);

var isExCon = (newExCon instanceof ExampleConstructor);
console.log('Is an instanceof ExampleConstructor:', isExCon);
