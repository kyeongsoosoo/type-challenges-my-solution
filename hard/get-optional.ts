{
  type CheckOptional<A, K extends keyof A> = Partial<A>[K] extends A[K]
    ? K
    : never;
  type FilterNotOptionalUndefined<
    A,
    K extends keyof A
  > = A[K] extends Required<A>[K] ? never : K;
  type GetOptionalKey<A, K extends keyof A> = K extends CheckOptional<A, K>
    ? K extends FilterNotOptionalUndefined<A, K>
      ? K
      : never
    : never;

  type GetOptional<A> = {
    [K in keyof A as GetOptionalKey<A, K>]: A[K];
  };

  type I = GetOptional<{ foo: undefined; bar?: undefined }>;
}
