{
    type Reverse<A extends Array<any>, U extends Array<any> = []> =
    A extends [...infer Rest, infer Last]
        ? Reverse<Rest, [...U, Last]>
        : U

    type FlipArguments<Fn extends (...args: any) => any> = 
        Fn extends (...args: infer Arg) => infer R  
            ? (...flip: Reverse<Arg>) => R
            : never

            type Flipped = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void> 
            // (arg0: boolean, arg1: number, arg2: string) => void
            
}