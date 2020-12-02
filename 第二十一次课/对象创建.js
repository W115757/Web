function Pear(name,price,origin,weight){
    this.name = name,
    this.price = price,
    this.origin = origin,
    this.weight = weight;
    this.printName = function (){
        console.log("this is pear " + this.name)
    }
}
Pear.prototype.printName2 = function (){
    console.log("this is pear " + this.name)
}

var p1 = new Pear("一号梨",12,"河南",10)
var p2 = new Pear("二号梨",20,"山东",10)
p1.printName()
p2.printName2()

console.log(p1.__proto__)
console.log(Pear.prototype)
console.log(p1.__proto__.__proto__)  //打印出：“ {} ”
console.log(Pear.prototype.__proto__)//打印出：“ {} ”
console.log(p1.__proto__.__proto__.__proto__)//打印出：“ null ”
console.log(Pear.prototype.__proto__.__proto__)//打印出：“ null ”
// Pear.printName()
// Pear.printName2()