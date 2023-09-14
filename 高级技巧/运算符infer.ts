type a = [1,2,3,4]
type b<T> = T extends (infer I)[]?I:never
type b1<T,I> = T extends any[]?I:never

type c = b<a>
type e = b1<a,string>

let d:c ='1'
export {}