{
    type MyFlatten<A extends any[]> = 
        A extends [infer F, ...infer Rest]
        ? F extends Array<any>
                ?   [...MyFlatten<F>, ...MyFlatten<Rest>]
                :   [F, ...MyFlatten<Rest>]
        : []
    
    type flatten = MyFlatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]

}