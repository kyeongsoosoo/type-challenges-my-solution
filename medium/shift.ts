{
    type Shift<A extends Array<any>> =
        A extends [infer First, ...infer Rest]
            ? [Rest]
            : []
}