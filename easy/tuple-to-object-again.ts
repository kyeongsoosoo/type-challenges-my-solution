{
    type TupleToObject<T extends readonly any[]> = {
        [Key in T[number]]: Key
    }

    const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

    const result: TupleToObject<typeof tuple> = { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'} // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

}