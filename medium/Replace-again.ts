{
    type MyReplace<S extends string, From extends string, To extends string> =
        S extends `${infer Some}${From}${infer Rest}`
            ? `${Some}${To}${Rest}`
            : S
    
    type replaced = MyReplace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'

}