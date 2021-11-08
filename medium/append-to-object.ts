{
    type Map<O> = {
        [Key in keyof O]: O[Key]
    }

    type AppendToObject<O, K extends string, V> = Map<O & {
        [Key in K]: V
    }>

    type Test = { id: '1' }
type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }

}