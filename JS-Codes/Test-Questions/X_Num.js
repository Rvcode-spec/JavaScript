let arr="9871585013";
let ans = "";
for(let i=0; i<arr.length; i++){
    let nms=Number(arr[i])
    
    if(i%2!==0){
        ans+='x';
    }else{
        ans+=nms;
    }
   
    
}
console.log(ans);