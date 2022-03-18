type GenerateResult<A, R> = A extends [infer F, ...infer Rest]
  ? (arg: F) => GenerateResult<Rest, R>
  : R;

declare function Currying<T>(
  func: T
): T extends (...args: infer A) => any
  ? GenerateResult<A, ReturnType<T>>
  : never;

{
  const add = (a: number, b: number) => a + b;
  const three = add(1, 2);

  const curriedAdd = Currying(add);
  const five = curriedAdd(2)(3);
}
