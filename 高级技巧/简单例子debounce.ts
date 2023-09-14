
declare function deb1 <T extends any[]>(fn:(...args:T)=>void,time:number):(...args:T)=>void

function deb<T extends any[],R,K>(fn:(...args: T)=> R,time:K):(...args:T)=>void{
    return ()=>{}
}
function handle(a:number,b:string){
    return [a,b]
}

const f = deb(handle,200)
f(1,'11')

type T1 = () => string;
type T0 = string[];

type UnpackedFunction<T> =T extends (...args:any[]) => infer U ? U : T;
type T1Types = UnpackedFunction<T1>
let aaa: T1Types= ''

type UnpackedFunction1<T,R> ={
    fn:(...args: T[])=> R
}
