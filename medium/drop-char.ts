{
    type DropChar<S extends string, Replacing extends string> = 
        S extends `${infer First}${Replacing}${infer Rest}`
            ? DropChar<`${First}${Rest}`, Replacing>
            : S

    type Butterfly = DropChar<' b u t t e r f l y ! ', ' '> // 'butterfly!'
}