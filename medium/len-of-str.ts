{
    type myLen<T extends string, P extends any[] = []> = T extends `${infer R1}${infer R2}` ? myLen<R2, [R1, ...P]> : P['length']

    const a : myLen<'test'>
}