declare global {
  interface Array<T> {
    toSorted(compareFn?: (a: T, b: T) => number): T[];
  }
}

export type Admin = {
  id: string;
  photo: string;
  firstName: string;
  lastName: string;
  country: string;
}[];
