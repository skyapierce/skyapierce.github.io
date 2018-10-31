var showMessage = (message) => { 
   console.log("===================================");
   console.log("===== " + message + " =====");
   console.log("===================================");
}

showMessage('= Operator Precedence =');

let result = 1 + 2 * 3;
console.log(result);

result = (1 + 2) * 3;
console.log(result);

showMessage("====== for loops ======");

for (let i = 0; i < 7; i++) {
    console.log(i);
}

showMessage("===== While Loops =====");

let looper = 10; 

while (looper < 15) { 
    console.log(looper++);
}

do { 
    console.log(looper++);
} while (looper < 20); 

showMessage("====== Complete ======="); 