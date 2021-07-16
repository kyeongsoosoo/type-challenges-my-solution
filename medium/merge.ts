{
    type Merge<F,S> = {
        [P in keyof F | keyof S]: P extends keyof Omit<F, keyof S>  ? F[P] :
            P extends keyof S ? S[P] : never
    }
}