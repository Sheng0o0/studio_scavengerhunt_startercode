var num = 1;
var now = "Time:between 5 to 6:30, Date:OCT 16,2017";
var name = ["Abdul", "Andrea", "Daniel", "Jordan","Ryan","Alyssa","Daniel","Richard","Edward","Jackie","Nia","Lisandro","Laasia","Miguel","Marcos","Juan Pablo","Ramata","Sheng","Steven","Caelen"];
var teacher = {
    teacher_number1:{firstname:"Peter",last:"Jablonski"},
    teacher_number2:{firstname:"Devraj", last:"Mehta"},
    teacher_number3:{firstname:"Edwin", last:"Fuquen"},
    teacher_number4:{firstname:"Joe", last:"Tessler"},
    teacher_number5:{firstname:"", last:""},
}
function log(one){
    console.log("3.1415");
}
log();

function ranInt(max,min){
    var num = Math.floor((Math.random() * (max-min+1))+min);
    console.log(num);
}
ranInt(100,1);
