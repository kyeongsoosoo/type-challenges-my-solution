{
type IsUnion<T, F = T> =
    T extends T
        ? Array<F> extends Array<T>
            ? false
            : true
        : never
}