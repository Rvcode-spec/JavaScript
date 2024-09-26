// Write a program that calculates a discount based on the purchase Amount Prices equal or over 100 discount have a discount of 20. Prices equal or over 50 have a discount of 10. Otherwise, discount is 0

let Product = "Card";
let price = 50;
let discount = 20;


if(price>100){
    price=price-discount;
    console.log("final Amount",Product,price);
}else if (price<=50){
    price=price-10;
    console.log(" final Amoun:-",Product,price);
}else{
    console.log("Nothing");
    
}

