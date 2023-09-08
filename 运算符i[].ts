type a = {
    name:string
    age:number
    'sex'?:boolean
    [p:string]:string|number|boolean|undefined
}
type b = a['name']
type c = a['name'|'age'|'sex']
type d = a['name'|'age'|'sex'|'a']
type e = a[string]

let obj:a = {
    name:'a',
    age:19,
    aa:'ss'
}


export {}