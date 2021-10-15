
declare function MyPromiseAll<T extends any[]>(values: readonly [...T]): PromiseAll<T>

type PromiseAll<P extends any[], N extends any[] = []> = 
    P extends [infer Elem, ...infer Rest] 
        ? Elem extends Promise<infer A>
                ? PromiseAll<Rest, [...N, A]>
                : PromiseAll<Rest, [...N, Elem]>
        : Promise<N>

const promiseA = Promise.resolve(3);
const promiseB = 42;
const promiseC = new Promise<string>((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

const testA = MyPromiseAll([promiseA, promiseB, promiseC])