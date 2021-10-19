{
    type MyPermutation<T, K=T> = 
        [T] extends [never]
            ? []
            : K extends K
                ? [K, ...MyPermutation<Exclude<T,K>>]
                : never
    
    type Permuted = MyPermutation<'a' | 'b'>  // ['a', 'b'] | ['b' | 'a']
}