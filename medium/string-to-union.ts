{
    type StringToArr<S extends string, A extends string[] = []> =
        S extends `${infer first}${infer Rest}`
            ? StringToArr<Rest, [...A, first]>
            : A

    type MyStringToUnion<S extends string> = StringToArr<S>[number]

    //다른 풀이
    type StringToUnion<T extends string> = T extends `${infer A}${infer B}` ? A | StringToUnion<B> : never

    type Test = '123';
    type Result = MyStringToUnion<Test>; // expected to be "1" | "2" | "3"
}