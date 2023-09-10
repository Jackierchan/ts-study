
// declare function deb <T extends any[]>(fn:(...args:T)=>void,time:number):(...args:T)=>void{
//     return fn
// }

function deb<T extends any[],R>(fn:(...args: T)=>R,time:number):(...args:T)=>void{
    return ()=>{}
}
function handle(a:number,b:string){
    return [a,b]
}

const f = deb(handle,200)

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
