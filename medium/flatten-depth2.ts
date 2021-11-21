{
    type FlattenDepth<A extends any[], N = 1, R extends Array<'count'> = []> = 
        A extends [infer First, ...infer Rest]
            ? First extends Array<any>
                ? R['length'] extends N
                    ? [First, ...FlattenDepth<Rest, N, R>]
                    : [...FlattenDepth<First, N, [...R, 'count']>, ...FlattenDepth<Rest, N, R>]
                : [First, ...FlattenDepth<Rest, N, R>]
            : A


            type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2> // [1, 2, 3, 4, [5]]. flattern 2 times
type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1

}