
var variable = 'Global Level Variable';
let myObject = { 
 variable: 'Object Level Variable', 
arrowFunction:() => { 
 console.log(this.variable); 
 },
regularFunction(){ 
 console.log(this.variable); 
 } 
};
myObject.arrowFunction(); 
myObject.regularFunction();