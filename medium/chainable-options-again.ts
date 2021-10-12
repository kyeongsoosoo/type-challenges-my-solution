{
    type Chainable<O = {}> = {
        option<Key extends string, Val>(K: Key, V: Val): Chainable<O & { [P in Key]: Val}>
        get(): O
    }

    declare const config: Chainable

    const result = config
    .option('foo', 123)
    .option('name', 'type-challenges')
    .option('bar', { value: 'Hello World' })
    .get()

    // expect the type of result to be:
    interface Result {
    foo: number
    name: string
    bar: {
        value: string
    }
    }
}