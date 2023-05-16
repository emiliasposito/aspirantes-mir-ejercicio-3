function sum(n){
    var suma=0;
    var i,j;
    j=n;
    for(i=1; i <= n; i++){
       suma=suma+j
       j=j-1 
    }
    console.log("La suma es", suma)
}
console.log(sum(4)) // 1 + 2 + 3 + 4 = 10
console.log(sum(10)) // 55
console.log(sum(15)) // 120