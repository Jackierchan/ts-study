
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