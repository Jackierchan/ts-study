//pick
type MyPick<U,T extends keyof U>={
    [p in  T]:U[p]
}

interface Person{
    name: string
    age: number
    sex:Boolean
}

type testPick = MyPick<Person,'name'|'age'>
type testPick1 = Pick<Person,'name'|'age'>


let testpick:testPick={
    name: 'John',
    age: 42,
}
let testpick1:testPick1={
    name: 'John',
    age: 42,
}

//omit

type MyOmit<U,T extends keyof any> =
// {
//     [p in Exclude<keyof U,T>]:U[p]
// }
Pick<U,Exclude<keyof U,T>>
type testOmit1= MyOmit<Person,'name'|'g'>
type Myexclude<U,T> =U extends T?never:U



type testOmit= Omit<Person,'name'|'g'>

let testomit:testOmit =  {
    age:1,
    sex:true
}
let testomit1:testOmit1 =  {
    age:1,
    // name:'aaa',
    sex:true
}