{
    type RequiredKey<A, K extends keyof A> =  Omit<A, K> extends A ? never : K
    type RequiredKeys<A, K extends keyof A = keyof A> = K extends RequiredKey<A, K> ? K : never

    type Result = RequiredKeys<{ foo: number; bar?: string }>;
// expected to be “foo”
}