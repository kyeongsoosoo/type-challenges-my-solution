{
    type Absolute<A extends string | number | bigint> = 
        `${A}` extends `-${infer Rest}`
            ? Rest
            : `${A}`
}