//属性多或少都不可以
//加？为可选属性
//readonly为只读属性，类似const，用在属性上，const用在变量上

interface Person {
    readonly id:number,
    name:string,
    age?:number
}

let xiaoming:Person={
    id:1,
    name:'xiaoming',
    // age:18
}
//xiaoming.id=2  id为只读属性，改变会报错