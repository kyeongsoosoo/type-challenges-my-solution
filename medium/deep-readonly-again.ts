{
    type DeepReadonly<X> = {
        readonly [Key in keyof X]: 
            X[Key] extends Object 
            ? X[Key] extends Function
                ? X[Key]
                : DeepReadonly<X[Key]> 
            : X[Key]
    }

    type X = { 
        x: { 
          a: 1
          b: 'hi'
        }
        y: 'hey'
      }
      
      type Expected = { 
        readonly x: { 
          readonly a: 1
          readonly b: 'hi'
        }
        readonly y: 'hey' 
      }
      
      const todo: DeepReadonly<X>// should be same as `Expected`
}