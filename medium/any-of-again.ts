{
    type Falsy = false | [] | 0 | "" | {[key: string]: never}
    type AnyOf<T extends readonly any[]> = T extends Falsy[] ? false : true

    type Testy = 1 | 2
    type Test<T extends readonly any[]> = T extends Testy[] ? false : true

    type Sample3 = Test<[1,2]>; // expected to be true.
    type Sample1 = AnyOf<[1, "", false, [], {}]>; // expected to be true.
    type Sample2 = AnyOf<[0, "", false, [], {}]>; // expected to be false.

}