{
    type KebabCase<S extends string> = 
        S extends `${infer First}${infer Rest}`
            ? Rest extends Uncapitalize<Rest>
                ? `${Uncapitalize<First>}${KebabCase<Rest>}`
                : `${Uncapitalize<First>}-${KebabCase<Rest>}`
            : S
}