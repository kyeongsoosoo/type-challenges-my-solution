{
    type Replace<S extends string, From extends string, To extends string> =
        S extends `${infer R}${From}${infer L}` 
            ? `${R}${To}${L}`
            : S

    type replaced = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'

}