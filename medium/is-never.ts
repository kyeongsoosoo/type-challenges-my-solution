{
    type IsNever<A> = [A] extends [never] ? true : false;   
}