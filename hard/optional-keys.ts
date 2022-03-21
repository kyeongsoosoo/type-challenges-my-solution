{
    type OptionKey<T, K extends keyof T> = T extends {[key in K]-?: T[K]} ? never : K
    type OptionalKeys<T, K extends keyof T = keyof T> = K extends OptionKey<T, K> ? K : never
    
}