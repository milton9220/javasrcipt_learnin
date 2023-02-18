
/*
var num1=160;
var num2=60;
var num3=120;

//find maximum number

if(num1 > num2 && num1 > num3){
    console.log(num1+" is bigger");
}
else if(num2 > num1 && num2 > num3){
    console.log(num2+" is bigger");
}
else{
    console.log(num3+" is bigger");
}

*/

/*var numbers=[100,200,120,800,60,200];

//find array maximum number
var max=numbers[0];

for(var i=0;i<numbers.length;i++){
    if(max < numbers[i]){
        max=numbers[i];
        var index=numbers.indexOf(max);
    }
    
}
console.log(max);
console.log(index);
*/
// var numbers=[1,3,4,5,6];
// var sum=0;
// for(var i=0;i<numbers.length;i++){
//     sum+=numbers[i];
// }
// console.log(sum);

const student=[
    {id:1,name:'Milton'},
    {id:2,name:'Tayaba'},
    {id:3,name:'Neha'}
];

// let element=[];
// for (let index = 0; index < student.length; index++) {
//     element.push(student[index]['name']);
// }
// console.log(element);

const name=student.map(s=>s.name);
console.log(name);
const ids=student.map(s=>s.id);
console.log(ids);

const bigger=student.filter(s=>s.id>2);
console.log(bigger);






