{
    type MyPush<A extends readonly any[], B> = B extends never ? A : [...A, B]
}