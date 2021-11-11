{
    type AnyOf<T extends any[]> = 
        T extends [infer R1, ...infer args] 
            ? R1 extends 0 | '' | false | [] | { [key: string] : never } 
                ? AnyOf<args> 
                : true 
            : false;
    
    type Sample1 = AnyOf<[1, "", false, [], {}]>; // expected to be true.
    type Sample2 = AnyOf<[0, "", false, [], {}]>; // expected to be false.

}