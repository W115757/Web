var nut=function(){
    console.log("this is nut-1");
    return "this is nut-2"
}
nut()
// 仅打印输出console.log内语句，返回值无接收方

var lichee=function(){
    console.log("this is lichee-1");
    return "this is lichee-2"
}()
// 输出值是荔枝1，返回值是荔枝2

var watermelon =function() {
    console.log("this is watermelon-1")
    return function pear(){
        console.log("this is pear-1")
    }
}
var w1=watermelon()
    w1()
    //输出结果this is watermelon-1
    //       this is pear-1
// 为了调用pear函数————watermelon()()

let banana=function banana(){
    console.log("this is banana-1");
    return ()=> function() {
        console.log("this is Anonymous function")
    }
}()

(function(x){
    x()
    console.log("this is yellow orange")
        console.log(function blueOrange(){
        console.log("this is blue orange")
        }())
    })(function(){
console.log("this is orange")
return "this is red orange"
})
