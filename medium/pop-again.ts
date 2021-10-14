{
    type MyPop<A extends readonly any[]> = A extends [...infer Rest,infer Last] ? Rest : undefined

    type arr1 = ['a', 'b', 'c', 'd']
    type arr2 = []

    type re1 = MyPop<arr1> // expected to be ['a', 'b', 'c']
    type re2 = MyPop<arr2> // expected to be [3, 2]

    const a = []
}