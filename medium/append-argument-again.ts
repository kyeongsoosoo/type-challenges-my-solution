{
    type MyAppendArgument<Fn, appenArg extends any > = 
        Fn extends (...args: infer A) => infer R
            ? (...args: [...rest: A, x: appenArg]) => R
            : Fn
    
    type Fn = (a: number, b: string) => number

    type Result = MyAppendArgument<Fn, boolean> 
    // expected be (a: number, b: string, x: boolean) => number
}