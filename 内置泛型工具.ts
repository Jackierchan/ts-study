
type MyReadonly<T> ={
    +readonly [p in keyof T ]:T[p]
  }

interface Q{
    name:string
    age:number
}
type q = MyReadonly<Q>
let y :q={
    name: 'a',
    age:13
} 

type MyPartial<T> ={
    [p in keyof T]+?: T[p]
}

let x : MyPartial<Q> = {name: 'x'}

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



export {}

