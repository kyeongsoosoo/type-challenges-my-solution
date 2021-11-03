{
    type DeepReadonly<A> = {
        readonly [Key in keyof A]: keyof A[Key] extends never ? A[Key] : DeepReadonly<A[Key]>
    }

    type X = { 
        x: { 
          a: 1
          b: 'hi'
        }
        y: 'hey'
      }
      
      
      const todo: DeepReadonly<X> // should be same as `Expected`
      
}