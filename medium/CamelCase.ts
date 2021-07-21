{
    type CamelCase<T extends string> =  T extends `${infer A}-${infer B}${infer C}` 
        ? CamelCase<`${A}${Uppercase<B>}${C}`>
        : T
    type T = CamelCase<'foo-bar-baz'>
}