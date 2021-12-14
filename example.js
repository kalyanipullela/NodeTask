
let GerDetails = [{ "name": "Mask", "Qty": 100, "Price": 100 }, { "name": "Gloves", "Qty": 50, "Price": 150 }]
let UKDetails = [{ "name": "Mask", "Qty": 100, "Price": 65 }, { "name": "Gloves", "Qty": 100, "Price": 100 }]
//INPUT 1: UK:B123AB1234567:Gloves:20:Mask:10
//OUTPUT 1: 2650:90:100 80:50

var x = "UK:B123AB1234567:Gloves:20:Mask:10";
var splitData = x.split(":");
let obj = {};
let quantity = "";
let totalPrice = 0;

call = (splitData) => {
    for (var i = 0; i < splitData.length; i += 2) {
        obj[splitData[i]] = splitData[i + 1];
    }
}
call(splitData);

Object.keys(obj).forEach((item) => {
    if (item == 'UK' || item == 'Mask' || item == 'Gloves') {
        UKDetails.forEach((data) => {
            if (data.name == item) {
                data.Qty = data.Qty - obj[item]
                totalPrice = totalPrice + obj[item] * data.Price
            }
        })
    }
})

GerDetails.forEach((ele) => {
    UKDetails.forEach((element) => {
        if (element.name == ele.name) {
            quantity = quantity + `:${element.Qty}:${ele.Qty}`

        }
    })
})

let output = totalPrice + quantity;
console.log("Output", output)
