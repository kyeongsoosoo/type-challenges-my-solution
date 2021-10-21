{
    type MyAbsolute<T extends number | string | bigint> = `${T}` extends `-${infer Rest}` ? Rest : T

    type Test = -100;
    type Result = MyAbsolute<Test>; // expected to be "100"
}