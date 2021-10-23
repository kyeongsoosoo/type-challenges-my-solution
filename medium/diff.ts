{
    type MyDiff<O, O1> = Omit<O & O1, keyof (O | O1)>

    type Foo = {
        name: string
        age: string
      }
      type Bar = {
        name: string
        age: string
        gender: number
      }
}