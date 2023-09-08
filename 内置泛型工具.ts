
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