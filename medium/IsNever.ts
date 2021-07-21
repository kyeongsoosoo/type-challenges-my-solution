{
    type IsNever<A extends any> = [A] extends never[] ? true : false;

    type B = IsNever<never>
}

//https://github.com/type-challenges/type-challenges/issues/1894
//Because never can not exntends never, but never[] can extends never[]