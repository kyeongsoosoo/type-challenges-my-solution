{
    type Merge<O1, O2> = {
        [Key in keyof O1 | keyof O2]: Key extends keyof O2 ? O2[Key] : Key extends keyof O1 ? O1[Key] : never
    }
}