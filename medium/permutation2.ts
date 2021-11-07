{
    type Permutation<Elem, P = Elem> = 
        [Elem] extends [never]
            ? []
            : Elem extends Elem
                ? [Elem, ...Permutation<Exclude<P, Elem>>]
                : never

    type perm = Permutation<'A' | 'B' | 'C'>; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']

}