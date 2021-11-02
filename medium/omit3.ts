{
    interface Todo {
        title: string
        description: string
        completed: boolean
      }

    type Exclude<A, K extends string> = A extends K ? never : A

    type MyOmit<A, key extends string> = {
        [K in Exclude<keyof A, key> ]: A[K]
    }
      
      type TodoPreview = MyOmit<Todo, 'description' | 'title'>
      
      const todo: TodoPreview = {
        completed: false,
      }
      
}