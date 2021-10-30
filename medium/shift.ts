{
    type Shift<A extends Array<any>> =
        A extends [infer First, ...infer Rest]
            ? Rest
            : []

            type Result = Shift<[3, 2, 1]> // [2, 1]

}