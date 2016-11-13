// console.log("I'm a JS boi")
// // This is a single line comment. Everything is
// //ignored until a new line without '//'
// // var some_var;

// // /*
// // This is a multiline comment close me like so:
// // */
// // var some_other_var;
// // var input;
// // if (input){
// //   console.log(input);
// // } else {
// //   console.log("NOT DEEEEEEFINED!!");
// // }
// // var test = false;
// // var output = test ? "Passed the test" : "Miserable Failure";
// // console.log.(output);
// var value = 0;
// if (value === 0) {
//   console.log("zero");
// } else if (value === 1){
//   console.log("one");
// }else{
//   console.log("or something else");
// }
// var a = 0;
// while (true){
//   console.log(a);
//   if (a >=10){
//   break;  
//   }else{
//     a++;
//   }
// }
// for (var i = 0;i<=10;i++) {
//   console.log(i);
// }
// var arr = ["a","b","c","d"];
// arr.forEach(function(item){
//   console.log(item);
// });
// function my_func_stmt(arg){
//   console.log("inside my function");
//   console.log(arg);
// }
// var my_func_exp=function(arg){
//   console.log("inside my function");
//   console.log(arg);
// }
// var one=function(){
//   return 1;
// }
// console.log(one());
// function addArgs(){
//   var sum = 0;
//   for (var i = 0;i<arguments.length; i++){
//     sum+=arguments[i];
//   }
//   return sum;
// }
// console.log(addArgs(3,0.13,0.01));
// function defaultArgs(a,b){
//   if (typeof(a)==="undefined"){
//     a=0;
//   }
// if (typeof(b)==="undefined"){
// //   b=0;
// // }
// //   return a+b;
// // }
// // console.log(defaultArgs(3, 0.13, 0.01));
// function times(number, block){
//   for(i=0; i<number; i++){
//     block();
//   }
// }
// console.log(a_var===undefined);
// var a_var=123;
// console.log(func_var===undefined);

// function a_function() {
//   console.log(func_var===undefined);
//   var func_var="func";
// }
// a_function();
function scope_func() {
  var my_own_var = "hellojs1";

  window.hello1 = function() {
    console.log(my_own_var);
  };
}
scope_func();