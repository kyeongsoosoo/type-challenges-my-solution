{
    type Reverse<A extends Array<any>> =
        A extends [...infer Rest, infer Last]
            ? [Last, ...Reverse<Rest>]
            : [] 
}