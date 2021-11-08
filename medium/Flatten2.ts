{
    type Flatten<A extends any[]> = 
        A extends [infer First, ...infer Rest]
            ? First extends [...infer DeepElem]
                ? [...Flatten<DeepElem>, ...Flatten<Rest>]
                : [First, ...Flatten<Rest>]
            : A

    type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]

}