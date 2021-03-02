const numberArr:Number[]=[1,2,3]
const stringArr:String[]=['aaa','bbb','ccc']
const undefinedArr:undefined[]=[undefined,undefined]
const arr:(Number|String)[]=[1,2,'aaaa']


//type alias 类型别名
type Man={name:String,age:Number}

class Aman {
    name:String;
    age:Number
}
const manArr : {name:String,age:Number}[]= [
    {name:'zhangsan',age:12},
    {name:'lisi',age:11}
]

const manArr1 : Man[]= [
    {name:'zhangsan',age:12},
    {name:'lisi',age:11}
]

const manArr2 : Aman[]= [
    {name:'zhangsan',age:12},
    {name:'lisi',age:11},
]

console.log(manArr,'manarr\n',manArr1,'manarr1\n',manArr2,'manArr2')