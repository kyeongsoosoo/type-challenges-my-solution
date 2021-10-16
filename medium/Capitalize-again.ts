{
    type MyCapitalize<S extends string> = 
        S extends `${infer FirstLetter}${infer Rest}` 
            ? `${Uppercase<FirstLetter>}${Rest}`
            : S

    type capitalized = MyCapitalize<'hello world'> // expected to be 'Hello world'
}