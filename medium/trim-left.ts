type TrimLeft<S extends string> = S extends `${' ' | '\n' | '\t'}${infer R}` ? TrimLeft<R> : S

type helper = ' '| '\n' | '\t'
type Trim<S extends string> =
    S extends `${helper}${infer R}`
    ?
    Trim<R>
    :
S extends `${infer R}${helper}`
    ?
    Trim<R>
: S

type trimed = Trim<'  Hello World  '> // expected to be 'Hello World  '
