type MyReturnType<K> = K extends (...args: infer R1) => infer U ? U : never;

const fn = (v: boolean) => {
    if (v)
      return 1
    else
      return 2
  }

type a = MyReturnType<typeof fn> // should be "1 | 2"