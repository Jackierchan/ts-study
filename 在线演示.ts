function comp<Type>(a:Type, b:Type) {
  if (a.length >= b.length) {
    return a;
  }
  return b;
}

function comp1<Type extends {length:number}>(a:Type, b:Type) {
  if (a.length >= b.length) {
    return a;
  }
  return b;
}
comp1([1, 2], [1, 2, 3]) // 正确
comp1('ab', 'abc') // 正确
comp1(1, 2) // 报错

function deb<T extends any[],R>(fn:(...args:T)=>R,time:number):(...args:T)=>void {
  return ()=>{}
}
function handle(a:number,b:string){ return [a,b] }

const f = deb(handle,200)
f(1,'1')
type MyObj = { foo: number, bar: string, age:{
  a:string
}};
type Keys = keyof MyObj; // 'foo'|'bar' 
let case1:Keys='foo';
type Case2 = {
  [P in keyof MyObj]:string
}

type MyReadonly1<T> ={
  +readonly[P in keyof T]:T[P]
}

type MyRequired<T> ={
  [P in keyof T]-?:T[P]
}

type MyPartial<T> ={
  [P in keyof T]+?:T[P]
}

type MydeepPartial<T> ={
  [P in keyof T]+?:T[P] extends Object?MydeepPartial<T[P]>:T[P]
}
type case4 = MydeepPartial<MyObj>
let case5:case4={
  age:{

  }
}

type LiteralTypeName<T> =
  T extends undefined ? "undefined" :
  T extends null ? "null" :
  T extends boolean ? "boolean" :
  T extends number ? "number" :
  T extends bigint ? "bigint" :
  T extends string ? "string" :
  never;

  type Result2 = LiteralTypeName<true | 1 | 'a'>;
//  "boolean"|'number'|'string'

type myexclude<T,U>=T extends U?never:T
type myextract<T,U>=U extends T?T:never
type Mypick<T,U extends keyof T>={
  [P in U]:T[P]
}
type MyOmit<T,U>={
  [P in myexclude<keyof T,U>]:T[P]
}

type MyOmit1<T,U>=Mypick<T,myexclude<keyof T,U>>

type MyType<T,> =
  T extends {
    a: U,
    b:K
  } ? [M, N] : never;
type T = MyType<{ a: string; b: number }>;


function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const picked: Partial<T> = {};
  keys.forEach((key) => {
    picked[key] = obj[key];
  });
  return picked as Pick<T, K>;
}

const user = {
  id: 1,
  name: "Alice",
  age: 25,
  email: "alice@example.com",
};
const pickedUser = pick(user, ["name", "email"]);
pickedUser.name

type case6 = Record<keyof any,any>

type StartsWith<T extends string,U extends string>=T extends `${U}${infer P}`?true:false;
type a = StartsWith<'abc', 'ab'>
type a2 = StartsWith<'abc', 'ac'>

type endsWith<T extends string,U extends string>=T extends `${infer P}${U}`?true:false;

type IndexOf<T extends any[], U, R extends any[] = []> = 
T extends [infer K, ...infer Rest]
  ? K extends U
    ? R['length']
    : IndexOf<Rest, U, [...R, 1,1,1,1,1,]>
  : -1

type MergeValues<One, Other> = 
    One extends Other 
        ? One
        : Other extends unknown[]? 
            IndexOf<Other,One> extends -1?
            [One, ...Other]
            : Other
            :[One, Other]


type MergeParams<
    OneParam extends Record<string, any>,
    OtherParam extends Record<string, any>
> = {
   [Key in keyof OneParam | keyof OtherParam]: 
    Key extends keyof OneParam
        ? Key extends keyof OtherParam
            ? MergeValues<OneParam[Key], OtherParam[Key]>
            : OneParam[Key]
        : Key extends keyof OtherParam 
            ? OtherParam[Key] 
            : never
}

type ParseParam<Param extends string> = 
    Param extends `${infer Key}=${infer Value}` //a 1=>{a:1}
        ? {
            [p in Key]: Value 
        } : Param extends '' ? {} : { [K in Param]: true }
        // Record<string, any>;

type ParseQueryString<Str extends string>
    = Str extends `${infer Param}&${infer Rest}`
        ? MergeParams<ParseParam<Param>, ParseQueryString<Rest>>
        : ParseParam<Str>; //'a=1' {a:1}


function parseQueryString<T extends string>(queryStr:T): ParseQueryString<T> {
    if (!queryStr || !queryStr.length) {
        return {} as ParseQueryString<T>;
    }
    const queryObj = {};
    const items = queryStr.split('&');
    items.forEach((item) => {
        const [key, value] = item.split('=');
        if (queryObj[key]) {
            if(Array.isArray(queryObj[key])) {
                queryObj[key].push(value);
            } else {
                queryObj[key] = [queryObj[key], value]
            }
        } else {
            queryObj[key] = value;
        }
    });
    return queryObj as any;
}

const attend = parseQueryString('a=2&a=3&a=2&b=3&1=4&d=5&e')
// attend.
type C =ParseQueryString<'a=2&a=3&a=2&b=3&true=4&d=5&e'>