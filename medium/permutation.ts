{
    type Permutation<T, P=T> = [T] extends [never] ? [] : T extends any ? [T, ...Permutation<Exclude<P,T>>] : P;

    type Te<T,P=T> = Exclude<P,T>;

    type t1 = Te<'A','A'|'B'|'C'>

    type perm = Permutation<'A' | 'B' | 'C'>
   
}