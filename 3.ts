//基础静态类型  对象静态类型
const count1:number= 918
const myName:string= 'hahaha'
//null,undefined,boolean,void,symbol


//对象
const xiaojiejie1:{
    name:string,
    age:number
}={
    name:'xiaoyu',
    age:12
}
//数组
const xiaojiejiearr:string []=['lihau','xiaoming']
//类
class Person {}
const lihau:Person=new Person()

//函数
const personFun:() => string = ()=>{ return 'lihau' }

console.log(xiaojiejie1,'xiaojiejie1\n',xiaojiejiearr,'xiaojiejiearr\n',lihau,'lihau\n',personFun,'personFun')