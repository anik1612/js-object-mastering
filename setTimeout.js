function doSomething(){
    console.log(4444);
}

console.log(1111);
console.log(2222);
// anonymous function
setTimeout(function(){
    console.log('lazy and waiting');
},4000);
// arrow function
setTimeout(()=> {
    console.log('see you later');
}, 4000)
console.log(3333);

let count = 00;

setInterval(function(){
    count++;
    if(count==60){
        count = 0;
    }
    console.log(count);
}, 1000)
