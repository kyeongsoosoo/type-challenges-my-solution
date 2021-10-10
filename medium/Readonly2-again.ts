{
    type MyReadOnly2<T, K extends keyof T = keyof T> = T & {
        readonly [P in K]: T[P]
    }
}