{
    type First<A extends any[]> = A ['length'] extends 0 
    ? A extends never[] 
        ? null : A[0]
    : null

    type arr3 = [never]

    type arr1 = Array<number>
    type arr2 = [3, 2, 1]

    type head1 = First<arr1> // expected to be 'a'
    type head2 = First<arr2> // expected to be 3
}