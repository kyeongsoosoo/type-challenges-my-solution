{
    type PickKey< T, K extends string> = T extends K ? T : never
    type Map<T> = {
        [Key in keyof T]: T[Key]
    }

    type RequiredByKeys<T, K extends string = never> =
        [K] extends [never]
            ? Required<T>
            : Map<Omit<T, K> & {
                [Key in PickKey<keyof T, K>]-?: NonNullable<T[Key]>
            }>

            interface User {
                name?: string
                age?: number
                address?: string
              }
              
              type UserPartialName = RequiredByKeys<User,'name'> // { name: string; age?: number; address?: string }
              
}