function profile_info(name,age,callback_function){
    console.log(name);
    console.log(age);
    callback_function(name);
}

function working(name){
    console.log(name+" "+'Working from home');
}
function sleeping(name){
    console.log(name+" "+"is sleeping");
}
profile_info('Milton','27',working);
profile_info('Tayaba','24',sleeping);