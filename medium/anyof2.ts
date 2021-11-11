{
    type EmptyElem = 0 | "" | false | [] | {[key: string]: never}

    type AnyOf<T extends any[], F = T> =
        T extends [infer First, ...infer Rest]
                ? First extends EmptyElem 
                    ? AnyOf<Rest, F>
                    : true
                : false

    type Sample1 = AnyOf<[1, "", false, [], {}]>; // expected to be true.
    type Sample2 = AnyOf<[0, "", false, [], {}]>; // expected to be false.
                
}