export type MergeRight<A, B> = A extends object
  ? B extends object
    ? {
        [K in keyof (A & B)]: K extends keyof B
          ? K extends keyof A
            ? MergeRight<A[K], B[K]>
            : B[K]
          : K extends keyof A
          ? A[K]
          : never;
      }
    : B
  : B;
