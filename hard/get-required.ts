{
  type GetRequired<T> = {
    [P in keyof T as T[P] extends Required<T>[P] ? P : never]: T[P];
  };

  type I = GetRequired<{ foo: number; bar?: undefined }>; // expected to be { foo: number }

  type test = Required<{ bar: undefined }>;
}
