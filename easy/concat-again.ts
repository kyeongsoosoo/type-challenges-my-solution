{
    type MyConcat<A extends readonly any[], B extends readonly any[]> = [...A, ...B]

    type Result = Concat<[1], [2]> // expected to be [1, 2]
}