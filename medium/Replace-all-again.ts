{
    type MyReplaceAll<S extends string, From extends string, To extends string> =
        S extends ''
            ? S
            : S extends `${infer First}${From}${infer After}`
                ? MyReplaceAll<`${First}${To}${After}`, From, To>
                : S

    type replaced = MyReplaceAll<'t y p e s', ' ', ''> // expected to be 'types'
}