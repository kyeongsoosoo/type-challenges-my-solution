type Includes<T extends readonly unknown[], U> = 
    T extends readonly (string|number)[] 
        ? U extends T[number] 
            ? true 
            : false 
        : false;

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> 