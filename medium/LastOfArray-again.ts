{
    type MyLast <A extends readonly any[]> = A extends [...infer R, infer K] ? K : never

    type arr1 = ['a', 'b', 'c']
    type arr2 = [3, 2, 1]

    type tail1 = MyLast<arr1> // expected to be 'c'
    type tail2 = MyLast<arr2> // expected to be 1
}