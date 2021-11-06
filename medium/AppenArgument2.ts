{
    type AppendArgument<Fn, app> = 
        Fn extends (...args: infer R) => infer L
            ? (...new_arg: [...R, app]) => L
            : Fn
        
            type Fn = (a: number, b: string) => number

            type Result = AppendArgument<Fn, boolean> 
            // expected be (a: number, b: string, x: boolean) => number
            
}