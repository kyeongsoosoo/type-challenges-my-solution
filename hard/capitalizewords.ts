{
type CapitalizeWords<S extends string, Sentence = S> = 
    S extends `${infer F}${infer Sec}${infer Rest}`
        ? `${F}${Sec}${Rest}` extends Sentence
            ? `${Capitalize<F>}${CapitalizeWords<`${Sec}${Rest}`, Sentence>}`
            :  F extends ' '| '.' | ','
                ? `${F}${Capitalize<Sec>}${CapitalizeWords<Rest, Sentence>}`
                : `${F}${CapitalizeWords<`${Sec}${Rest}`, Sentence>}`
        :  S

    type capitalized = CapitalizeWords<'hello world,my friends'> // expected to be 'Hello World, My Friends'
}