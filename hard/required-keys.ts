{
    type RequiredKey<A, K extends keyof A> = A extends Required<{[key in K]: A[key]}> ? K : never
    type RequiredKeys<A, K extends keyof A = keyof A> = K extends RequiredKey<A, K> ? K : never

    type Result = RequiredKeys<{ foo: number; bar?: string }>;
// expected to be “foo”
}