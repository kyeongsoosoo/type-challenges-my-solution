{
    type MyReadOnly<T> = {
        readonly [K in keyof T]: T[K]
    }
}