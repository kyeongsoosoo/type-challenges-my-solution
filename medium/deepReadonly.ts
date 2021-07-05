{
    type DeepReadonly<T> = {
    readonly [K in keyof T] : keyof T[K] extends undefined ? T[K] : DeepReadonly<K>
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
  
  const a: DeepReadonly<X>  // should be same as `Expected`
}