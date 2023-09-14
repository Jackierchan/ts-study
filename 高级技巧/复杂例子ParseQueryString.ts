
type IndexOf<T extends any[], U, R extends any[] = []> = 
T extends [infer K, ...infer Rest]
  ? K extends U
    ? R['length']
    : IndexOf<Rest, U, [...R, 1]>
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
  readonly [Key in keyof OneParam | keyof OtherParam]: 
    Key extends keyof OneParam
        ? Key extends keyof OtherParam
            ? MergeValues<OneParam[Key], OtherParam[Key]>
            : OneParam[Key]
        : Key extends keyof OtherParam 
            ? OtherParam[Key] 
            : never
}

type ParseParam<Param extends string> = 
    Param extends `${infer Key}=${infer Value}`
        ? {
            [p in Key]: Value 
        } : Param extends '' ? {} : { [K in Param]: true }
        // Record<string, any>;

type ParseQueryString<Str extends string>
    = Str extends `${infer Param}&${infer Rest}`
        ? MergeParams<ParseParam<Param>, ParseQueryString<Rest>>
        : ParseParam<Str>;


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
attend.
type C =ParseQueryString<'a=2&a=3&a=2&b=3&true=4&d=5&e'>
