type A = {
    name:string
    age:number
}

type B = keyof A
let b:B = 'name'
let c:B = 'age'
// let d:B = 'aaa'

type D = keyof any

interface Person{
    [prop:number]:string
}
type z = keyof Person


interface Person1{
    [prop:string]:string
}
type x = keyof Person1


function prop<Obj, K extends keyof Obj>(
    obj:Obj, key:K
  ):Obj[K] {
    return obj[key];
  }
  prop({a:1},'a')
//   y.name = 'b'
type MyObj = {
  foo: number,
  bar: string,
};
type Keys = keyof MyObj; // 'foo'|'bar'
type KeyT = keyof any;
type Result = keyof ['a', 'b', 'c'];
let a: Result=1
// 返回 number | "0" | "1" | "2"
// | "length" | "pop" | "push" | ···