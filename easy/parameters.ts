{
    type MyParameters<T extends (...args: any[]) => unknown> = T extends (...args: infer Param) => unknown ? Param : never
}