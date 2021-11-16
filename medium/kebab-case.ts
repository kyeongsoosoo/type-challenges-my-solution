{
    type KebabCase<S extends string> =
        S extends `${infer First}${infer Rest}`
            ? Rest extends Capitalize<Rest>
                ? Rest extends ''
                    ? Lowercase<S>
                    : `${Lowercase<First>}-${KebabCase<Rest>}`
                : `${Lowercase<First>}${KebabCase<Rest>}`
            : S
    
    type t = KebabCase<'foo-bar'>
}