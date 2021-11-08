{
    type LengthOfString<S extends string, A extends any[] = []> = 
        S extends `${infer First}${infer Rest}`
            ? LengthOfString<Rest, [First, ...A]>
            : A['length']

    type test = LengthOfString<'hi'>
}