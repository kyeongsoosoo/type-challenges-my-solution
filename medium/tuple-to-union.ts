type TupleToUnion<K extends Array<any>> = K[number]

type Arr = ['1','2','3']


const a: TupleToUnion<Arr> = "1";