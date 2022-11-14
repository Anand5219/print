var obj={num:1};
var obj2={num:2};
var addToThis=function(a,b,c){
    return this.num+a+b+c;

};
var arr=[1,2,3];
console.log(addToThis.apply(obj,arr));
console.log(addToThis.apply(obj2,arr));


var arr =[1,2,3];
var bound =addToThis.bind(obj);
console.log(bound(1,2,3));