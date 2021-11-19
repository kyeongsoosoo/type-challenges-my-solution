{
    type Reverse<A extends Array<any>, U extends Array<any> = []> =
        A extends [...infer Rest, infer Last]
            ? Reverse<Rest, [...U, Last]>
            : U

            type a = Reverse<['a', 'b']> // ['b', 'a']
            type b = Reverse<['a', 'b', 'c']> // ['c', 'b', 'a']
            
}