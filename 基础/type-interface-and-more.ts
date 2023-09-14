
let str = '2312'
//str = 1 报错  没有明确指定类型时会推测出一个类型，类行推论

//union type 联合类型，声明的类型并不确定，可以为多个类型中的一个
let numOrString : string | number  
numOrString = 123
numOrString='abc'
// numOrString = true 

//类型断言 as
function getLength(input:string|number):number{
    const str = input as string
    if(str.length){
        return str.length
    }else{
        const number=input as number
        return number.toString().length
    }
}
//type guard类型守卫  in 属性是否属于某个对象 typeof 判断基本类型  instanceof 实例是否属于某个类
function getLength2(input:string|number):number{
    if(typeof input=== 'string'){
        return input.length
    }else{
        return input.toString().length
    }
}

type ZZZ = 1

