{
    type Capitalize<S extends string> = S extends `${infer FirstChar}${infer RestChar}` ? `${Uppercase<FirstChar>}${RestChar}` : S;
    
    type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'

}