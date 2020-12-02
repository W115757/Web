let pea1 = 'return' + '`我是一粒${name}`';
let peanut5 = new Function ('name',pea1);
console.log(peanut5("花生"))
