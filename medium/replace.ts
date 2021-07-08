{
    type Replace<S extends string, From extends string, To extends string> = '' extends From 
    ? S 
    : S extends `${infer R1}${From}${infer R2}`
    ? `${R1}${To}${R2}`
    : S;


    type ReplaceAll<S extends string, From extends string, To extends string> = '' extends From 
    ? S
    : S extends `${infer R1}${From}${infer R2}`
    ? ReplaceAll<`${R1}${To}${R2}`,From, To>
    : S

    type replaced = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'

    type replaced2 = ReplaceAll<'t y p e s', ' ', ''> // expected to be 'types'


}