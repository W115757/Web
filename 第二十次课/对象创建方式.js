let melon = {}
let melon2 ={
    name:"我是甜瓜",
    price:20,
    weight:2,
    origin:"海南省",
    nut:{
        name:"我是甜瓜的种子",
        price:40
    },
    printPrice:function(){
        console.log("我是价格")
    },
    printOringin:()=>{
        console.log("原产地")
    },
}


var melon3 = new Object()
var melon4 = new Object({})
var melon5 = new Object({    
    name:"我是甜瓜",
    price:20,
    weight:2,
    origin:"海南省",
    nut:{
        name:"我是甜瓜的种子",
        price:40
        },
    printPrice:function(){
        console.log("我是价格")
        },
    printOringin:()=>{
        console.log("原产地")
        },
})

var melon6 = new Object(666)
// function Object(x){
//     x()
// }