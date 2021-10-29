{
    type ObjectEntries<A> = 
        keyof A extends infer Key 
            ? Key extends keyof A
                ? [Key, Required<A>[Key]]
                : never
            : never

            interface Model {
                name: string;
                age: number;
                locations: string[] | null;
              }
              type modelEntries = ObjectEntries<Partial<Model>> // ['name', string] | ['age', number] | ['locations', string[] | null];
              
}