{
  type UnionToIntersection<U> = (
    U extends any ? (arg: U) => any : never
  ) extends (arg: infer I) => void
    ? I
    : never;

  type I = UnionToIntersection<"foo" | 42 | true>; // expected to be 'foo' & 42 & true
}
