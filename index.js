function multiply(a, b) {
    return a * b;
}
function multiply2(c, d) {
    let mag = multiply(a, b)
    return mag
}
console.log(multiply(4, 5));

let lambda = (a, b) => a + b;

console.log(lambda(2, 3));

function doThing() {
    console.log("Hello there Deeg");
}

function multiplyOutput() {
    let x = +document.getElementById("input1").value;
    let y = +document.getElementById("input2").value;
    let sum = x * y;
    console.log(sum);
    let box = document.createElement("p")
    box.innerHTML = "The result is " + sum;
    document.body.appendChild(box);
}


const myDetails = {fName: "Deeg", lName: "Hogsade", Height: "187", Weight: "81"};

function clickFName() {
    let box = document.createElement("p")
    box.innerHTML = "My first name is " + myDetails.fName;

    document.body.appendChild(box);
}

function clickLName() {
    let box = document.createElement("p")
    box.innerHTML = "My last name is " + myDetails.lName;
    document.body.appendChild(box);
}

function clickFullName() {
    let box = document.createElement("p")
    box.innerHTML = "My full name is " + myDetails.fName + " " + myDetails.lName;
    document.body.appendChild(box);
}

function clickHeight() {
    let box = document.createElement("p")
    box.innerHTML = "My height is " + myDetails.Height + " cm";
    document.body.appendChild(box);
}

function clickWeight() {
    let box = document.createElement("p")
    box.innerHTML = "My current weight is " + myDetails.Weight + " kg";
    document.body.appendChild(box);
}

