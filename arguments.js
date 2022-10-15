function add(){
    //console.log(arguments);//[Arguments] { '0': 1, '1': 2, '2': 4, '3': 5 }
    var arguments=arguments;
    var sum=0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum=sum+num;
    }
    return sum;
    
}
console.log(add(1,2,4,5));

