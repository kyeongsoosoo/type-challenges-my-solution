{
    type Map<O> = {
        [Key in keyof O]: O[Key]
    }

    type FilterKey<T, K> = K extends keyof T ? K : never

    type RequiredByKeys<T, K = never> = 
        [K] extends [never]
            ? Required<T>
            : Map<Omit<T, FilterKey<T, K>> & { [Key in FilterKey<T, K>]-?: NonNullable<T[Key]> }>

    interface User {
        name?: string
        age?: number
        address?: string
      }
      
      type UserPartialName = RequiredByKeys<User> // { name: string; age?: number; address?: string }
      
      
}