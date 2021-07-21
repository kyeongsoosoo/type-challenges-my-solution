{
    type TransformUppercaseLetter<S extends string> =
        S extends `${infer L}${infer R}`
        ? (
            L extends Lowercase<L>
            ? `${L}${TransformUppercaseLetter<R>}`
            : `-${Lowercase<L>}${TransformUppercaseLetter<R>}`
        )
        : S;
    type HandleFirst<S extends string> = S extends `${infer L}${infer R}` ? `${Lowercase<L>}${R}` : S
    type KebabCase<S extends string> = TransformUppercaseLetter<HandleFirst<S>>

    const kebab :KebabCase<'KeBab'>;
}