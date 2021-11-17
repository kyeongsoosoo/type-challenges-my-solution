{
    type ObjectEntries<O, K = keyof O> = 
        K extends keyof O
            ? [K, Required<O>[K]]
            : never

            interface Model {
                name: string;
                age: number;
                locations: string[] | null;
              }
              type modelEntries = ObjectEntries<Partial<Model>> // ['name', string] | ['age', number] | ['locations', string[] | null];
              
}