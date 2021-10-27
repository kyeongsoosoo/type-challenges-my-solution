{
    type Map<T> = {
        [Key in keyof T]: T[Key]
    }

    type PartialByKeys<T, K extends string = never> =
        [K] extends [never] 
            ? Partial<T>
            : Map<Omit<T,K> & {
                [Key in Extract<keyof T, K>]?: T[Key]
            }>
//     type IsNever<T> = Exclude<T, never> extends never ? true : false
// type Map<T> = { [P in keyof T]: T[P] }

// type PartialByKeys<T, K extends string = never> = IsNever<K> extends true ? Partial<T> : Map<Omit<T, K> & {
//   [P in Extract<keyof T, K>]?: P extends keyof T ? T[P] : never
// }>


            interface User {
                name: string
                age: number
                address: string
              }
              
              type UserPartialName = PartialByKeys<User, 'name'> // { name?:string; age:number; address:string }
              
}