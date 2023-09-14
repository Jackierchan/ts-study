

type StartsWith<T extends string, U extends string> = T extends `${U}${infer R}` ? true : false;
type EndsWith<T extends string, U extends string> = T extends `${infer P}${U}` ? true : false;

type a = StartsWith<'abc', 'ac'>
type b = StartsWith<'abc', 'ab'>
type c = EndsWith<'abc', 'abc'>
type d = EndsWith<'abc', 'abc'>

export {}