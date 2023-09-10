//函数两个关键点，入参和返回，要有类型
//ts冒号后边都是在生命类型，与业务逻辑无关
const add = (x:number,y:number,z?:number):number => {
    if(z){
        return x+y
    }else{
        return x+y+z
    }
}
add(1,2,3)

const add2:(x: number, y: number, z?: number) => number = add
//interface描述函数如下
interface ISum {
    (x:number,y:number,z?:number):number 
}
const  add3:ISum=add
add3(1,2,3)
