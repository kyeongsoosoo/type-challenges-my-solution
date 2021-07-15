{
    type Test = -100;

    type Absolute<K extends number | string> = 
        K extends `${infer R1}${infer R2}`  
            ? R1 extends '-'
                ? R2
                : R1
        : Absolute<`${K}`>
                
            
            

    type Result = Absolute<Test>
}