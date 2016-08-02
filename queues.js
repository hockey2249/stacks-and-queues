var q = [
 { name: 'banana',  price: 0.29 },
 { name: 'smoothie', price: 4.00 },
 { name: 'car', price: 10000 },
 { name: 'cake',  price: 6.00 },
 { name: 'cheese', price: 3.00 },
 { name: 'milk', price: 2.00 },
 { name: 'eggs',  price: 3.00 },
 { name: 'bread', price: 4.00 },
 { name: 'chips', price: 5.00 },
 { name: 'salsa',  price: 1.00 },
 { name: 'chicken', price: 3.00 },
 { name: 'steak', price: 5.00 },
 { name: 'apple',  price: 10.00 },
 { name: 'orange', price: 6.00 },
 { name: 'grapes', price: 4.00 }
];


function calculateTotal(array){
    var discountArray = [];
    var counter = 0;
    var total = 0;


while (array.length > 0){

var current_element = array.shift();
 counter++;
 if (counter % 3 === 0){
    discountArray.push(current_element.price * .9);
 
 } else if (counter % 5 === 0){
 	discountArray.push(current_element.price * .8);
 	
 } else if (counter % 15 === 0){
 	discountArray.push(current_element.price * .7);
 } else {
 	discountArray.push(current_element.price);
 }

}
	for( var i = 0; i < discountArray.length; i++){
		total += discountArray[i];
	}
	
	console.log(total);
	console.log(discountArray);

}
calculateTotal(q);
