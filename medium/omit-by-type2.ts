{
    type FilterKey<T, U, Key = keyof T> = 
        Key extends keyof T
            ? T[Key] extends U
                ? never
                : Key
            : never

    type OmitByType<T, U> = {
        [Key in FilterKey<T, U>]: T[Key]
    }

    type OmitBoolean = OmitByType<{
        name: string
        count: number
        isReadonly: boolean
        isEnable: boolean
      }, boolean> // { name: string; count: number }
      
}