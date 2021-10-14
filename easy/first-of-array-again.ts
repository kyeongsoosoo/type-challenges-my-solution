{
    type First<A extends any[]> = A ['length'] extends 0 
    ? never
    : A[0]

    type arr1 = [1]
    type arr2 = [3, 2, 1]

    type head1 = First<arr1> // expected to be 'a'
    type head2 = First<arr2> // expected to be 3

    type Arguments<T> = T extends (...args: infer A) => any ? A : never
}