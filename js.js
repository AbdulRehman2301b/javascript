// var a = prompt("value?");
// do{
//     document.write("it,s almost Done"+"<br>")
//     a++;
// }
// while(a<=10);



var sum=0;
function myfun(name , ...num) {
    for (a in num){
sum += num[a]
    }
    console.log(sum);
} 
myfun("xyz" , 44, 54,1000);
