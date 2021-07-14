{
    type Test = { id : '1'}

    type AppendToObject<T, U extends string, V> = {
        [P in keyof T | U]: P extends U ? V :
            P extends keyof T ? T[P] : never
    }

    type Result = AppendToObject<Test, 'value', 4> 
}