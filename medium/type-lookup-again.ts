interface Cat {
    type: 'cat'
    breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}
  
  interface Dog {
    type: 'dog'
    breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
    color: 'brown' | 'white' | 'black'
}

type MyLookUp<K, Key> = 
    K extends {'type': Key} 
        ? K
        : never

type MyDogType = MyLookUp<Cat | Dog, 'dog'> // expected to be `Dog`