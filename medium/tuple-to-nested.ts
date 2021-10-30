{
    type TupleToNestedObject<A extends string[], S> =
        A extends [infer F, ...infer Rest]
            ? {
                [P in A as F extends string ? F : never]: Rest extends [] ? S : TupleToNestedObject<Rest extends string[] ? Rest : [], S> 
            }
            : S
}