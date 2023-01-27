export namespace Calculator {
  export class Basic {
    constructor() {}
    sum(...args: number[]): number {
      return args.reduce((acc, current) => acc + current, 0);
    }
  }
  export class Scientific {
    constructor() {}
    sum(...args: number[]): number {
      return args.reduce((acc, current) => acc + current, 0);
    }
  }
  export class Programmer {}
}
