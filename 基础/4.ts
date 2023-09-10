//type annotation 类型注解   ts无法分析变量类型，使用类型注解
//type inference 类型推断   ts能够自动分析变量类型

let a:number
a=123

let b=123

//类型推断
const one =1
const two = 2
const three = one +two

const obj = {
    name:'liahua',
    age:16
}
//可以推断对象属性
//类型注解
function getTotal(a:number,b:number){
    return a+b
}
let total = getTotal(1,2)

