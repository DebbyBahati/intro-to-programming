var dreamCar = {
    make: "Ferrari",
    model: "98",
    color: "red",
    year: 2007,
    bodyStyle: "Luxury Car",
    price: 4500
}

document.getElementById("pricetag").innerHTML = dreamCar.price;
document.getElementById("modelyear").innerHTML = dreamCar.year;
document.getElementById("body").style.backgroundColor = dreamCar.color;
document.getElementById("body").innerHTML = dreamCar.make + " " +
dreamCar.model;

alert("The type of dreamCar is: " + typeof dreamCar);


