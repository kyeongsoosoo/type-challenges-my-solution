{
    type MyIncludes<A extends readonly any[], K> = K extends A[number] ? true : false

    type isPillarMen = MyIncludes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Santana'> // expected to be `false`

}