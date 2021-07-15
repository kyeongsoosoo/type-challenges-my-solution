{
    type Test = '123';

    type StringToUnion<K extends string> = 
        K extends `${infer R1}${infer R2}`
            ? R1 | StringToUnion<R2>
            : never

    type Result = StringToUnion<Test>;
}