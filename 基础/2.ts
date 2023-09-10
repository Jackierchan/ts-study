let count : number = 1
// count = 'qqq'   静态类型不可改变类型  报错

interface Person {
    uname:string,
    age:number
}
//自定义静态类型
const xiaojiejie:Person={
    uname:'xiaohong',
    age:18
}
console.log(xiaojiejie.uname)
//typescript提高健壮性