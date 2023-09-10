//数组将同一类型的数据聚合到一起
//元祖合并了不同类型的对象，限定了数据类型的数组，可以用数组的方法
let arrOfNumber:number[] = [1,2,3,]
arrOfNumber.push(4)
//arrOfNumber.push('aaa')报错

function test(){
//类数组
    console.log(arguments)
    // let htmlCollection:HTMLAllCollection

}

let user:[string,number]=['aaa',1]
// user.push(true) 报错
user.push(2) //必须是元祖中的类型

// user.push()
