function echo <T> (arg:T):T{
    return arg
}
let results = echo('a')

function swap <T,U> (tuple:[T,U]):[U,T]{
    return [tuple[1],tuple[0]]
}
const results2=swap(['aaa',1223])
console.log(results[1])

//泛型约束
interface strLength {
    length:number
}

function echoWithLength <T extends strLength> (args:T) :T{
    console.log(args.length)
    return args
}
let str = echoWithLength('23')
let obj = echoWithLength({ length:1})
let arr = echoWithLength([])

//let num = echoWithLength(123)报错

