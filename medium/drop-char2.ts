{
    type DropChar<S extends string, R extends string> =
        S extends `${infer First}${R}${infer Rest}`
            ? DropChar<`${First}${Rest}`, R>
            : S
    
            type Butterfly = DropChar<' b u t t e r f l y ! ', ' '> // 'butterfly!'

}