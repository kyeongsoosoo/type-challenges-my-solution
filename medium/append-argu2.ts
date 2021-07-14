{
    type AppendArgument<F, A> = F extends (...args: infer R1) => infer R2 ? (...args:[...R1,A]) => R2 : never;

    type Fn = (a: number, b: string) => number

    type Result = AppendArgument<Fn, boolean>
}