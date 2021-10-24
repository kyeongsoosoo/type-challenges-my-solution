{
    type IsUnion<A, T = A> = 
        A extends A 
            ? [T] extends [A]
                ? false
                : true
            : false
    
    type case1 = IsUnion<string>  // false
    type case2 = IsUnion<string|number>  // true
    type case3 = IsUnion<[string|number]>  // false

}