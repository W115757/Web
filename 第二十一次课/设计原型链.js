    // function Object3(){
    //     this.name = "张三"
    // }
    // Object3.prototype2 = {
    //     name:"李四"
    // };
    
    // var obj4 = new Object3()
    //     console.log(obj4)

function Object2(){
    this.__proto2__ = Object2.prototype2
}

Object2.prototype2 = {
    __proto2__:null
};
var obj1 = new Object2 ()
    console.log(obj1.__proto2__.__proto2__)    