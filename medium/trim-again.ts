{
type ignoreChar = ' ' | '\t' | '\n'

type MyTrim<S extends string> = 
    S extends `${ignoreChar}${infer Rest}` | `${infer Rest}${ignoreChar}`
        ? MyTrim<Rest>
        : S

    type trimed = MyTrim<'  Hello World  '> // expected to be 'Hello World'
}