{
    type Operators = "+" | "-"
    type Percentage = "%"

    type PercentageParser<A extends string> = 
        A extends `${infer B}${infer C}`
            ? B extends Operators
                ? C extends `${infer Rest}${Percentage}`
                    ? [B, Rest, Percentage]
                    : [B, C, ""]
                : ["", A extends `${infer Rest}${Percentage}` ? Rest : never, Percentage]
            : ["","",""]
}