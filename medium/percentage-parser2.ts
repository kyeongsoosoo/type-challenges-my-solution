{
    type Operator = '+' | '-'
    type Percentage = '%'
    type ParseOperator<O> = O extends '+' ? '+' : '-'

    type PercentageParser<K> = 
        K extends `${infer O}${infer Rest}`
            ? O extends Operator
                ? Rest extends `${infer num}${Percentage}`
                    ? [O, num, Percentage]
                    : [O, Rest, '']
                : K extends `${infer num}${Percentage}`
                    ? ['', num, Percentage]
                    : ['', K, '']
            : ['', '', '']
    
    type PString1 = '+1'
    
type PString2 = '+85%'
type PString3 = '-85%'
type PString4 = '85%'
type PString5 = '85'

type R1 = PercentageParser<PString1>  // expected ['', '', '']
type R2 = PercentageParser<PString2>  // expected ["+", "85", "%"]
type R3 = PercentageParser<PString3>  // expected ["-", "85", "%"]
type R4 = PercentageParser<PString4>  // expected ["", "85", "%"]
type R5 = PercentageParser<PString5>  // expected ["", "85", ""]

}