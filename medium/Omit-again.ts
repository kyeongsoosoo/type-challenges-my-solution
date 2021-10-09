{
    type Exclude<T,K> = T extends K ? never : T;
    type MyOmit<T, K> = {
        [P in (Exclude<keyof T, K>)]: T[P]
    };
    interface Todo {
        title: string
        description: string
        completed: boolean
      }

    type TodoPreview = MyOmit<Todo, 'description' | 'title'>

    const todo: TodoPreview = {
        completed: false,
    }
}