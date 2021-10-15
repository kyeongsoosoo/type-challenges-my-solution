{

    type ignorePrefix = ' ' | '\t' | '\n';

    type MyTrimLeft<S extends String> = 
        S extends `${ignorePrefix}${infer Rest}`
            ? MyTrimLeft<Rest>
            : S
    
    type trimed = MyTrimLeft<'  Hello World  '> // expected to be 'Hello World  '
}