{
    type Diff<O1, O2> = Omit<O1 & O2, keyof (O1 | O2)>   
}