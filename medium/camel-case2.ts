{
    type CamelCase<S extends string> 
  = S extends `${infer First}${infer Rest}` 
      ? First extends '-'
        ? Capitalize<Rest> extends Rest
          ? `${First}${CamelCase<Rest>}`
          : `${CamelCase<Capitalize<Rest>>}`
        : `${First}${CamelCase<Rest>}`
      : S 

    type a = CamelCase<'a-b-c-'>


    type TET<S> =
     S extends `${infer First}${infer Rest}`
        ? Rest
        : S

    type t = TET<'g22'>
}