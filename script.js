function myFunction(x, y){
  var z = x * y;

  document.getElementById("team").innerHTML= z;
};

console.log('No Error Encountered');

//Test Function 2
var car = {
  firstName: "Kanina",
  lastName: "Cao Cibai",
  fullName: function(){
    return this.firstName + " " + this.lastName;
  }
};
//End Test Function 2

console.log(car.fullName());
