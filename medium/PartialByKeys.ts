import { RestTypeNode } from "typescript"

{
    type Map<O> = {
        [Key in keyof O]: O[Key]
    }

    type MatchKey<TK, K> = TK extends K ? TK : never

    type PartialByKeys<T, K extends keyof T> = 
        Map<{
            [Key in keyof Pick<T, K>]?: T[Key]
        } & {
            [Key in Exclude<keyof T, K>]: T[Key]
        }>

        interface User {
            name: string
            age: number
            address: string
          }
          
          type UserPartialName = PartialByKeys<User, 'name'> // { name?:string; age:number; address:string }
          
}