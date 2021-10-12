{
    type MyTupleToUnion<A extends readonly any[]> = A[number]

    type Arr = ['1', '2', '3']

    const a: MyTupleToUnion<Arr>
}