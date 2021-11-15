{
    type FilterKey<K extends keyof O, O, V> = 
        K extends K
            ? O[K] extends V
                ? K
                : never
            : never

    type PickByType<O, V> = {
        [Key in FilterKey<keyof O, O, V>]: O[Key]
    }

    type OnlyBoolean = PickByType<{
        name: string
        count: number
        isReadonly: boolean
        isEnable: boolean
      }, boolean> // { isReadonly: boolean; isEnable: boolean; }
      
}