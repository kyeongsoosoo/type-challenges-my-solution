{
    type MyUnshift<A extends any[], B> = B extends never ? A : [B, ...A]

    type Result = MyUnshift<[1, 2], 0> // [0, 1, 2,]

}