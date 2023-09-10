let a: number = 1
a=2

function f1<T=string,U='a'>(a:T,b:U):T{
    return a
}
f1('1','2')

function f<T extends Array<string>>(a:T[]):T{
    return a[0]
}
let b = f<[string]>([])
// b=2 


function f2<T>(arr1:T[],arr2:T[]):T[]{
    return arr1.concat(arr2)
}

f2<string|number>([1,2],['1','2'])


// function map<T,U>(arr:T[],f:(arg:)=>U){
//     return arr.map(f)
// }

interface Box <T>{
    height: T;
}

let box : Box<string> = {height:'10px'} 
// let box1 : Box<string> = {height:10} 

class A<T>{
    constructor(public name:T){
        
    }
}
let z=new A<string>('a')

type t<T>=T[]
let arr:t<string> = ['1','2']
let arr1:t<number> = [1,2]

//默认值
class Person<T=string>{
    name:T[]
    add(a:T){
        this.name.push(a)
    }
}
let p = new Person()
// p.name=[1]
p.add('1')
// p.add(2)


//约束条件
type T1<A,B='bbb'> = [A[],B]
type T2 = T1<string>
type T3<A  extends boolean,B extends string ='bbb'> = [A,B]
type T4=T3<true>
let arr5:T4 = [true,'bbb']

type a = keyof any
let myId:<T>(arg:T) => T = function (arg) {
    return arg;
  };
  myId('a')


  class Pair<K, V> {
    key: K;
    value: V;
    onchange(arg:K):V{
        return this.value
    }
  }
  let pp :Pair<string,number>={
    key:'11',
    value:11,
    onchange(){
        return  this.value
    }
  }
export {}