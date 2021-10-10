{
    type MyExclude<T, U> = T extends U ? never : T;

    type T0 = Exclude<"a" | "b" | "c", "a">;
}