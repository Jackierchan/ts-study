//ts基础类型
let isDone:boolean=false
// isDone = 123 报错
let age:number = 10

let firstName:string='ddd'

let message:string = `hell0,${firstName}` //支持模版字符串

let u:undefined = undefined
let n:null=null
let num:number = undefined
//any允许负值为任意类型
let notSure:any = 4
notSure = 'string'
notSure = true

notSure.myName
notSure.getName()
