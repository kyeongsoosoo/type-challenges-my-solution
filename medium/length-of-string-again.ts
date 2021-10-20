{
    type Split<S extends string> = S extends `${infer A}${infer B}` ? [A, ...Split<B>] : [];
    type MyLength<S extends string> = Split<S>['length'];
}