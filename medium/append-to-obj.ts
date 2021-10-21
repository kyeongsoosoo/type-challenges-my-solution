{
    type MyAppendToObj<O, key extends string, value> = {
        [Key in (keyof O | key)] : Key extends keyof O ? O[Key] : value
    } 
    type Test = { id: '1' }
    type Result = MyAppendToObj<Test, 'value', 4> // expected to be { id: '1', value: 4 }

}