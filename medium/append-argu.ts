{
    type AppendArgument<F,A> = F extends (...args: infer ArgsType) => infer R ? (...args:[...ArgsType, A]) => R : never;

    type Fn = (a:number, b: string) => number

    type Result = AppendArgument<Fn, boolean>
}