//enums枚举
enum Direction {
    left='left',
    right='right',
    up='up',
    down='down'
}
console.log(Direction.left)
console.log(Direction[0])
const value = 'up'
if( value == Direction.up){
    console.log('go up')
}