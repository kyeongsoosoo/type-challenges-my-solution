{
    type StartsWith<A extends string, B extends string> = 
        A extends `${B}${infer Rest}`
            ? true
            : false

    type a = StartsWith<'abc', 'ac'> // expected to be false
    type b = StartsWith<'ab', 'ab'> // expected to be true
    type c = StartsWith<'abc', 'abcd'> // expected to be false

}