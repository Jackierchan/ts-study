
//Readonly 
type MyReadonly<T> ={
    +readonly [p in keyof T ]:T[p]
  }

interface Q{
    name:string
    age:number
    a?:number
}
type q = MyReadonly<Q>
let y :q={
    name: 'a',
    age:13,
    // a:12
} 
// y.name = 'b'


type test = {
    a:1
    b:'3',
    c:{
        d:4
        e:{
            f:5
        }

    }
}
//Partial deepPartial

type deepPartail<T> = {
    [p in keyof T]+? : T[p] extends Object?deepPartail<T[p]>:T[p]
}
type r = deepPartail<test>
type y = Partial<test>

let z :r= {
 c:{
    d:4
 }
}

let t :y= {
 c:{
    d:4
 }
}

type MyPartial<T> ={
    [p in keyof T]+?: T[p]
}

//Required
type MyRequired<T> ={
    [p in keyof T]-?: T[p]
}
let m : MyRequired<Q> = {name: 'x',age:11,a:11}


let x : MyPartial<Q> = {name: 'x'}

//exclude  extract
type un=1|'2'
type Myexclude<U,T> =U extends T?never:U
type testUn=Myexclude<un,1>
let a:testUn = 1
let b:testUn = 2
let c:testUn = '2'

type Myextract<U,T> =U extends T?U:never
type testUn1=Myextract<un,1>
let d:testUn1 = 1
let e:testUn1 = '2'

//pick omit



//record




export {}

