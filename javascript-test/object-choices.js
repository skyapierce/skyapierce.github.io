function loader () {
    const getNamesButton = document.getElementById('getNames');
    const functionButton = document.getElementById('getFunctionObject');

getNamesButton.onclick = function() {
    const name = myObject.getName();
    const getNameDisplay = document.getElementById("getNameDisplay");
    getNameDisplay.textContent = name;

    const fullName = myObject.getFullName();
    const getFullNameDisplay = document.getElementById('getFullNameDisplay');
    getFullNameDisplay.textContent = fullName;
    }

   const functionObject = new FunctionObject();
   console.log(functionObject.getFullName());
    functionButton.onclick = functionObject; 
}

window.onload = loader;

//key value pairs
//Comma separated list of key value pairs.
const myObject = {
    firstName: 'Sky',
    lastName: 'pierce',
    getName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

function functionObject() {
    const firstName = "Sky";
    const lastName = "Pierce";

FunctionObject.prototype.getFullName = () => { 
    return firstName + " " + lastName;
    }
}

console.log (myObject.firstName);
console.log(myObject['firstName']);
console.log (myObject.getName());
console.log(myObject.middleName);
console.log (myObject.getFullName());

myObject.middleName = 'Aaron';

myObject.getFullName = function() {
    return this.firstName + 
    " " + this.middleName + 
    " " + this.lastName;
};