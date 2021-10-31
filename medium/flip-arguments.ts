{
    type Flipper<A extends any[]> =
        A extends [...infer Rest, infer Last]
            ? [Last, ...Flipper<Rest>]
            : A

    type FlipArguments<F extends (...args: any) => any> =
        F extends (...args: infer R) => infer T
            ? (...args: Flipper<R>) => T
            : F

    type Flipped = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void> 
            // (arg0: boolean, arg1: number, arg2: string) => void
            
}