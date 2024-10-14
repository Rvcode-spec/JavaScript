// Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.

let x=1, y=2, z=5;

if (x > y && y > z) {
    if (x > y) {
        console.log(x, y, z);
    } else if (y > x) {
        console.log(x, y, z);
    }else if(y>z && z>x){
        if(y>z){
            console.log(x,y,z);
        }else if(z>y){
            console.log(x,y,z);
        }
    }
}
console.log(x, y, z);  


    