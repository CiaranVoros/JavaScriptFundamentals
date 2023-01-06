console.log(hello);                                   
var hello = 'world';
//hoisted and undefined       

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//runs

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// logs super cool

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// logs chicken, then half-chicken

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// first log is undefined, chicken logged, then fish logged, then undefined logged XXXXX Mean was not a function, was defined as a variable so didnt run

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// san jose logged, seattle logged, burbank logged san jose logged 

function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
// chicago : 65 will be returned, berkely hiring will be not true and itll log closed for now and return dojo