{
    type MyKebabCase<S extends string> = S extends `${infer F}${infer R}`
        ? R extends Uncapitalize<R>
            ? Uncapitalize<`${F}${MyKebabCase<R>}`>
            : Uncapitalize<`${F}-${MyKebabCase<R>}`>
        : S

    const a: MyKebabCase<'FooBarBaz'>
}